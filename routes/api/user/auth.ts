import { auth } from "@/utils/user.ts";
import CFG from "@/config/index.ts";
import kv from "@/lib/kv.ts";
import { encode } from "@gz/jwt";
import { setCookie } from "$cookie";

const { JSON_WEB_TOKEN_SECRET } = CFG.global;

export const handler = {
  async POST(req, _ctx) {
    const { code } = await req.json();
    const response = await auth(code);
    if (response.status === 200) {
      const { notification_email } = response.data;
      const key = ["users", notification_email];
      const value = response.data;
      await kv.set(key, value);
    }

    // Generate JWT token
    const token = await encode(response, JSON_WEB_TOKEN_SECRET, {
      algorithm: "HS256",
    });

    response.token = token;
    const headers = new Headers({
      "Content-Type": "application/json",
    });

    setCookie(headers, {
      name: "token",
      value: token,
      path: "/",
      maxAge: 60 * 60 * 24,
    });

    return new Response(JSON.stringify(response), {
      status: response.status,
      headers,
    });
  },
  //
  async GET(req, _ctx) {
    const { notification_email } = _ctx.params;
    const key = ["users", notification_email];
    const result = await kv.get(key);
    result.value; // { name: "Alice" }
    return new Response(JSON.stringify(result.value), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  },
};
