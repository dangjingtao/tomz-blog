// deno-lint-ignore-file
import en from "@/i18n/en.json" with { type: "json" };
import cn from "@/i18n/cn.json" with { type: "json" };

export type LanguageMap = {
  en: any;
  cn: any;
};
export default { en, cn };
