import { useState } from "preact/hooks";
import SearchNav from "@/islands/ServiceProviders/SearchNav.tsx";
import ProviderSetting from "./ProviderSetting.tsx";
import Dialog from "@/islands/Dialog/index.tsx";
import Input from "@/islands/Form/Input.tsx";

import TButton from "@/islands/Button/index.tsx";

const serviceProviders = [
  {
    name: "Open Proxy API",
    // logo: "openai.svg",
    description:
      "基于本官网自研搭建的api model，提供了一系列的模型，例如 Deep seek / kimi 和 qwen。",
    tags: ["LLM", "标签2", "标签3"],
  },
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

const providerSettings = [
  {
    title: "系统模型设置",
    items: [
      {
        name: "task",
        label: "任务模型",
        value: "zh",
        editable: true,
        type: "select",
        options: [
          { value: "zh", label: "中文" },
          { value: "en", label: "English" },
        ],
      },
      {
        name: "image",
        label: "图像生成模型",
        value: "zh",
        editable: true,
        type: "select",
        options: [
          { value: "zh", label: "comfy UI" },
          { value: "en", label: "stable diffusion" },
        ],
      },
      {
        name: "embedding",
        label: "Embedding 模型",
        value: "zh",
        editable: true,
        type: "select",
        options: [
          { value: "zh", label: "中文" },
          { value: "en", label: "English" },
        ],
      },
      {
        name: "tts",
        label: "文本转语音模型",
        value: "zh",
        editable: true,
        type: "select",
        options: [
          { value: "zh", label: "中文" },
          { value: "en", label: "English" },
        ],
      },
      {
        name: "asr",
        label: "对外模型",
        value: "zh",
        editable: true,
        type: "select",
        options: [
          { value: "zh", label: "中文" },
          { value: "en", label: "English" },
        ],
      },
    ],
  },

  {
    title: "已启用服务商列表",
    items: [
      // {
      //   content: <ModelCard logo={""} description="" tags={[]} />,
      // },
    ],
  },
];

export default () => {
  const [open, setOpen] = useState(false);
  const openDialog = () => setOpen(true);
  const closeDialog = () => setOpen(false);

  return (
    <>
      <div className="flex flex-1 flex-col md:flex-row gap-2 h-full">
        <aside className="bg-white h-full shadow-sm rounded-lg p-6 w-full md:w-80">
          <SearchNav
            openDialog={openDialog}
            closeDialog={closeDialog}
            serviceProviders={serviceProviders}
          />
        </aside>
        <main className="flex-1 p-6 bg-white shadow-sm rounded-lg">
          <ProviderSetting settings={providerSettings} />
        </main>
      </div>

      <Dialog
        title={"Setting Model Provider"}
        subContent={"As an owner of this project, you can view and manage all API keys in this project. Do not share your API key with others or expose it in the browser or other client-side code."}
        open={open}
        setOpen={setOpen}
      >
        <Input placeholder="API Url" />
        <div class="flex">
          <div class="w-[85%]">
            <Input placeholder="API Key" />
          </div>
          <div class="flex-1">
            <TButton variant="text">Validate</TButton>
          </div>
        </div>
      </Dialog>
    </>
  );
};
