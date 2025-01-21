export const handler = {
  async GET(req, _ctx) {
    const data = { message: "This is a GET request" };
    return new Response(JSON.stringify(data), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  },
};
