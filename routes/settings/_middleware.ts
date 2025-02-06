import { FreshContext } from "$fresh/server.ts";
import jwtMiddleware from "@/middlewares/jwt.ts";
export async function handler(
  req: Request,
  ctx: FreshContext,
) {
  return await jwtMiddleware(req, ctx);
}
