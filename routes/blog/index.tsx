import { Handlers } from "$fresh/server.ts";
import { PageProps } from "$fresh/server.ts";
import { getPosts, Post } from "@/utils/posts.ts";
import { getCurrentDirName } from "@/utils/path.ts";
import Pagination from "@/islands/Pagination.tsx";
import BloggerInfo from "@/components/BloggerInfo/index.tsx";
import CFG from "@/config/index.ts";
import PostCardBig from "@/islands/PostCards/PostCard.tsx";

const currentDirName = getCurrentDirName(import.meta.url);

const mockBloggerInfo = {
  name: "Tomz Dang",
  avatar: "/images/avatar.png",
  bio:
    "Tomz is a passionate blogger who writes about technology and programming.",
  socialLinks: [
    { platform: "Twitter", url: "https://twitter.com/johndoe" },
    { platform: "LinkedIn", url: "https://linkedin.com/in/johndoe" },
    { platform: "GitHub", url: "https://github.com/johndoe" },
  ],
};

export const handler: Handlers<Post[]> = {
  async GET(_req, ctx) {
    const posts = await getPosts();
    return ctx.render(posts);
  },
};

function PostCard(props: { post: Post }) {
  const { post } = props;
  const { coverImage } = post;
  return (
    <div class="py-8 border(t gray-200) flex flex-col md:flex-row gap-8">
      <time class="hidden md:block text-gray-500 border-r border-r-gray-300 w-full md:w-1/4 text-center">
        {new Date(post.publishedAt).toLocaleDateString("en-us", {
          year: "numeric",
          month: "long",
          day: "numeric",
        })}
      </time>
      <div class="w-full md:w-3/4 pl-0 md:pl-4">
        <a
          class="block :col-span-2 p-4 md:p-0"
          href={`/${currentDirName}/${post.relativePath}`}
        >
          <h3 class="text-2xl font-bold text-left pb-4">
            {post.title}
          </h3>
          <time class="block md:hidden text-gray-500 text-left">
            {new Date(post.publishedAt).toLocaleDateString("en-us", {
              year: "numeric",
              month: "long",
              day: "numeric",
            })}
          </time>
          {coverImage && (
            <img
              class="w-full object-cover object-center rounded-lg mt-4"
              src={coverImage}
              alt=""
            />
          )}
          <div class="mt-4 text-left">
            {post.snippet}
          </div>
        </a>
      </div>
    </div>
  );
}

const PostCardNew = (props: { post: Post }) => {
  const { post } = props;
  const { coverImage } = post;
  return (
    <div class="border(t gray-200) flex flex-col md:flex-row gap-8">
      {
        /* <time class="hidden md:block text-gray-500 border-r border-r-gray-300 w-full md:w-1/4 text-center">
        {new Date(post.publishedAt).toLocaleDateString("en-us", {
          year: "numeric",
          month: "long",
          day: "numeric",
        })}
      </time> */
      }
      <div class="w-full pl-0">
        <a
          class="block :col-span-2 p-4 md:p-0"
          href={`/${currentDirName}/${post.relativePath}`}
        >
          {coverImage && (
            <img
              class="w-full object-cover object-center rounded-lg"
              src={coverImage}
              alt=""
            />
          )}
          <h3 class="text-lg font-bold pt-1 pb-1">
            {post.title}
          </h3>
          <time class="block md:hidden text-gray-500 text-left">
            {new Date(post.publishedAt).toLocaleDateString("en-us", {
              year: "numeric",
              month: "long",
              day: "numeric",
            })}
          </time>
          <div class="text-gray-600 text-sm leading-6 text-ellipsis max-h-16 overflow-hidden">
            {post.snippet}
          </div>
        </a>
      </div>
    </div>
  );
};

export default function BlogIndexPage(props: PageProps<Post[]>) {
  const posts = props.data;
  return (
    <div class="bg-blue-50">
      <div
        class="bg-slate-300 md:h-36 bg-url"
        style={{
          backgroundImage: "url(/images/blog.jpg)",
          backgroundSize: "cover",
          backgroundPosition: "center",
          transform: "scaleX(-1)",
        }}
      >
      </div>
      <div class="block md:hidden m-3">
        <BloggerInfo {...mockBloggerInfo} />
      </div>
      <main class="flex flex-row w-full md:w-[1560px] m-auto mt-0 mb-0 bg-white gap-4 p-8">
        <div class="w-1/2">
          <PostCardBig />
        </div>
        <div class="w-1/2 flex gap-8">
          {posts.map((post) => (
            <div class="w-1/2 ">
              <PostCardNew post={post} />
            </div>
          ))}
        </div>

        {
          /* <aside class="hidden md:block w-full md:w-[480px] -mt-8 max-h-[500px] z-20 mr-2">
          <BloggerInfo {...mockBloggerInfo} />
        </aside> */
        }
      </main>
    </div>
  );
}
