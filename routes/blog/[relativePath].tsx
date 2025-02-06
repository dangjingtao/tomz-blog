import { Handlers } from "$fresh/server.ts";
import { PageProps } from "$fresh/server.ts";
import { getPost, Post } from "@/utils/posts.ts";
import MarkdownPage from "@/components/MarkdownPage/index.tsx";
import { marked } from "@marked";
// import { useCallback, useEffect } from "preact/hooks";
import { render } from "$gfm";
import MarkdownCate, { renderMarkdownTOC } from "@/islands/MarkdownCate.tsx";

export const handler: Handlers<Post> = {
  async GET(_req, ctx) {
    const { relativePath, fullPath } = ctx.params;
    const post = await getPost({ fullPath, relativePath });
    if (post === null) return ctx.renderNotFound();
    return ctx.render(post);
  },
};

const BlogPostSummary = ({ title, publishedAt, modifiedDate, snippet }) => {
  return (
    <div className="p-6 border-b-2  bg-white text-left">
      <h2 className="text-3xl font-bold mb-2">{title}</h2>
      <div className="text-gray-600 text-sm mb-4">
        {/* <span>Published on: {publishedAt}</span> */}
        {
          /* {modifiedDate && (
          <span className="ml-4">Last modified: {publishedAt}</span>
        )} */
        }
      </div>
      <p className="text-gray-700">{snippet}</p>
    </div>
  );
};

export default function PostPage(props: PageProps<Post>) {
  const post = props.data;

  // const getContent = useCallback((content) => {
  //   marked.setOptions({
  //     renderer: new marked.Renderer(),
  //     gfm: true,
  //   });

  //   const htmlContent = marked.parse(content);
  //   const headers: { level: number; text: string }[] = [];
  //   marked.lexer(content).forEach((token) => {
  //     if (token.type === "heading") {
  //       headers.push({ level: token.depth, text: token.text });
  //     }
  //   });
  //   const toc = renderMarkdownTOC(headers);
  //   return { htmlContent, toc };
  // }, []);

  // const { htmlContent, toc } = getContent();

  return (
    <div className="w-full md:w-[1640px] md:p-5 mx-auto">
      <div className="text-left flex flex-col md:flex-row gap-3">
        <div className="flex-1">
          <BlogPostSummary {...post} />
          <MarkdownPage content={render(post.content)} />
        </div>
        <aside className="w-full md:w-[400px] mt-5 md:mt-0 md:sticky top-[72px] self-start">
          {/* Sidebar content goes here */}
          <div className="p-4 border shadow-sm bg-white">
            <h3 className="text-lg font-bold mb-2">TOC</h3>
            <MarkdownCate content={post.content} />
          </div>
        </aside>
      </div>
      <script>
      </script>
    </div>
  );
}
