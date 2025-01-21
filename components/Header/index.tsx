/** @jsxImportSource preact */
import HeaderNav from "@/islands/HeaderNav.tsx";
import HeaderSearch from "@/islands/HeaderSearch.tsx";

const Header = () => {
  return (
    <header
      className="sticky top-0  left-0 w-full flex justify-between items-center py-2.5 px-5 text-white z-50"
      style={{
        backgroundImage: "url(/images/header.png)",
        backgroundPosition: "top center",
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
