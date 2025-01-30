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
    return ENV[key] || Deno.env.get(key) || "";
  }
}
