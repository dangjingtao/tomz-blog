export default () => {
  return (
    <section className="py-3 sm:px-20 bg-white shadow-sm">
      <ul className="flex flex-grow max-w-7xl mx-auto flex-wrap justify-around items-center list-none">
        <li className="w-1/2 sm:w-1/4 text-center flex items-center justify-center min-h-12">
          <img
            src="/images/deno-logo-text.svg"
            alt="Deno"
            className="mx-auto w-20 sm:w-32"
          />
        </li>
        <li className="w-1/2 sm:w-1/4 text-center flex items-center justify-center min-h-12">
          <img
            src="/images/fresh-logo.svg"
            alt="Fresh"
            className="w-6 sm:w-10"
          />
          <img
            src="/images/fresh-text.svg"
            alt="Fresh"
            className="w-14 sm:w-20"
          />
        </li>
        <li className="w-1/2 sm:w-1/4 text-center flex items-center justify-center min-h-12">
          <img
            src="/images/preact-logo-text.svg"
            alt="Preact"
            className="mx-auto w-24 sm:w-32"
          />
        </li>
        <li className="w-1/2 sm:w-1/4 text-center flex items-center justify-center min-h-12">
          <img
            src="/images/tailwindcss-logo-text.svg"
            alt="Tailwind CSS"
            className="mx-auto w-32 sm:w-48"
          />
        </li>
      </ul>
    </section>
  );
};
