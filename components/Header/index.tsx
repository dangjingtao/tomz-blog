/** @jsxImportSource preact */
import MagnifyIcon from "@mdi-preact/MagnifyIcon.js";
import HeaderNav from "../../islands/HeaderNav.tsx";

const Header = () => {
  return (
    <header
      className="sticky top-0  left-0 w-full flex justify-between items-center py-2.5 px-5 text-white z-50"
      style={{
        backgroundImage: "url(./images/header.png)",
        backgroundPosition: "top center",
      }}
    >
      <div className="flex items-center gap-6 h-8">
        <h1 className="m-0 text-2xl font-mono">
          TOMZ.IO
        </h1>
        <div className="hidden sm:flex items-center gap-6 h-8 relative">
          <input
            type="text"
            className="rounded-lg h-8 pl-10 pr-6 border border-gray-300 bg-white bg-opacity-75 focus:bg-opacity-100 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-300 ease-in-out"
            placeholder="Search..."
          />
          <MagnifyIcon
            size={24}
            className="absolute left-2 top-1/2 transform -translate-y-1/2 text-gray-400"
          />
        </div>
      </div>
      <HeaderNav />
    </header>
  );
};

export default Header;
