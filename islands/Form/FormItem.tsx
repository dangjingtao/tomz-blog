import Input from "@/islands/Form/Input.tsx";
import Select from "@/islands/Form/Select.tsx";

const FormItemMap = {
  input: Input,
  select: Select,
};

interface FormItemProps {
  label: string;
  type: "input" | "select";
  name: string;
  editable: boolean;
  value: any;
  [key: string]: any;
}

const FormItem = (
  { label, type, name, editable, value, handleChange, ...props }: FormItemProps,
) => {
  const Comp = FormItemMap[type];
  return (
    <div class="flex items-center justify-between">
      <div class="text-gray-700">{label}</div>
      {editable
        ? (
          <Comp
            label={label}
            editable={editable}
            value={value}
            {...props}
            onChange={(value) => handleChange(name, value)}
          />
        )
        : <div class="text-gray-700">{value}</div>}
    </div>
  );
};

export default FormItem;
