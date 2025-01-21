/** @jsxImportSource preact */
import { useSignal } from "@preact/signals";
import MenuIcon from "@mdi-preact/MenuIcon.js";
import WindowCloseIcon from "@mdi-preact/WindowCloseIcon.js";
import TranslateIcon from "@mdi-preact/TranslateIcon.js";
import GithubIcon from "@mdi-preact/GithubIcon.js";
import { JSX } from "preact/jsx-runtime";
import { useCallback } from "preact/hooks";
import clientCache from "@/lib/clientCache.ts";
import config from "@/config/index.ts";

const { GITHUB_CLIENT_ID } = config.github;

interface NavItemData {
  name: string | JSX.Element;
  href?: string;
  children?: NavItemData[];
  level?: number;
  onClick?: () => void;
  index?: number;
}

const PCNavItem = (
  { itemData: { href, children, name, level = 1, onClick, index } }: {
    itemData: NavItemData;
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
          onClick={onClick}
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
        <>
          <div
            className="absolute w-0 h-0 z-50 border-l-8 border-l-transparent border-r-8 border-r-transparent border-b-8 border-b-white"
            style={{ top: "-8px", left: "20px" }}
          />
          <ul
            className={`${dropDownOpen.value ? "block" : "hidden"} absolute ${
              level === 1
                ? `top-full ${index === 5 ? "right-0" : "left-0"}`
                : "left-full top-0"
            } bg-white rounded shadow-lg min-w-48`}
          >
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
  const handleGithubLogin = () => {
    const REDIRECT_URI = `${globalThis.location.origin}/auth`;
    const githubAuthUrl =
      `https://github.com/login/oauth/authorize?client_id=${GITHUB_CLIENT_ID}&redirect_uri=${REDIRECT_URI}&scope=read:user`;
    globalThis.location.href = githubAuthUrl;
  };

  const handleSignOut = () => {
    clientCache.set("userInfo", "");
    globalThis.location.href = "/";
  };

  const userInfo = clientCache.get("userInfo");
  const loginDropDown = userInfo
    ? {
      name: "Sign out",
      onClick: handleSignOut,
    }
    : {
      name: "Github",
      onClick: handleGithubLogin,
    };
  console.log(userInfo);

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
    {
      name: !userInfo ? "Sign in" : (
        <div class="flex gap-1">
          {/* <div>{userInfo.login}</div> */}
          <img class="w-6 rounded-full" src={userInfo.avatar_url} />
        </div>
      ),
      children: [
        loginDropDown,
      ],
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
          {navData.map(({ name, href, children, onClick }, i) => (
            <PCNavItem
              key={i}
              itemData={{ name, href, children, onClick, index: i }}
            />
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
