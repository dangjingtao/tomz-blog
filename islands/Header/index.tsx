/** @jsxImportSource preact */
import useScroll from "@/hooks/useScroll.ts";
import HeaderSearch from "./HeaderSearch.tsx";
import HeaderNav from "./HeaderNav.tsx";

const Header = () => {
  const isScrolled = useScroll();

  return (
    <header
      className={`sticky top-0 left-0 w-full flex justify-between items-center py-2.5 px-5 z-50 ${
        isScrolled
          ? "bg-white bg-opacity-60 text-black backdrop-filter backdrop-blur-lg shadow-md"
          : " text-white"
      }`}
      style={{
        backgroundImage: isScrolled ? "none" : "url(/images/header.png)",
        backgroundPosition: "center top",
        transition: "all 0.1s",
      }}
    >
      <div className="flex items-center gap-6 h-8">
        <h1 className="m-0 text-2xl font-mono">
          <a href="/">TOMZ.IO</a>
        </h1>
        <HeaderSearch />
      </div>
      <HeaderNav />
    </header>
  );
};

export default Header;
