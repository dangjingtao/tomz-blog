import { Head } from "$fresh/runtime.ts";
import { FunctionComponent } from "preact/src/index.js";
import CFG from "@/config/index.ts";

interface MetaData {
  title: string;
  description: string;
  keywords: string;
  ogTitle: string;
  ogDescription: string;
  ogImage: string;
  ogUrl: string;
  twitterCard: string;
  twitterTitle: string;
  twitterDescription: string;
  twitterImage: string;
  canonicalUrl?: string;
  author?: string;
  robots?: string;
}

interface MetaHeadProps {
  metaData: MetaData;
}

type Page = "about";

const getPageMeta = (page: Page, extraMeta: Partial<MetaData>): MetaData => {
  const metaMap: Record<Page, MetaData> = {
    "about": {
      title: "关于本站 - Tomz.io",
      description: "了解更多关于我们的信息",
      keywords: "关于, 我们, 信息",
      ogTitle: "关于本站 - Tomz.io",
      ogDescription: "了解更多关于我们的信息",
      ogImage: CFG.global.siteImage,
      ogUrl: `${CFG.global.siteUrl}/about`,
      twitterCard: "summary_large_image",
      twitterTitle: "关于我们 - Tomz.io",
      twitterDescription: "了解更多关于我们的信息",
      twitterImage: CFG.global.siteImage,
      ...extraMeta,
    },
  };
  const meta: MetaData = metaMap[page] || {};

  return { ...meta, ...extraMeta };
};

const MetaHead: FunctionComponent<MetaHeadProps> = (
  { page, extraMeta },
) => {
  const metaData = getPageMeta(page, extraMeta);
  return (
    <Head>
      <title>{metaData.title}</title>
      <meta name="description" content={metaData.description} />
      <meta name="keywords" content={metaData.keywords} />
      <meta property="og:title" content={metaData.ogTitle} />
      <meta property="og:description" content={metaData.ogDescription} />
      <meta property="og:image" content={metaData.ogImage} />
      <meta property="og:url" content={metaData.ogUrl} />
      <meta name="twitter:card" content={metaData.twitterCard} />
      <meta name="twitter:title" content={metaData.twitterTitle} />
      <meta name="twitter:description" content={metaData.twitterDescription} />
      <meta name="twitter:image" content={metaData.twitterImage} />
      {metaData.canonicalUrl && (
        <link rel="canonical" href={metaData.canonicalUrl} />
      )}
      {metaData.author && <meta name="author" content={metaData.author} />}
      {metaData.robots && <meta name="robots" content={metaData.robots} />}
      <meta name="viewport" content="width=device-width, initial-scale=1" />
    </Head>
  );
};

export default MetaHead;
