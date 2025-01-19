/** @jsxImportSource preact */
import { useSignal } from "@preact/signals";
import MenuIcon from "@mdi-preact/MenuIcon.js";
import WindowCloseIcon from "@mdi-preact/WindowCloseIcon.js";
import TranslateIcon from "@mdi-preact/TranslateIcon.js";
import GithubIcon from "@mdi-preact/GithubIcon.js";
import { JSX } from "preact/jsx-runtime";
import { useCallback, useEffect } from "preact/hooks";

interface NavItemData {
  name: string | JSX.Element;
  href?: string;
  children?: NavItemData[];
  level?: number;
}

const PCNavItem = (
  { itemData: { href, children, name, level = 1 } }: { itemData: NavItemData },
) => {
  const hasChildren = children && children.length > 0;
  const dropDownOpen = useSignal(false);

  const toggleMenu = useCallback((status: boolean) => {
    dropDownOpen.value = status;
  }, []);

  const handleMouseEnter = () => {
    toggleMenu(true);
  };

  const handleMouseLeave = (e: MouseEvent) => {
    const relatedTarget = e.relatedTarget as HTMLElement;
    if (relatedTarget && relatedTarget.closest("li") === e.currentTarget) {
      return;
    }
    toggleMenu(false);
  };

  return (
    <li
      className="relative group h-full"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div className="block w-full h-full">
        <a
          href={href}
          target={href?.startsWith("http") ? "_blank" : "_self"}
          className={`block cursor-pointer h-full  ${
            level === 1
              ? `text-white px-4 ${dropDownOpen.value ? "bg-white/30" : ""}`
              : `hover:bg-gray-300/30 p-4 pt-2 pb-2 text-gray-700`
          } no-underline flex items-center`}
        >
          {name}
        </a>
      </div>
      {hasChildren && (
        <ul
          className={`${dropDownOpen.value ? "block" : "hidden"} absolute ${
            level === 1 ? "left-0 top-full" : "left-full top-0"
          } bg-white rounded shadow-lg min-w-48`}
        >
          <div
            className="absolute w-0 h-0 border-l-8 border-l-transparent border-r-8 border-r-transparent border-b-8 border-b-white"
            style={{ top: "-8px", left: "20px" }}
          />
          {children.map((child, i) => (
            <PCNavItem
              key={i}
              itemData={{ ...child, level: level + 1 }}
            />
          ))}
        </ul>
      )}
    </li>
  );
};

const HeaderNav = () => {
  const navData = [
    {
      name: "Docs",
      href: "#",
      children: [
        {
          name: "API",
          href: "#api",
        },
        {
          name: "Guides",
          href: "#guides",
        },
      ],
    },
    {
      name: "Blog",
      href: "/blog",
    },
    {
      name: "About",
      href: "#about",
    },
    {
      name: <TranslateIcon />,
    },
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
        className={`absolute right-5 hidden md:flex gap-4 ml-4 transition-all duration-300 ease-in-out h-full`}
      >
        <ul className="list-none p-0 m-0 flex flex-col md:flex-row h-full">
          {navData.map(({ name, href, children }, i) => (
            <PCNavItem key={i} itemData={{ name, href, children }} />
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
      <div
        className={`absolute top-full left-0 w-full z-10 bg-geekblue-1 p-4 transition-opacity duration-200 ease-in-out md:hidden shadow-lg ${
          menuOpen.value ? "opacity-100" : "opacity-0"
        }`}
      >
        <ul className="list-none p-0 m-0 flex flex-col gap-4">
          {navData.map(({ name, href }) => (
            <li key={name}>
              <a
                href={href}
                target={href?.startsWith("http") ? "_blank" : "_self"}
                className="text-gray-800 no-underline hover:underline flex items-center "
              >
                {name}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default HeaderNav;
