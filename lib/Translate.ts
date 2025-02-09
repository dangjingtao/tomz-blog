import languageMap, { LanguageMap } from "@/i18n/index.ts";
import Cookie from "@/lib/cookie.ts";

type SupportedLanguages = keyof typeof languageMap;

export default (key: keyof LanguageMap[keyof LanguageMap]) => {
  const lang = (Cookie.get("lang") as SupportedLanguages) || "EN";
  return languageMap[lang][key] || key;
};
