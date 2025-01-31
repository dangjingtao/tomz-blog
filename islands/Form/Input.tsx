const renderInput = (item) => {
  const { label, name, placeholder, value, onChange } = item;
  return (
    <div class="mb-2">
      <input
        type={"text"}
        class="appearance-none border rounded w-full py-1 px-2 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
        value={value}
        onInput={(e) => onChange((e.target as HTMLInputElement).value, e)}
        placeholder={placeholder}
        aria-label={label}
      />
    </div>
  );
};

export default renderInput;
