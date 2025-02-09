import { Handlers } from "$fresh/server.ts";
import Documents from "@/islands/MarkdownRenderer/Documents.tsx";

interface Page {
  path: string;
}

export const handler: Handlers<Page> = {
  GET(req, ctx) {
    const { path } = ctx.params;
    return ctx.render({
      path,
    });
  },
};

export default function MarkdownPage(props: { data: Page }) {
  const { path } = props.data || {};

  return <Documents path={path} />;
}
