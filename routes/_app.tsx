import { type PageProps } from "$fresh/server.ts";
import { Head } from "$fresh/runtime.ts";
import CFG from "@/config/index.ts";

export default function App({ Component, state }: PageProps) {
  return (
    <html>
      <Head>
        <title>{CFG.global.siteName}</title>
        <meta charset="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="description" content={CFG.global.siteDescription} />
        <meta name="keywords" content={CFG.global.siteKeywords} />
        <meta property="og:title" content={CFG.global.siteName} />
        <meta property="og:description" content={CFG.global.siteDescription} />
        <meta property="og:image" content={CFG.global.siteImage} />
        <meta property="og:url" content={CFG.global.siteUrl} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={CFG.global.siteName} />
        <meta name="twitter:description" content={CFG.global.siteDescription} />
        <meta name="twitter:image" content={CFG.global.siteImage} />
        <link rel="stylesheet" href="/styles.css" />
        {
          /* <link
          rel="stylesheet"
          href="https://highlightjs.org/_next/static/css/819c34e530460f7c.css"
        >
        </link> */
        }
      </Head>
      <body>
        <Component />
      </body>
    </html>
  );
}
