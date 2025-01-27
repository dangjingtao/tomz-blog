import { Handlers } from "$fresh/server.ts";
import { PageProps } from "$fresh/server.ts";
import { getPost, Post } from "@/utils/posts.ts";
import { CSS, render } from "$gfm";
import { Head } from "$fresh/runtime.ts";
import { useScript, useStyle } from "$fresh/runtime.ts";
import Helmet from "preact-helmet";

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
  return (
    <div class="w-full md:w-[1440px] md:p-5 mx-auto">
      <Head>
        <style dangerouslySetInnerHTML={{ __html: CSS }} />
      </Head>
      <Helmet title="My Title" />
      <div className="text-left flex flex-col md:flex-row gap-3">
        <div className="flex-1">
          <BlogPostSummary {...post} />
          <div
            className="markdown-body p-10 shadow-md"
            dangerouslySetInnerHTML={{ __html: render(post.content) }}
          />
        </div>
        <aside className="w-full md:w-[350px]  mt-5 md:mt-0 sticky top-0">
          {/* Sidebar content goes here */}
          <div className="p-4 border shadow-sm bg-white">
            <h3 className="text-lg font-bold mb-2">Sidebar</h3>
            <p className="text-gray-700">
              Additional information or widgets can be placed here.
            </p>
          </div>
        </aside>
      </div>
    </div>
  );
}
