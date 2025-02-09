export default function Language({ lang }: { lang: "CN" | "EN" }) {
  return (
    <button
      class="hover:(text-gray-900 dark:text-gray-100) font-bold focus:outline-none"
      onClick={() => {
        lang === "EN"
          ? (document.cookie = "lang=CN")
          : (document.cookie = "lang=EN");
        location.reload();
      }}
    >
      {lang === "EN" ? "CN" : "英文"}
    </button>
  );
}
