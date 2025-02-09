import { staticMarkdownHandler } from "@/utils/fs.ts";

export const handler = {
  async GET(request: Request) {
    const scope = "docs";
    return await staticMarkdownHandler(request, scope);
  },
};
