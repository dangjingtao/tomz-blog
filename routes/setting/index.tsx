export default () => (
  <div class="flex h-full">
    <aside class="w-[360px] bg-gray-200 p-4 h-full">
      <ul>
        <li class="mb-2">
          <a href="#" class="flex items-center">
            <img src="workspace-icon.png" alt="Workspaces" class="mr-2 h-6" />
            <span>工作区</span>
          </a>
        </li>
      </ul>
    </aside>
    <main class="container mx-auto p-4 ml-64 md:ml-72 lg:ml-80">
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        <div class="bg-white p-4 rounded shadow">
          <h3 class="text-lg font-semibold mb-2">App 1 Title</h3>
          <p class="text-gray-600 mb-4">
            This is a brief description of App 1.
          </p>
          <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
            添加到工作区
          </button>
        </div>
        {/* <!-- 更多卡片 --> */}
      </div>
    </main>
  </div>
);
