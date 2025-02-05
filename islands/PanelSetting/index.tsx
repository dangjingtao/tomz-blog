import { useState } from "preact/hooks";
import FormItem from "@/islands/Form/FormItem.tsx";
import Panel from "@/islands/PanelSetting/Panel.tsx";

interface PanelSettingProps {
  title: string;
  items: { name: string; value: string }[];
}

const PanelSetting = ({ title, items }: PanelSettingProps) => {
  const initialFormData = items.reduce(
    (acc: { [key: string]: string }, item) => {
      acc[item.name] = item.value || "";
      return acc;
    },
    {},
  );

  const [formData, setFormData] = useState(initialFormData);
  const [isDirty, setIsDirty] = useState(false);

  const handleChange = (name: string, value: string) => {
    setFormData({
      ...formData,
      [name]: value,
    });
    setIsDirty(true);
  };

  const handleSubmit = () => {
    console.log("Form Data:", formData);
    // 在这里处理表单提交逻辑
    setIsDirty(false);
  };

  const handleReset = () => {
    setFormData(initialFormData);
    setIsDirty(false);
  };

  const slot = isDirty
    ? (
      <div class="flex justify-end gap-2">
        <button
          onClick={handleReset}
          class=" text-red-500 text-[14px]   rounded  transition-colors duration-300 hover:bg-gray-200"
        >
          放弃
        </button>
        <button
          onClick={handleSubmit}
          class=" text-blue-500 text-[14px]  rounded  transition-colors duration-300 hover:bg-gray-200"
        >
          保存
        </button>
      </div>
    )
    : null;

  return (
    <Panel title={title} slot={slot}>
      {items.length === 0 && (
        <p class="text-center text-gray-500">
          暂无设置项
        </p>
      )}
      {items.map((item, index) => {
        if (item.content) {
          return item.content;
        }
        return (
          <FormItem
            key={item.name}
            {...item}
            value={formData[item.name]}
            handleChange={handleChange}
          />
        );
      })}
    </Panel>
  );
};

export default PanelSetting;
