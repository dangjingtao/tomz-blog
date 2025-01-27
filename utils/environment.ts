import { config as loadConfig } from "$dotenv";
import Cookie from "@/lib/cookie.ts";

export function isBrowser(): boolean {
  return typeof window !== "undefined";
}

export function getEnvVariable(key: string): string {
  if (isBrowser()) {
    return Cookie.get(key) || "";
  } else {
    const ENV = loadConfig();
    console.log("====================================");
    console.log(Deno.env);
    console.log("====================================");
    console.log("ENVVVVVVVVVVVVVVV", ENV);
    return ENV[key] || "" || Deno.env.get(key);
  }
}
