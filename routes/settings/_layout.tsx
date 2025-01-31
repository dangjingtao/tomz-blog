import Sidebar from "@/islands/sideNav.tsx";
import { PageProps } from "$fresh/server.ts";
import T from "@/lib/Translate.ts";
import { Partial } from "$fresh/runtime.ts";

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
    <div class="flex h-[calc(100vh-52px)] bg-gray-100 text-sm" f-client-nav>
      <Sidebar sidebarItems={sidebarItems} />
      <Partial name="settings-content">
        <main class="w-full p-2 overflow-auto  min-h-full flex flex-col bg-gray-100">
          <Component />
        </main>
      </Partial>
    </div>
  ));
};

export default SettingLayout;
