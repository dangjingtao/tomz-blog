import Sidebar from "@/islands/sideNav.tsx";
import { PageProps } from "$fresh/server.ts";

const SettingLayout = ({ Component, state }: PageProps) => (
  <div class="flex h-full bg-gray-100 text-sm">
    <Sidebar />
    <main class="container mx-auto p-6">
      <Component />
    </main>
  </div>
);

export default SettingLayout;
