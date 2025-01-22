import { useState } from "preact/hooks";
import ArchiveCogOutline from "@mdi-preact/ArchiveCogOutlineIcon.js";
import AccountBoxEditOutline from "@mdi-preact/AccountBoxEditOutlineIcon.js";
import PencilOutline from "@mdi-preact/PencilOutlineIcon.js";

const sidebarItems = [
  {
    icon: <AccountBoxEditOutline />,
    alt: "userInfo",
    label: "User",
    link: "/setting/user",
  },
  {
    icon: <ArchiveCogOutline />,
    alt: "Another",
    label: "Model Provider",
    link: "#",
  },
  { icon: <PencilOutline />, label: "New blog", link: "#" },
  // 可以添加更多项目
];

const Sidebar = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <aside class="w-[260px] text-gray-600 p-4 h-screen shadow-lg">
      {/* 调整字体颜色为浅灰色 */}
      <ul class="flex flex-col gap-2 text-sm">
        {/* 使用text-sm类来设置字体大小为14px */}
        {sidebarItems.map((item, index) => (
          <li key={index}>
            <a
              href={item.link}
              class={`flex gap-1 items p-2 rounded-lg leading-6 ${
                activeIndex === index
                  ? "bg-geekblue-2 text-gray-800 font-bold" // 使用geekblue-3作为高亮背景颜色
                  : "hover:bg-gray-200"
              }`}
              onClick={() => setActiveIndex(index)}
            >
              {item.icon}
              <span class="text-sm leading-6">{item.label}</span>
              {/* 使用text-sm类来设置字体大小为14px */}
            </a>
          </li>
        ))}
      </ul>
    </aside>
  );
};

export default Sidebar;
