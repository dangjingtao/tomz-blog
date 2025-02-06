import PanelSetting from "@/islands/PanelSetting/index.tsx";

export default ({ user }) => {
  const settings = [
    {
      title: "基本信息",
      items: [
        {
          label: "用户名",
          name: "login",
          value: user.login,
          editable: false,
          type: "input",
        },
        {
          label: "邮箱",
          name: "email",
          value: user.email,
          editable: false,
          type: "input",
        },
      ],
    },
    {
      title: "安全设置",
      items: [
        {
          label: "密码",
          name: "password",
          value: "********",
          editable: false,
          type: "password",
        },
      ],
    },
    {
      title: "其他设置",
      items: [
        {
          label: "语言",
          value: "zh",
          name: "language",
          editable: true,
          type: "select",
          options: [
            { value: "zh", label: "中文" },
            { value: "en", label: "English" },
          ],
        },
      ],
    },
  ];
  return (
    <div class="space-y-6">
      {settings.map((setting, index) => (
        <PanelSetting key={index} title={setting.title} items={setting.items} />
      ))}
    </div>
  );
};
