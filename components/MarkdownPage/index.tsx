import { CSS, KATEX_CSS, render } from "$gfm";
import { Head } from "$fresh/runtime.ts";
import Helmet from "preact-helmet";

const MarkdownPageElement = ({ content }) => {
  return (
    <>
      <Head>
        {
          /* <style dangerouslySetInnerHTML={{ __html: CSS }} />
        <style dangerouslySetInnerHTML={{ __html: KATEX_CSS }} /> */
        }
      </Head>
      <Helmet title="My Title" />
      <div
        data-color-mode="auto"
        data-light-theme="light"
        data-dark-theme="dark"
        className="markdown-body  p-10 bg-white"
        dangerouslySetInnerHTML={{
          __html: render(content, { allowMath: true }),
        }}
      />
    </>
  );
};

export default MarkdownPageElement;
