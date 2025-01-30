import UserInfoCard from "@/islands/UserInfoCard.tsx";
import UserSettings from "@/components/UserSettings/index.tsx";
export default ({ state }) => {
  const user = state.user || {};

  return (
    <>
      <div className="flex flex-1 flex-col md:flex-row gap-2">
        <aside className="bg-white shadow-sm rounded-lg p-8 w-full md:w-96">
          <UserInfoCard user={user} />
        </aside>
        <main className="flex-1 p-6 bg-white shadow-sm rounded-lg">
          <UserSettings user={user} />
        </main>
      </div>
    </>
  );
};
