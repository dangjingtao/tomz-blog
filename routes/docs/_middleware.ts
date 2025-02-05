import { FreshContext } from "$fresh/server.ts";

export async function handler(
  req: Request,
  ctx: FreshContext,
) {
  ctx.state.hidefooter = true;
  const resp = await ctx.next();

  return resp;
}
