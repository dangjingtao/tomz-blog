import Sidebar from "@/islands/sideNav.tsx";

const App = () => (
  <div class="flex h-full bg-gray-100 text-sm">
    <Sidebar />
    <main class="container mx-auto p-6">
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div class="bg-white p-6 rounded-lg shadow-lg">
          <h3 class="text-xl font-semibold mb-3">App 1 Title</h3>
          <p class="text-gray-700 mb-4">
            This is a brief description of App 1.
          </p>
          <button class="bg-blue-600 hover:bg-blue-800 text-white font-bold py-2 px-4 rounded">
            添加到工作区
          </button>
        </div>
        {/* 添加更多卡片 */}
        <div class="bg-white p-6 rounded-lg shadow-lg">
          <h3 class="text-xl font-semibold mb-3">App 2 Title</h3>
          <p class="text-gray-700 mb-4">
            This is a brief description of App 2.
          </p>
          <button class="bg-blue-600 hover:bg-blue-800 text-white font-bold py-2 px-4 rounded">
            添加到工作区
          </button>
        </div>
        <div class="bg-white p-6 rounded-lg shadow-lg">
          <h3 class="text-xl font-semibold mb-3">App 3 Title</h3>
          <p class="text-gray-700 mb-4">
            This is a brief description of App 3.
          </p>
          <button class="bg-blue-600 hover:bg-blue-800 text-white font-bold py-2 px-4 rounded">
            添加到工作区
          </button>
        </div>
      </div>
    </main>
  </div>
);

export default App;
