import {
  basename,
  dirname,
  fromFileUrl,
} from "https://deno.land/std@0.168.0/path/mod.ts";

export function getCurrentDirName(
  currentFileUrl: string | URL | undefined,
): string {
  if (!currentFileUrl) {
    throw new Error("currentFileUrl is undefined");
  }
  const currentFilePath = fromFileUrl(currentFileUrl); //Current file path

  const currentDirPath = dirname(currentFilePath); // Current directory path

  const currentDirName = basename(currentDirPath); // Current directory name

  return currentDirName;
}
