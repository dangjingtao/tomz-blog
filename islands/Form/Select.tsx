const renderSelect = ({ label, options, value, onChange }) => {
  return (
    <div class="relative">
      <select
        class="appearance-none border border-gray-300 rounded py-1.5 pr-6 px-2 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent hover:border-gray-400 w-full"
        value={value}
        onInput={(e) => onChange(e.target.value, e)}
        aria-label={label}
      >
        {options?.map((option, idx) => (
          <option key={idx} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
      <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
        <svg
          class="fill-current h-4 w-4"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
        >
          <path d="M7 10l5 5 5-5H7z" />
        </svg>
      </div>
    </div>
  );
};

export default renderSelect;
