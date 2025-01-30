import Header from "@/components/Header/index.tsx";
import Sidebar from "@/islands/sideNav.tsx";
import { PageProps } from "$fresh/server.ts";
import { LayoutConfig } from "$fresh/server.ts";
import T from "@/lib/Translate.ts";
import { Partial } from "$fresh/runtime.ts";

export const config: LayoutConfig = {
  skipInheritedLayouts: true, // Skip already inherited layouts
  // skipAppWrapper: true,
};

// export const config: RouteConfig = {
//   skipAppWrapper: true,
//   skipInheritedLayouts: true,
// };

const SettingLayout = ({ Component, state }: PageProps) => {
  const currentFolderName = new URL(".", import.meta.url).pathname.split("/")
    .filter((i) => !!i).pop();

  const sidebarItems = [
    {
      icon: "AccountBoxEditOutline",
      alt: "userInfo",
      label: T("User Information"),
      link: `/${currentFolderName}/user-settings`,
    },
    {
      icon: "ArchiveCogOutline",
      alt: "modelProvider",
      label: T("Model Provider"),
      link: `/${currentFolderName}/model-settings`,
    },
  ];
  return ((
    <div className="min-h-screen flex flex-col">
      <Header />
      <div class="flex h-[calc(100vh-56px)] bg-gray-100 text-sm">
        <Sidebar sidebarItems={sidebarItems} />
        <Partial name="docs-content">
          <main class="w-full p-2 overflow-auto  min-h-full flex flex-col bg-gray-100">
            <Component />
          </main>
        </Partial>
      </div>
    </div>
  ));
};

export default SettingLayout;
