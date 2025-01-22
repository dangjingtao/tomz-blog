import { FreshContext } from "$fresh/server.ts";
// import en from "@/i18n/en.json" with { type: "json" };
// import cn from "@/i18n/cn.json" with { type: "json" };
// import Cookie from "@/lib/cookie.ts";

export async function handler(
  req: Request,
  ctx: FreshContext,
) {
  const resp = await ctx.next();

  return resp;
}
