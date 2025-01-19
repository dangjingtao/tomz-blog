import { PageProps } from "$fresh/server.ts";
import { Head } from "$fresh/runtime.ts";

export default function Error500({ error }: PageProps) {
  return (
    <>
      <Head>
        <title>500 - Page not found</title>
      </Head>
      <div
        style={{ height: "calc(100vh - 52px)" }}
        class="flex  flex-col justify-center items-center bg-geekblue-1 text-center"
      >
        <img
          class="mb-4"
          src="/logo.svg"
          width="128"
          height="128"
          alt="the Fresh logo: a sliced lemon dripping with juice"
        />
        <h1 class="text-3xl font-bold mb-4 text-gray-800">
          500 internal error:
        </h1>
        <p class="text-lg mb-6 text-gray-600">
          {(error as Error).message}
        </p>
      </div>
    </>
  );
}
