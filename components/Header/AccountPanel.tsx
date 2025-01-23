import { FunctionalComponent, h } from "preact";
import clientCache from "@/lib/clientCache.ts";

interface UserInfo {
  avatar_url: string;
  login: string;
}

interface AccountPanelProps {
  userInfo: UserInfo;
}

const AccountPanel: FunctionalComponent<AccountPanelProps> = () => {
  const userInfo = clientCache.get("userInfo") as UserInfo;
  return (
    <div class="p-4 bg-white border-b-slate-200 border">
      <div class="flex items-center">
        <img
          src={userInfo.avatar_url}
          alt="User Avatar"
          class="w-6 h-6 rounded-full"
        />
        <div class="ml-4">
          <div class="text-sm text-gray-600">{userInfo.login}</div>
        </div>
      </div>
    </div>
  );
};

export default AccountPanel;
