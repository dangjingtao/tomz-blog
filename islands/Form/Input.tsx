interface InputProps {
  label?: string;
  name?: string;
  placeholder?: string;
  value?: string;
  onChange?: (
    value: string,
    event: React.ChangeEvent<HTMLInputElement>,
  ) => void;
}

const Input = (props: InputProps) => {
  const { label, name, placeholder, value, onChange } = props;
  return (
    <div class="mb-2">
      <input
        type={"text"}
        class="appearance-none border rounded w-full py-1.5 px-3 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-primary-light focus:border-transparent"
        value={value}
        onInput={(e) => onChange((e.target as HTMLInputElement).value, e)}
        placeholder={placeholder}
        aria-label={label}
      />
    </div>
  );
};

export default Input;
