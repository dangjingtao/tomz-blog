import T from "@/lib/Translate.ts";
import CFG from "@/config/index.ts";

const HomeBanner = () => {
  return (
    <div className="relative flex justify-center items-center h-64 md:h-96 w-full">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: "url(/images/home/landing-banner.webp)",
        }}
      >
      </div>
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <div className="relative z-10 text-center text-white p-4 flex flex-col items-center">
        <img src="/svgs/logo.svg" className="mb-4 w-16 h-16 md:w-24 md:h-24" />
        <h1 className="text-2xl md:text-4xl font-bold">
          {T(`Tomz's Notion Blog`)}
        </h1>
        <p className="text-lg md:text-2xl mt-2">
          {T(`Blazing Fresh Notion Blog with Deno and Preact`)}
        </p>
      </div>
    </div>
  );
};

export default HomeBanner;
