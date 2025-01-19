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
