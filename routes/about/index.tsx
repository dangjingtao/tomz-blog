import CFG from "@/config/index.ts";
import MetaHead from "@/components/MetaHead/index.tsx";

export default function About() {
  return (
    <>
      <MetaHead />
      <div className="relative">
        <div
          className="bg-cover bg-center h-32 md:h-48 w-full"
          style={{
            backgroundImage: "url(/images/about.jpg)",
          }}
        >
          <div className="absolute inset-0 w-2/5 bg-back opacity-30">
          </div>
          <h2 className="relative text-3xl font-bold mb-4 pl-36 pt-20 text-white stroke-black stroke-2">
            关于本站
          </h2>
          <div>
            <p className="text-lg text-white pl-36 stroke-black stroke-2">
              {CFG.global.siteDescription}
            </p>
          </div>
        </div>
      </div>
      <div className="bg-white p-4 md:p-8 md:pl-32 md:pr-32">
        <div className="text-4xl font-bold text-indigo-500">&ldquo;</div>
        <p className="text-lg text-gray-700 mt-2 md:pl-8 md:pr-8">
          在新时代中国特色的经济危机中，我们开发者依然高举创新、正直、团结和敢拼的旗帜。尽管市场如同过山车般跌宕起伏，政策调整如变脸般迅速，我们依然坚信，只要保持专注与高效，便能在纷繁复杂的环境中稳操胜券。在这里，不问出处，每个人都是自己的舵手。我们以黑色幽默自嘲，面对裁员潮和项目延期，依然能够苦中作乐，用代码书写属于我们的传奇。
        </p>
        <p className="text-right text-sm text-gray-500 mt-2">—— Tomz</p>
      </div>

      {/* <TimeLine /> */}

      <div className="container mx-auto p-4">
        <p className="mb-4">
          欢迎来到 {CFG.global
            .siteName}！我们致力于提供高质量的内容和服务，帮助您在新时代的经济环境中取得成功。
        </p>
        <p className="mb-4">
          我们的团队由经验丰富的开发者和技术专家组成，专注于人工智能、机器学习、前端和后端开发等领域。我们希望通过分享我们的知识和经验，帮助更多的人实现他们的目标。
        </p>
        <p className="mb-4">
          如果您有任何问题或建议，请随时与我们联系。我们期待与您的交流和合作！
        </p>
      </div>
    </>
  );
}
