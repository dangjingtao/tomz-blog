import { join, relative } from "https://deno.land/std/path/mod.ts";
import { walk } from "https://deno.land/std/fs/mod.ts";
import { Handlers, PageProps } from "$fresh/server.ts";
import request from "@/lib/request.ts";
import Main from "@/islands/MarkdownRenderer/Main.tsx";
import Aside from "@/islands/MarkdownRenderer/Aside.tsx";
import ErrorPage from "@/routes/error/index.tsx";
import { getCookies } from "$cookie";

interface Page {
  markdownContent: string;
  lang: string;
  directoryTree: any[];
  docSpace: string;
}

const fetchRemoteMarkdown = async (path: string, lang: string) => {
  const { data: rawMarkdown, error } = await request({
    url:
      `https://raw.githubusercontent.com/dangjingtao/tomz-blog/main/${path}_${lang}.md`,
    method: "GET",
  });

  return !error ? rawMarkdown : "";
};

const getLocalMarkdown = async (path: string, lang: string) => {
  const result = await Deno.readTextFile(
    `${Deno.cwd()}/docs/${path}_${lang}.md`,
  );
  return result;
};

const getMarkdown = async (path: string, lang: string) => {
  try {
    return await fetchRemoteMarkdown(path, lang);
  } catch (_error) {
    try {
      return await getLocalMarkdown(path, lang);
    } catch (error) {
      return `Error reading markdown file: ${(error as Error).message}`;
    }
  }
};

const getDirectoryTree = async (
  dirPath: string,
  lang: string,
  workDir: string,
) => {
  const tree: any[] = [];

  const buildTree = async (
    currentPath: string,
    currentTree: any[],
    lang: string,
    workDir: string,
  ) => {
    for await (const entry of Deno.readDir(currentPath)) {
      const fullPath = join(currentPath, entry.name);
      const relativePath = workDir + "/" + relative(dirPath, fullPath);
      if (entry.isDirectory) {
        const dirNode = { name: entry.name, path: "", children: [] };
        currentTree.push(dirNode);
        await buildTree(fullPath, dirNode.children, lang, workDir);
      } else {
        const filename = entry.name.split(".")[0];
        const fileNameArr = filename.split("_");
        if (fileNameArr[1]?.toUpperCase() === lang.toUpperCase()) {
          currentTree.push({
            name: fileNameArr[0],
            path: relativePath.replace(".md", "").replace(`_${lang}`, ""),
          });
        }
      }
    }
  };

  try {
    await buildTree(dirPath, tree, lang, workDir);
  } catch (error) {
    console.error("Error reading directory:", error);
  }

  return tree;
};

export const handler: Handlers<Page> = {
  async GET(req, ctx) {
    const { path } = ctx.params;
    let { lang = "CN" } = getCookies(req.headers);
    lang = lang.toUpperCase();

    const workDir = path.split("/")[0];

    // 遍历`docs/${path}`目录下的所有文件
    const directoryPath = join(Deno.cwd(), `docs/${workDir}`);
    let directoryTree = [];

    try {
      directoryTree = await getDirectoryTree(directoryPath, lang, workDir);
    } catch (error) {
      console.error("Error reading directory:", error);
    }

    const markdownContent = await getMarkdown(path, lang);

    return ctx.render({
      docSpace: workDir,
      markdownContent,
      lang,
      directoryTree,
    });
  },
};

export default function MarkdownPage(props: any) {
  const { data } = props;
  const { markdownContent = "", directoryTree = [], docSpace } = data;
  if (!markdownContent) {
    return <ErrorPage status="404" title={"404"} content={"File not found."} />;
  }
  return (
    <div class="flex h-[calc(100vh-52px)] overflow-hidden">
      <Aside directoryTree={directoryTree} docSpace={docSpace} />
      <Main markdownCotent={markdownContent} />
    </div>
  );
}
