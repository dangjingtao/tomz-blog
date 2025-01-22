import clientCache from "@/lib/clientCache.ts";
import languageMap, { LanguageMap } from "@/i18n/index.ts";

export default (key: keyof LanguageMap[keyof LanguageMap]) => {
  const lang = clientCache.get("lang") as keyof LanguageMap || "en";
  return languageMap[lang][key] || key;
};
