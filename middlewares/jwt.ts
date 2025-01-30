import { FreshContext } from "$fresh/server.ts";
import { decode } from "@gz/jwt";
import CFG from "@/config/index.ts";
import { getCookies } from "$cookie";

const { JSON_WEB_TOKEN_SECRET } = CFG.global;

async function jwtMiddleware(request: Request, ctx: FreshContext) {
  const { token } = getCookies(request.headers);
  if (!token) {
    return new Response("Unauthorized", { status: 401 });
  }

  try {
    const decoded = await decode(token, JSON_WEB_TOKEN_SECRET, {
      algorithm: "HS256",
    });
    ctx.state.user = decoded;
  } catch (err) {
    return new Response(`Unauthorized , ${err.message}`, { status: 401 });
  }

  return await ctx.next();
}

export default jwtMiddleware;
