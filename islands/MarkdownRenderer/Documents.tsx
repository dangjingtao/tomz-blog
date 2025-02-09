import { useEffect, useState } from "preact/hooks";
import { renderMarkdown } from "@/utils/markdown.ts";
import request from "@/lib/request.ts";
import Aside from "./Aside.tsx";
import Main from "./Main.tsx";
import ErrorPage from "@/routes/error/index.tsx";

interface MarkdownState {
  loading: boolean;
  toc: any[];
  markdownContent: string;
  directoryTree: any[];
  docSpace: string;
  error: string;
}

const initialMarkdownState: MarkdownState = {
  toc: [],
  markdownContent: "",
  directoryTree: [],
  docSpace: "",
  loading: true,
  error: "",
};

export default function MarkdownPage(props: { path: string }) {
  const { path } = props;

  const [markdown, setMarkdown] = useState<MarkdownState>(initialMarkdownState);

  useEffect(() => {
    (async () => {
      try {
        const { data } = await request({
          url: "/api/docs/markdown",
          method: "GET",
          params: { path },
        });
        const { rawMarkdown, directoryTree, docSpace } = JSON.parse(data);
        const result: { toc: any[]; markdownContent: string } =
          await renderMarkdown(rawMarkdown);
        setMarkdown({
          ...result,
          directoryTree,
          docSpace,
          loading: false,
          error: "",
        });
      } catch (error) {
        setMarkdown((prev) => ({
          ...prev,
          error: (error as Error).message,
          loading: false,
        }));
      }
    })();
  }, [path]);

  const { toc, markdownContent, directoryTree, docSpace, error, loading } =
    markdown;
  if (!error && loading) {
    return <ErrorPage status="loading" />;
  }

  if (error) {
    return <ErrorPage status="500" />;
  }

  return (
    <div class="flex gap-1 h-[calc(100vh-52px)] overflow-hidden">
      <Aside directoryTree={directoryTree} docSpace={docSpace} />
      <Main markdownContent={markdownContent} toc={toc} />
    </div>
  );
}
