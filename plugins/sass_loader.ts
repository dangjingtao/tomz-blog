import { Plugin } from "$fresh/server.ts";
import { join } from "https://deno.land/std/path/mod.ts";
import SassLang from "npm:sass@latest";

const fresh_sass_loader: Plugin = () => {
  return {
    name: "sass_loader",
    async renderAsync(ctx: any) {
      await ctx.renderAsync();

      // 读取根目录下的 sass 文件夹中的所有文件
      const sassDir = join(Deno.cwd(), "sass");
      const files = [];
      for await (const dirEntry of Deno.readDir(sassDir)) {
        if (dirEntry.isFile) {
          const content = await Deno.readTextFile(
            sassDir + "/" + dirEntry.name,
          );
          files.push({
            id: dirEntry.name,
            cssText: (await SassLang.compileStringAsync(content)).css,
          });
        }
      }

      return {
        scripts: [],
        styles: files,
      };
    },
  };
};

export default fresh_sass_loader;
