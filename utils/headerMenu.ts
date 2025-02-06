import { JSX } from "preact/jsx-runtime";
import { FunctionalComponent } from "preact";
import config from "@/config/index.ts";
import clientCache from "@/lib/clientCache.ts";
import AccountPanel from "../islands/Header/AccountPanel.tsx";
import T from "@/lib/Translate.ts";
import Cookie from "@/lib/cookie.ts";
const { GITHUB_CLIENT_ID } = config.github;

export interface NavItem {
  name?: string | JSX.Element;
  href?: string;
  children?: NavItem[];
  onClick?: () => void;
  icon?: string;
  extra?: FunctionalComponent;
}

const handleGithubLogin = () => {
  const REDIRECT_URI = `${globalThis.location.origin}/auth`;
  const githubAuthUrl =
    `https://github.com/login/oauth/authorize?client_id=${GITHUB_CLIENT_ID}&redirect_uri=${REDIRECT_URI}&scope=read:user`;
  globalThis.location.href = githubAuthUrl;
};

const handleSignOut = () => {
  clientCache.set("userInfo", "");
  // 清理token
  document.cookie = "token=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
  globalThis.location.href = "/";
};

const handleToggleLang = () => {
  const lang = clientCache.get("lang");
  const newLang = lang === "en" ? "cn" : "en";
  clientCache.set("lang", newLang);
  Cookie.set("lang", newLang);
  location.reload();
};

export const getNavData = (): NavItem[] => {
  const userInfo = clientCache.get("userInfo");

  const authedDropDown = [{
    name: T("Settings"),
    icon: "CogOutlineIcon",
    href: "/settings/user-settings",
  }, {
    name: T("Console"),
    icon: "ConsoleIcon",
    href: "/console/user",
  }, {
    name: T("Sign out"),
    icon: "LogoutIcon",
    onClick: handleSignOut,
  }];

  const unAuthedDropDown = [{
    name: T("Sign with Github"),
    icon: "GithubIcon",
    onClick: handleGithubLogin,
  }];
  const loginDropDown = userInfo ? authedDropDown : unAuthedDropDown;

  const navData: NavItem[] = [
    {
      name: T("Docs"),
      href: "/docs",
    },
    { name: T("Blog"), href: "/blog" },
    { name: T("About"), href: "/about" },
    {
      icon: "TranslateIcon",
      onClick: handleToggleLang,
    },
    { icon: "GithubIcon", href: "https://github.com/dangjingtao/tomz-blog" },
    {
      name: userInfo ?? T("Sign in"),
      icon: userInfo ? "AccountCircleOutlineIcon" : "LoginIcon",
      extra: userInfo && AccountPanel,
      children: [...loginDropDown],
    },
  ];
  return navData;
};
