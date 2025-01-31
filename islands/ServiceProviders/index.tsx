const serviceProviders = [
  {
    name: "Open AI",
    logo: "openai.svg",
    description: "OpenAI 提供的模型，例如 GPT-3.5-Turbo 和 GPT-4。",
    tags: ["标签1", "标签2", "标签3"],
  },
  {
    name: "Google Cloud",
    logo: "gemini.svg",
    description: "Vertex AI in Google Cloud Platform.",
    tags: ["标签4", "标签5"],
  },
  {
    name: "Deep seek",
    logo: "deepseek.svg",
    description:
      "GroqCloud 提供对 Groq Cloud API 的访问，其中托管了 LLama2 和 Mixtral 等模型。",
    tags: ["标签6", "标签7", "标签8", "标签9"],
  },
  {
    name: "GroqCloud",
    logo: "groqcloud.svg",
    description:
      "GroqCloud 提供对 Groq Cloud API 的访问，其中托管了 LLama2 和 Mixtral 等模型。",
    tags: ["标签6", "标签7", "标签8", "标签9"],
  },
  {
    name: "Ollama",
    logo: "ollama.svg",
    description:
      "GroqCloud 提供对 Groq Cloud API 的访问，其中托管了 LLama2 和 Mixtral 等模型。",
    tags: ["标签6", "标签7", "标签8", "标签9"],
  },
];

import SearchNav from "@/islands/ServiceProviders/SearchNav.tsx";

export default ({ state }) => {
  return (
    <div className="flex flex-1 flex-col md:flex-row gap-2">
      <aside className="bg-white shadow-sm rounded-lg p-6 w-full md:w-80">
        <SearchNav state={state} serviceProviders={serviceProviders} />
      </aside>
      <main className="flex-1 p-6 bg-white shadow-sm rounded-lg">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        </div>
      </main>
    </div>
  );
};
