import { JSX } from "preact";
import TranslateIcon from "@mdi-preact/TranslateIcon.js";
import GithubIcon from "@mdi-preact/GithubIcon.js";
import CogOutlineIcon from "@mdi-preact/CogOutlineIcon.js";
import LoginIcon from "@mdi-preact/LoginIcon.js";
import LogoutIcon from "@mdi-preact/LogoutIcon.js";
import AccountCircleOutlineIcon from "@mdi-preact/AccountCircleOutlineIcon.js";

const iconMap: { [key: string]: JSX.ElementType } = {
  TranslateIcon,
  GithubIcon,
  CogOutlineIcon,
  LogoutIcon,
  AccountCircleOutlineIcon,
  LoginIcon,
};

const loadIcon = (
  iconName: keyof typeof iconMap,
  // deno-lint-ignore no-explicit-any
  props?: any,
): JSX.Element | null => {
  const IconComponent = iconMap[iconName];
  if (IconComponent) {
    return <IconComponent {...props} />;
  }
  return null;
};

export default loadIcon;
