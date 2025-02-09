import { v4 as uuidv4 } from "@uuid";
import DOMPurify from "@dompurify";
import { marked } from "@marked";
import { markedHighlight } from "@marked-highlight";
import hljs from "@highlight.js";
import request from "@/lib/request.ts";
import { logger } from "@/lib/logger.ts";
import CFG from "@/config/index.ts";

const { GITHUB_REMOTES, GITHUB_REPO, GITHUB_BRANCH } = CFG.github;

export interface FetchMarkdownResponse {
  rawMarkdown: string;
  error: string;
}

export interface MarkdownToc {
  depth: number;
  text: string;
  id: string;
}

export interface MarkdownContext {
  markdownContent: string;
  toc: MarkdownToc[];
  error: string;
}

class MarkdownProcessor {
  private headers: { depth: number; text: string; id: string }[] = [];
  private marked: typeof marked;

  constructor() {
    this.marked = marked;
    this.initializeMarked();
  }

  private initializeMarked() {
    this.marked.use(markedHighlight({
      emptyLangClass: "hljs",
      langPrefix: "hljs language-",
      highlight(code: string, lang: string) {
        const language = hljs.getLanguage(lang) ? lang : "plaintext";
        const codeblock = hljs.highlight(code, { language });
        return codeblock.value;
      },
    }));
  }

  public getToc(): { depth: number; text: string; id: string }[] {
    this.headers = [];
    this.marked.use({
      renderer: {
        heading: ({ text, depth }: { text: string; depth: number }) => {
          const id = `toc-${uuidv4()}`;
          this.headers.push({ depth, text, id });
          return `<h${depth} id="${id}">${text}</h${depth}>`;
        },
      },
    });
    return this.headers;
  }

  public async parseMarkdown(rawMarkdown: string): Promise<string> {
    return await this.marked.parse(rawMarkdown);
  }
}

class MarkdownFetcherChain {
  private chain: Array<() => Promise<FetchMarkdownResponse>> = [];
  private errorStack: string[] = [];

  add(fn: () => Promise<FetchMarkdownResponse>): MarkdownFetcherChain {
    this.chain.push(fn);
    return this;
  }

  async execute(): Promise<FetchMarkdownResponse> {
    for (const fn of this.chain) {
      const result = await fn();
      if (!result.error) {
        return result;
      } else {
        logger.error(`Error fetching markdown: ${result.error}`);
        this.errorStack.push(result.error);
      }
    }
    return { rawMarkdown: "", error: `${this.errorStack.join("\n")}` };
  }
}

const markdownProcessor = new MarkdownProcessor();

const fetchRemoteMarkdown = async (
  path: string,
  lang: string,
  nameSpace: string,
): Promise<FetchMarkdownResponse> => {
  try {
    const data = await request({
      url:
        `${GITHUB_REMOTES}/${GITHUB_REPO}/${GITHUB_BRANCH}/${nameSpace}/${path}_${lang}.md`,
      method: "GET",
    });
    const { data: rawMarkdown, error } = data;
    return { rawMarkdown, error: typeof error === "string" ? error : "" };
  } catch (err) {
    const errorMessage = `Failed to fetch remote markdown: ${
      (err as Error).message
    }`;
    return {
      rawMarkdown: "",
      error: errorMessage,
    };
  }
};

const getLocalMarkdown = async (
  path: string,
  lang: string,
  nameSpace: string,
): Promise<FetchMarkdownResponse> => {
  try {
    const rawMarkdown = await Deno.readTextFile(
      `${Deno.cwd()}/${nameSpace}/${path}_${lang}.md`,
    );
    return {
      rawMarkdown,
      error: "",
    };
  } catch (err) {
    const errorMesssage = `Failed to read local markdown file: ${
      (err as Error).message
    }`;
    return {
      rawMarkdown: "",
      error: errorMesssage,
    };
  }
};

export const fetchMarkdown = async (
  path: string,
  lang: string,
  nameSpace: string,
): Promise<FetchMarkdownResponse> => {
  logger.info(`Fetching markdown for ${path}_${lang}.md`);
  const markdownFetcher = new MarkdownFetcherChain();

  markdownFetcher
    .add(() => fetchRemoteMarkdown(path, lang, nameSpace))
    .add(() => getLocalMarkdown(path, lang, nameSpace));

  return await markdownFetcher.execute();
};

export const renderMarkdown = async (
  rawMarkdown: string,
): Promise<MarkdownContext> => {
  try {
    const toc = markdownProcessor.getToc();
    const sanitizedMarkdown = DOMPurify.sanitize(rawMarkdown);
    const markdownContent = await markdownProcessor.parseMarkdown(
      sanitizedMarkdown,
    );
    return { markdownContent, toc, error: "" };
  } catch (error) {
    return {
      markdownContent: "",
      toc: [],
      error: `Error rendering markdown: ${(error as Error).message}`,
    };
  }
};
