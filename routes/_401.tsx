import { Head } from "$fresh/runtime.ts";

export default function Error404() {
  return (
    <>
      <Head>
        <title>401 - Page not found</title>
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
          404 - Page not found
        </h1>
        <p class="text-lg mb-6 text-gray-600">
          The page you were looking for doesn't exist.
        </p>
        <a
          href="/"
          class="px-6 py-3 bg-geekblue-500 rounded-lg text-lg text-white hover:bg-blue-700"
        >
          Go back home
        </a>
      </div>
    </>
  );
}
