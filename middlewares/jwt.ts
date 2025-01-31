import { FreshContext } from "$fresh/server.ts";
import { decode } from "@gz/jwt";
import { getCookies } from "$cookie";
import CFG from "@/config/index.ts";

const { JSON_WEB_TOKEN_SECRET } = CFG.global;

async function jwtMiddleware(request: Request, ctx: FreshContext) {
  const { token } = getCookies(request.headers);
  if (!token) {
    return new Response("", {
      status: 307,
      headers: { Location: "/error?status=401" },
    });
  }

  try {
    const decoded = await decode(token, JSON_WEB_TOKEN_SECRET, {
      algorithm: "HS256",
    });
    ctx.state.user = decoded;
    ctx.state.hidefooter = true;
  } catch (err) {
    return new Response("", {
      status: 307,
      headers: { Location: "/error?status=401" },
    });
  }

  return await ctx.next();
}

export default jwtMiddleware;
