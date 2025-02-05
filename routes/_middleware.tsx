import { FreshContext } from "$fresh/server.ts";
import config from "@/config/index.ts";
import { setCookie } from "$cookie";

const { GITHUB_CLIENT_ID } = config.github;

export async function handler(
  req: Request,
  ctx: FreshContext,
) {
  const resp = await ctx.next();
  setCookie(resp.headers, {
    name: "GITHUB_CLIENT_ID",
    value: GITHUB_CLIENT_ID,
    path: "/",
    maxAge: 60 * 60 * 24,
  });

  return resp;
}
