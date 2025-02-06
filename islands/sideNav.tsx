import { useEffect, useState } from "preact/hooks";
import loadIcon from "@/lib/loadIcon.tsx";
import clientCache from "@/lib/clientCache.ts";

interface SidebarItem {
  link: string;
  icon: string;
  label: string;
}

interface SidebarProps {
  sidebarItems: SidebarItem[];
}

const Sidebar = ({ sidebarItems }: SidebarProps) => {
  const isMobile = globalThis.innerWidth <= 768;
  const [isExpanded, setIsExpanded] = useState(
    clientCache.get("sidebarExpanded") ?? !isMobile,
  );

  useEffect(() => {
    clientCache.set("sidebarExpanded", isExpanded);
  }, [isExpanded]);

  const toggleSidebar = () => {
    setIsExpanded(!isExpanded);
  };
  return (
    <aside
      class={`relative py-4 text-gray-600 h-full shadow-lg transition-all duration-100 bg-white ${
        isExpanded ? "w-[260px] px-4" : "w-[60px] px-2"
      }`}
    >
      <button
        onClick={toggleSidebar}
        class="absolute bottom-4 right-[-14px] mb-4 p-2 bg-white border rounded-full shadow-lg hover:bg-gray-200 transition-colors duration-100"
      >
        {isExpanded
          ? loadIcon("ArrowExpandLeft", { size: 14 })
          : loadIcon("ArrowExpandRight", { size: 14 })}
      </button>
      <ul class="flex flex-col gap-2 text-sm">
        {sidebarItems?.map((item, index) => (
          <li key={index}>
            <a
              href={item.link}
              class={`relative flex ${
                isExpanded ? "gap-1" : "justify-center"
              } items p-2 rounded-lg hover:bg-gray-100 aria-[current]:bg-blue-100 leading-[20px]`}
            >
              {loadIcon(item.icon, { size: 20 })}
              &nbsp;
              {isExpanded && (
                <span class="text-[14px] leading-6">{item.label}</span>
              )}
              {!isExpanded && (
                <span class="tooltip text-[14px] absolute min-w-36 -top-[1px] left-full ml-2 p-2.5 bg-primary-7 text-white text-xs rounded opacity-0 transition-opacity duration-300">
                  {item.label}
                </span>
              )}
            </a>
          </li>
        ))}
      </ul>
    </aside>
  );
};

export default Sidebar;
