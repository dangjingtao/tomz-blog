import { join, relative } from "https://deno.land/std/path/mod.ts";
import kv from "@/lib/kv.ts";
import Cookie from "@/lib/cookie.ts";
import { fetchMarkdown } from "@/utils/markdown.ts";
import { getRequestParams } from "@/lib/apiUtils.ts";
import { logger } from "@/lib/logger.ts";

const getFileExtension = (fileName: string) => {
  const parts = fileName.split(".");
  return parts.length > 1 ? parts.pop() : "unknown";
};

export async function readAllFilesInDirectory(
  directory: string,
  baseDirectory: string = directory,
  files: any[] = [],
) {
  for await (const dirEntry of Deno.readDir(directory)) {
    const fullPath = `${directory}/${dirEntry.name}`;
    const extension = getFileExtension(dirEntry.name) || "";
    const relativePath = `${
      fullPath.replace(`${baseDirectory}/`, "").replace(`.${extension}`, "")
    }`;
    if (dirEntry.isFile) {
      const content = await Deno.readTextFile(fullPath);
      files.push({
        fullPath,
        relativePath,
        name: dirEntry.name,
        extension,
        content,
      });
    }
    if (dirEntry.isDirectory) {
      await readAllFilesInDirectory(fullPath, baseDirectory, files);
    }
  }
  return files;
}

export interface DirectoryNode {
  name: string;
  path: string;
  children?: DirectoryNode[];
}

export const getDocsDirectoryTree = async (
  dirPath: string,
  lang: string,
  workDir: string,
): Promise<DirectoryNode[]> => {
  const tree: DirectoryNode[] = [];

  const buildTree = async (
    currentPath: string,
    currentTree: DirectoryNode[],
    lang: string,
    workDir: string,
  ) => {
    for await (const entry of Deno.readDir(currentPath)) {
      const fullPath = join(currentPath, entry.name);
      const relativePath = workDir + "/" + relative(dirPath, fullPath);
      if (entry.isDirectory) {
        const dirNode: DirectoryNode = {
          name: entry.name,
          path: "",
          children: [],
        };
        currentTree.push(dirNode);
        await buildTree(fullPath, dirNode.children!, lang, workDir);
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

export const getDirectoryTree = async (
  workDir: string,
  lang = "CN",
) => {
  lang = lang.toUpperCase();

  const directoryPath = join(Deno.cwd(), `docs/${workDir}`);
  const cacheKey = `directoryTree:${workDir}:${lang}`;

  let directoryTree: DirectoryNode[] = [];

  try {
    const cachedTree = await kv.get([cacheKey]);
    if (cachedTree?.value) {
      logger.info(`Using cache for workDir: ${workDir}`);
      directoryTree = cachedTree.value as DirectoryNode[];
    } else {
      directoryTree = await getDocsDirectoryTree(
        directoryPath,
        lang,
        workDir,
      );
      await kv.set([cacheKey], directoryTree, { expireIn: 3600 });
    }
  } catch (error) {
    return { directoryTree, error: (error as Error).message };
  }

  return { directoryTree, error: "" };
};

export interface StaticMarkdownResponseData {
  error: string | null;
  docSpace: string;
  rawMarkdown: string | null;
  directoryTree: any[] | null;
}

export const staticMarkdownHandler = async (
  request: Request,
  scope: string,
) => {
  const { path } = getRequestParams(request);
  const lang = Cookie.get("lang") || "CN";
  const workDir = path.split("/")[0];

  const { directoryTree, error: getDirectoryTreeError } =
    await getDirectoryTree(workDir, lang);

  const { rawMarkdown, error: fetchMarkdownError } = await fetchMarkdown(
    path,
    lang,
    scope,
  );
  const errorsArray = [fetchMarkdownError, getDirectoryTreeError].filter((e) =>
    !!e
  );
  const errors = errorsArray.length ? errorsArray.join("\n") : null;

  const data: StaticMarkdownResponseData = {
    error: errors || null,
    docSpace: workDir,
    rawMarkdown,
    directoryTree,
  };

  return new Response(JSON.stringify(data), {
    headers: {
      "content-type": "application/json",
    },
  });
};
