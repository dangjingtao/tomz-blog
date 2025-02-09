import { useRef } from "preact/hooks";
import { logger } from "@/lib/logger.ts";
import MarkdownCate from "./MarkdownCate.tsx";

interface MarkdownPageProps {
  markdownContent: string;
  toc: any[];
}

export default function MarkdownPage(
  { markdownContent, toc }: MarkdownPageProps,
) {
  const containerRef = useRef(null);

  return (
    <>
      <main class="flex-1 relative min-h-full overflow-auto">
        <div class="flex gap-5 bg-white p-10">
          <div class="flex-1 max-w-[calc(100vw-700px)]">
            <div
              ref={containerRef}
              class="markdown-body"
              dangerouslySetInnerHTML={{ __html: markdownContent }}
            />
          </div>

          <div class="w-[300px] max-h-96 overflow-auto sticky top-10">
            <MarkdownCate toc={toc} />
          </div>
        </div>
      </main>
    </>
  );
}
