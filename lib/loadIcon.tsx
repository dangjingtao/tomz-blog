import { JSX } from "preact";
import TranslateIcon from "@mdi-preact/TranslateIcon.js";
import GithubIcon from "@mdi-preact/GithubIcon.js";
import CogOutlineIcon from "@mdi-preact/CogOutlineIcon.js";
import LoginIcon from "@mdi-preact/LoginIcon.js";
import LogoutIcon from "@mdi-preact/LogoutIcon.js";
import AccountCircleOutlineIcon from "@mdi-preact/AccountCircleOutlineIcon.js";
import ConsoleIcon from "@mdi-preact/ConsoleIcon.js";
import ArchiveCogOutline from "@mdi-preact/ArchiveCogOutlineIcon.js";
import AccountBoxEditOutline from "@mdi-preact/AccountBoxEditOutlineIcon.js";
import PencilOutline from "@mdi-preact/PencilOutlineIcon.js";
import MapMarkerMultipleOutline from "@mdi-preact/MapMarkerMultipleOutlineIcon.js";
import iSitemapOutline from "@mdi-preact/SitemapOutlineIcon.js";
import BriefcaseOutline from "@mdi-preact/BriefcaseOutlineIcon.js";
import ArrowExpandLeft from "@mdi-preact/ArrowExpandLeftIcon.js";
import ArrowExpandRight from "@mdi-preact/ArrowExpandRightIcon.js";
import Menu from "@mdi-preact/MenuIcon.js";
import WindowClose from "@mdi-preact/WindowCloseIcon.js";
import ChevronLeft from "@mdi-preact/ChevronLeftIcon.js";
import ChevronRight from "@mdi-preact/ChevronRightIcon.js";
import ChevronDown from "@mdi-preact/ChevronDownIcon.js";
import ChevronUp from "@mdi-preact/ChevronUpIcon.js";
import Close from "@mdi-preact/CloseIcon.js";
import MenuDown from "@mdi-preact/MenuDownIcon.js";
import MenuUp from "@mdi-preact/MenuUpIcon.js";
import MenuLeft from "@mdi-preact/MenuLeftIcon.js";
import MenuRight from "@mdi-preact/MenuRightIcon.js";
import MagnifyIcon from "@mdi-preact/MagnifyIcon.js";

const iconMap: { [key: string]: JSX.ElementType } = {
  TranslateIcon,
  GithubIcon,
  CogOutlineIcon,
  LogoutIcon,
  AccountCircleOutlineIcon,
  LoginIcon,
  ConsoleIcon,
  ArchiveCogOutline,
  AccountBoxEditOutline,
  PencilOutline,
  MapMarkerMultipleOutline,
  iSitemapOutline,
  BriefcaseOutline,
  ArrowExpandLeft,
  ArrowExpandRight,
  Menu,
  WindowClose,
  ChevronLeft,
  ChevronRight,
  ChevronDown,
  ChevronUp,
  Close,
  MenuDown,
  MenuUp,
  MenuLeft,
  MenuRight,
  MagnifyIcon,
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
