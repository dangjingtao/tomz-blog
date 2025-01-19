import { extract } from "https://deno.land/std@0.160.0/encoding/front_matter.ts";
import { join } from "$std/path/mod.ts";
import { readAllFilesInDirectory } from "./fs.ts";

export interface Post {
  fullPath: string;
  relativePath: string;
  title: string;
  publishedAt: Date;
  content: string;
  snippet: string;
}

export async function getPosts(): Promise<Post[]> {
  const promises = [];
  const allFiles = await readAllFilesInDirectory("./posts");
  for await (const file of allFiles) {
    const { extension, relativePath, fullPath, content } = file;
    promises.push(
      getPost({ relativePath, fullPath, extension, content }),
    );
  }
  const posts = await Promise.all(promises) as Post[];
  posts.sort((a, b) => b.publishedAt.getTime() - a.publishedAt.getTime());
  return posts;
}

export async function getPost(
  file: {
    relativePath: string;
    fullPath: string;
    extension?: string;
    content?: string;
  },
): Promise<Post | null> {
  const { fullPath, relativePath } = file;
  const filePath = fullPath || join("./posts", `${relativePath}.md`);
  console.log("filePath", filePath);
  const text = await Deno.readTextFile(join(`${filePath}`));
  const { attrs, body } = extract(text);
  return {
    fullPath,
    relativePath,
    title: attrs.title,
    publishedAt: new Date(attrs.published_at),
    content: body,
    snippet: attrs.snippet,
    coverImage: attrs.coverImage,
  };
}
