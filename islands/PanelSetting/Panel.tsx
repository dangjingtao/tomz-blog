export default ({ title, slot, children }) => {
  return (
    <div class="rounded-lg bg-gray-50 ">
      <div class="flex justify-between  text-[16px] font-medium bg-gray-100 px-4 py-2 rounded-t-lg">
        <h3>{title}</h3>
        {slot && slot}
      </div>
      <div class="p-4 space-y-3">
        {children}
      </div>
    </div>
  );
};
