import { Head } from "$fresh/runtime.ts";

const getStatus = (
  state: {
    status?: "401" | "404" | "500" | "403" | "loading";
    url: { search: string };
  },
) => {
  let status = "404";
  if (state.status) {
    status = state.status;
  } else {
    const urlParams = new URLSearchParams(state.url.search);
    status = urlParams.get("status") || status;
  }
  return status;
};

interface State {
  status?: "401" | "404" | "500" | "403" | "loading";
  url?: {
    search: string;
  };
  title?: string;
  content?: string;
}

export default function (state: State) {
  const status = getStatus({
    ...state,
    url: state.url || { search: "" },
  });
  const contentMap = {
    401: {
      title: "401 - Unauthorized",
      content: "You are not authorized to access this page.",
    },
    404: {
      title: "404 - Page not found",
      content: "The page you were looking for doesn't exist.",
    },
    500: {
      title: "500 - Internal server error",
      content: "An error occurred on the server.",
    },
    403: {
      title: "403 - Forbidden",
      content: "You don't have permission to access this page.",
    },
    loading: {
      title: "Loading...",
      content: "Please wait while we load the page.",
    },
  };
  const contentItem =
    contentMap[status as "401" | "404" | "500" | "403" | "loading"];
  const title = state.title || contentItem.title;
  const content = state.content || contentItem.content;
  return (
    <>
      <Head>
        <title>{title}</title>
      </Head>
      <div
        style={{ height: "calc(100vh - 304px)" }}
        class="flex  flex-col justify-center items-center bg-primary-1 text-center"
      >
        <div
          class="w-[430px] h-[430px] mt-[-200px] bg-center bg-no-repeat bg-contain"
          style={{
            backgroundImage: `url(/images/errorpage/${status}.svg)`,
          }}
        />

        <h1 class="-mt-32 text-3xl font-bold mb-4 text-gray-800">
          {title}
        </h1>
        <p class="text-lg mb-6 text-gray-600">
          {content}
        </p>
        {status !== "loading" && (
          <a
            href="/"
            class="px-4 py-2 bg-primary-6 rounded-md text-md text-white transition-transform transform hover:scale-105 active:scale-95"
          >
            Go back home
          </a>
        )}
      </div>
    </>
  );
}
