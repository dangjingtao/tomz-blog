import useLocation from "@/hooks/useLocation.ts";
import loadIcon from "@/lib/loadIcon.tsx";

interface User {
  avatar_url: string;
  name?: string;
  login: string;
}

const userInfo = {
  tags: [
    "大长腿",
    "辣妹子",
    "全组都是吴彦祖",
    "中二少女团",
    "程序员日常",
    "高逼格设计天团",
    "骗你来学计算机",
  ],
  socialAccounts: [
    { platform: "GitHub", username: "example" },
    { platform: "Twitter", username: "example" },
  ],
};

export default ({ user }: { user: User }) => {
  const location = useLocation();
  return (
    <>
      <div className="flex justify-center items-center mb-4">
        <img
          src={user.avatar_url}
          alt="avatar"
          className="w-24 h-24 rounded-full object-cover border-4 border-gray-200"
        />
      </div>
      <h3 className="text-2xl text-center font-bold mb-2">
        {user.name || user.login}
      </h3>
      <p className="text-center text-gray-600 mb-4">
        伸入代码世界的双手，感受每一行代码的意义
      </p>

      <div className="mb-6">
        <p className="mb-2 flex items-center text-gray-700">
          <span className="mr-2">{loadIcon("BriefcaseOutline")}</span>
          Full Stack Developer
        </p>
        <p className="mb-2 flex items-center text-gray-700">
          <span className="mr-2">{loadIcon("iSitemapOutline")}</span>
          家里蹲大学
        </p>
        <p className="mb-2 flex items-center text-gray-700">
          <span className="mr-2">{loadIcon("MapMarkerMultipleOutline")}</span>
          {location}
        </p>
      </div>

      <div className="mb-6">
        <h4 className="text-lg font-semibold mb-2">社交账号</h4>
        <ul className="list-none p-0">
          {userInfo.socialAccounts.map((account, index) => (
            <li key={index} className="flex items-center mb-2">
              <span className="font-medium mr-2">{account.platform}:</span>
              <span className="text-gray-700">{account.username}</span>
            </li>
          ))}
        </ul>
      </div>

      <ul className="list-none p-0 flex flex-wrap">
        {userInfo.tags.map((tag, index) => (
          <li
            key={index}
            className="bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2"
          >
            {tag}
          </li>
        ))}
      </ul>
    </>
  );
};
