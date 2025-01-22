// routes/api/example.ts
import { auth } from "@/utils/user.ts";
import kv from "@/lib/kv.ts";
export const handler = {
  async POST(req, _ctx) {
    const { code } = await req.json();
    const response = await auth(code);
    if (response.status === 200) {
      await kv.set(["preferences", "user"], response);
    }
    return new Response(JSON.stringify(response), {
      status: response.status,
      headers: { "Content-Type": "application/json" },
    });
  },
};
