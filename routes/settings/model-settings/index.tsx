import SearchNav from "@/islands/ServiceProviders/SearchNav.tsx";
export default ({ state }) => {
  // const user = state.user || {};

  return (
    <div className="flex flex-1 flex-col md:flex-row gap-2">
      <aside className="bg-white shadow-sm rounded-lg p-8 w-full md:w-96">
        <SearchNav state={state} />
      </aside>
      <main className="flex-1 p-6 bg-white shadow-sm rounded-lg">
      </main>
    </div>
  );
};
