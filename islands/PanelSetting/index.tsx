import { useState } from "preact/hooks";
import FormItem from "@/islands/Form/FormItem.tsx";

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

  return (
    <div class="rounded-lg bg-gray-50 ">
      <h3 class="text-[16px] font-medium bg-gray-100 px-4 py-2 rounded-t-lg">
        {title}
      </h3>
      <div class="p-4 space-y-3">
        {items.map((item, index) => (
          <FormItem
            key={item.name}
            {...item}
            value={formData[item.name]}
            handleChange={handleChange}
          />
        ))}
        {isDirty && (
          <div class="mt-2 flex justify-end">
            <button
              onClick={handleReset}
              class=" text-red-500 p-2  rounded  transition-colors duration-300 hover:bg-gray-200"
            >
              放弃
            </button>
            <button
              onClick={handleSubmit}
              class=" text-blue-500 p-2  rounded  transition-colors duration-300 hover:bg-gray-200"
            >
              保存
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default PanelSetting;
