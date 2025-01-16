/** @jsxImportSource preact */
import { useSignal } from "@preact/signals";
import MenuIcon from "@mdi-preact/MenuIcon.js";
import WindowCloseIcon from "@mdi-preact/WindowCloseIcon.js";
import GithubIcon from "@mdi-preact/GithubIcon.js";

const HeaderNav = () => {
  const navData = [
    { name: "Projects", href: "#projects" },
    { name: "Docs", href: "#docs" },
    { name: "Blogs", href: "#blogs" },
    { name: "About", href: "#about" },
    {
      name: <GithubIcon />,
      href: "https://github.com/dangjingtao/tomz-blog",
    },
  ];

  const menuOpen = useSignal(false);

  const toggleMenu = () => {
    menuOpen.value = !menuOpen.value;
  };

  return (
    <>
      <nav
        className={`hidden md:flex gap-4 ml-4 transition-all duration-300 ease-in-out h-6`}
      >
        <ul className="list-none p-0 m-0 flex flex-col md:flex-row gap-4">
          {navData.map(({ name, href }, i) => (
            <li key={i}>
              <a
                href={href}
                className="text-white no-underline hover:underline"
              >
                {name}
              </a>
            </li>
          ))}
        </ul>
      </nav>
      <button
        className="bg-transparent border-none text-white text-lg md:hidden"
        onClick={toggleMenu}
      >
        {menuOpen.value
          ? <WindowCloseIcon size={30} />
          : <MenuIcon size={30} />}
      </button>
      {menuOpen.value && (
        <div
          className={`absolute top-12 left-0 w-full z-10 bg-geekblue-1 p-4 transition-transform duration-800 ease-in-out transform md:hidden shadow-lg ${
            menuOpen.value
              ? "translate-y-0 opacity-100"
              : "-translate-y-full opacity-0"
          }`}
        >
          <ul className="list-none p-0 m-0 flex flex-col gap-4">
            {navData.map(({ name, href }) => (
              <li key={name}>
                <a
                  href={href}
                  target={href.startsWith("http") ? "_blank" : "_self"}
                  className="text-gray-800 no-underline hover:underline flex items-center "
                >
                  {name}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </>
  );
};

export default HeaderNav;
