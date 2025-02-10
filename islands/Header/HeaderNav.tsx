import { useSignal } from "@preact/signals";
import { useCallback } from "preact/hooks";
import { getNavData, NavItem } from "../../utils/headerMenu.ts";
import loadIcon from "@/lib/loadIcon.tsx";
import HeaderPanel from "@/islands/Header/HeaderPanel.tsx";

import { List, ListItem, ListItemButton } from "@mui/material";

interface ExtendedNavItem extends NavItem {
  index?: number;
}

const DropDownMenu = ({ list = [] }) => {
  return (
    <div class="text-gray-700">
      <List>
        {list.map(({ name, href, icon, onClick }, i) => (
          <ListItem disablePadding key={i}>
            {
              <ListItemButton
                component="a"
                href={href}
                onClick={!href ? onClick : undefined}
              >
                <div class="flex gap-2 text-sm">
                  {loadIcon(icon ?? "", { size: 20 })} {name}
                </div>
              </ListItemButton>
            }
          </ListItem>
        ))}
      </List>
    </div>
  );
};

const PCNavItem = (
  {
    itemData: {
      href,
      children,
      name,
      icon,
      onClick,
      index,
      extra,
      panel,
    },
    isScrolled,
  }: {
    itemData: ExtendedNavItem;
    isScrolled: boolean;
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

  const activeStyle = href
    ? (isScrolled
      ? "aria-[current]:bg-primary-2"
      : "aria-[current]:bg-primary-6")
    : "";

  const hoverStyle = dropDownOpen.value
    ? (isScrolled ? "bg-primary-1" : "bg-white/10")
    : "";

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
      className="relative group h-full z-50"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div className="block w-full h-full ">
        <a
          onClick={onClick}
          href={href}
          target={href?.startsWith("http") ? "_blank" : "_self"}
          className={`block z-50 cursor-pointer h-full ${`${activeStyle} px-4 ${hoverStyle}`} no-underline flex items-center`}
        >
          <div class="flex gap-2 text-sm">
            {loadIcon(icon ?? "", { size: 20 })} {name}
          </div>
        </a>
      </div>

      {hasChildren && (
        <>
          <ul
            className={`${
              dropDownOpen.value ? "block" : "hidden"
            } absolute top-full ${
              index === 5 ? "right-0" : "left-0"
            } bg-white rounded shadow-lg min-w-48`}
          >
            <div
              className="absolute w-0 h-0 z-50 border-l-8 border-l-transparent border-r-8 border-r-transparent border-b-8 border-b-white"
              style={{ top: "-8px", ...arrowStyle }}
            />
            {extra && Extra && <Extra />}
            <DropDownMenu list={children} />
          </ul>
        </>
      )}

      {panel && (
        <div
          style={{
            boxShadow:
              "inset 0 4px 6px -4px rgba(0, 0, 0, 0.2), 0 4px 6px -1px rgba(0, 0, 0, 0.1)",
          }}
          className="bg-opacity-90 backdrop-filter backdrop-blur-lg fixed z-10 left-0 right-0 overflow-hidden bg-white h-0 top-[52px] group-hover:h-40 transition-all duration-100"
        >
          <HeaderPanel />
        </div>
      )}
    </li>
  );
};

const HeaderNav = ({ isScrolled }: { isScrolled: boolean }) => {
  const navData = getNavData();

  const menuOpen = useSignal(false);

  const toggleMenu = () => {
    menuOpen.value = !menuOpen.value;
  };

  return (
    <>
      <nav class="absolute z-50 right-5 hidden md:flex gap-4 ml-4 transition-all duration-300 ease-in-out h-full">
        <ul class="list-none p-0 m-0 flex flex-col md:flex-row h-full">
          {navData.map((props, i) => (
            <PCNavItem
              key={i}
              isScrolled={isScrolled}
              itemData={{ ...props, index: i }}
            />
          ))}
        </ul>
      </nav>
      <button
        class="bg-transparent border-none text-lg md:hidden"
        onClick={toggleMenu}
        aria-label="Toggle menu"
      >
        {menuOpen.value
          ? loadIcon("WindowClose", { size: 30 })
          : loadIcon("Menu", { size: 30 })}
      </button>
      <div
        class={`absolute top-full bg-slate-50 left-0 w-full z-10 p-4 transition-opacity duration-200 ease-in-out md:hidden shadow-lg ${
          menuOpen.value ? "opacity-100" : "opacity-0"
        }`}
      >
        <ul class="list-none p-0 m-0 flex flex-col gap-4">
          {
            /* {navData.map(({ name, href }) => (
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
          ))} */
          }
        </ul>
      </div>
    </>
  );
};

export default HeaderNav;
