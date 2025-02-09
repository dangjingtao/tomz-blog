import { defineConfig } from "$fresh/server.ts";
import tailwind from "$fresh/plugins/tailwind.ts";
import sass_loader from "./plugins/sass_loader.ts";

export default defineConfig({
  plugins: [tailwind(), sass_loader()],
  port: 8460,
});
