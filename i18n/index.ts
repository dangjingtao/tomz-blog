// deno-lint-ignore-file
import EN from "@/i18n/en.json" with { type: "json" };
import CN from "@/i18n/cn.json" with { type: "json" };

export type LanguageMap = {
  EN: any;
  CN: any;
};
export default { EN, CN } as LanguageMap;
