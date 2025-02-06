import { Head } from "$fresh/runtime.ts";
import { useEffect, useRef, useState } from "preact/hooks";

interface MarkdownPageProps {
  markdownCotent: string;
}

export default function MarkdownPage(
  { markdownCotent }: MarkdownPageProps,
) {
  if (!markdownCotent) {
    return <h1>File not found.</h1>;
  }

  const markdownRef = useRef(null);

  useEffect(() => {
    const zeroMdElement = document.createElement("zero-md");
    zeroMdElement.innerHTML = `
      <style>
      
      </style>
      <script type="text/markdown">${markdownCotent}</script>
    `;
    const markdownBody = markdownRef?.current;
    if (markdownBody) {
      markdownBody.innerHTML = "";
      markdownBody.appendChild(zeroMdElement);
    }
  }, [markdownCotent]);

  return (
    <>
      <Head>
        <script
          type="module"
          src="https://cdn.jsdelivr.net/npm/zero-md@3?register"
        >
        </script>
      </Head>
      <main class="flex-1 min-h-full overflow-auto">
        <div class="bg-white p-10">
          <div ref={markdownRef} class="markdown-body" />
        </div>
      </main>
    </>
  );
}
