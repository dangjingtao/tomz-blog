import { useSignal } from "@preact/signals";
import MenuIcon from "@mdi-preact/MenuIcon.js";
import WindowCloseIcon from "@mdi-preact/WindowCloseIcon.js";
import { useCallback } from "preact/hooks";
import { getNavData, NavItem } from "../utils/headerMenu.ts";
import loadIcon from "@/lib/loadIcon.tsx";

interface ExtendedNavItem extends NavItem {
  level?: number;
  index?: number;
}

const PCNavItem = (
  {
    itemData: { href, children, name, icon, level = 1, onClick, index, extra },
  }: {
    itemData: ExtendedNavItem;
  },
) => {
  const hasChildren = children && children.length > 0;
  const dropDownOpen = useSignal(false);

  const toggleMenu = useCallback((status: boolean) => {
    dropDownOpen.value = status;
  }, []);

  const handleMouseEnter = () => {
    toggleMenu(true);
  };

  const Extra = extra;

  const handleMouseLeave = (e: MouseEvent) => {
    const relatedTarget = e.relatedTarget as HTMLElement;
    if (relatedTarget && relatedTarget.closest("li") === e.currentTarget) {
      return;
    }
    toggleMenu(false);
  };

  const arrowStyle = {
    left: index != 5 ? "20px" : undefined,
    right: index === 5 ? "20px" : undefined,
  };
  return (
    <li
      className="relative group h-full"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div className="block w-full h-full">
        <a
          onClick={onClick}
          href={href}
          target={href?.startsWith("http") ? "_blank" : "_self"}
          className={`block cursor-pointer h-full  ${
            level === 1
              ? `text-white aria-[current]:bg-white/30 px-4 ${
                dropDownOpen.value ? "bg-white/10" : ""
              }`
              : `hover:bg-gray-300/30 p-4 pt-2 pb-2 text-gray-700`
          } no-underline flex items-center`}
        >
          <div class="flex gap-2 text-sm">
            {loadIcon(icon ?? "", { size: 20 })} {name}
          </div>
        </a>
      </div>
      {hasChildren && (
        <>
          <ul
            className={`${dropDownOpen.value ? "block" : "hidden"} absolute ${
              level === 1
                ? `top-full ${index === 5 ? "right-0" : "left-0"}`
                : "left-full top-0"
            } bg-white rounded shadow-lg min-w-48`}
          >
            <div
              className="absolute w-0 h-0 z-50 border-l-8 border-l-transparent border-r-8 border-r-transparent border-b-8 border-b-white"
              style={{ top: "-8px", ...arrowStyle }}
            />
            {extra && Extra && <Extra />}
            {children.map((child, i) => (
              <PCNavItem
                key={i}
                itemData={{ ...child, level: level + 1 }}
              />
            ))}
          </ul>
        </>
      )}
    </li>
  );
};

const HeaderNav = () => {
  const navData = getNavData();

  const menuOpen = useSignal(false);

  const toggleMenu = () => {
    menuOpen.value = !menuOpen.value;
  };

  return (
    <>
      <nav class="absolute right-5 hidden md:flex gap-4 ml-4 transition-all duration-300 ease-in-out h-full">
        <ul class="list-none p-0 m-0 flex flex-col md:flex-row h-full">
          {navData.map((props, i) => (
            <PCNavItem
              key={i}
              itemData={{ ...props, index: i }}
            />
          ))}
        </ul>
      </nav>
      <button
        class="bg-transparent border-none text-white text-lg md:hidden"
        onClick={toggleMenu}
        aria-label="Toggle menu"
      >
        {menuOpen.value
          ? <WindowCloseIcon size={30} />
          : <MenuIcon size={30} />}
      </button>
      <div
        class={`absolute top-full bg-slate-50 left-0 w-full z-10 bg-geekblue-100 p-4 transition-opacity duration-200 ease-in-out md:hidden shadow-lg ${
          menuOpen.value ? "opacity-100" : "opacity-0"
        }`}
      >
        <ul class="list-none p-0 m-0 flex flex-col gap-4">
          {navData.map(({ name, href }) => (
            <li key={name}>
              <a
                href={href}
                target={href?.startsWith("http") ? "_blank" : "_self"}
                class="text-gray-600 no-underline hover:underline flex items-center"
                aria-label={typeof name === "string" ? name : "Navigation item"}
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
