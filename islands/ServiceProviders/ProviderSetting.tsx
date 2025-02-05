import PanelSetting from "@/islands/PanelSetting/index.tsx";

export default ({ settings }) => {
  return (
    <div>
      <div className="flex flex-col gap-3">
        {settings.map((setting, index) => (
          <PanelSetting
            key={index}
            title={setting.title}
            items={setting.items}
          />
        ))}
      </div>
    </div>
  );
};
