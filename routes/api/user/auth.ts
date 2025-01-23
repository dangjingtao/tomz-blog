// routes/api/example.ts
import { auth } from "@/utils/user.ts";
export const handler = {
  async POST(req, _ctx) {
    const { code } = await req.json();
    const response = await auth(code);
    if (response.status === 200) {
    }
    return new Response(JSON.stringify(response), {
      status: response.status,
      headers: { "Content-Type": "application/json" },
    });
  },
};
