function ContentItem(props: {
  title: string;
  description: string;
  linktext: string;
  link: string;
  product: string;
}) {
  const productClass = props.product === "deploy"
    ? "deploy-link"
    : props.product === "runtime"
    ? "runtime-link"
    : "help-link"; // Default to "help-link" if product is "help"

  return (
    <div>
      <h4 className="text-lg font-semibold mb-1">{props.title}</h4>
      <p className="mb-3">{props.description}</p>
      <a className={`homepage-link ${productClass}`} href={props.link}>
        {props.linktext}{" "}
        <span aria-hidden="true" class="whitespace-pre">
          -&gt;
        </span>
      </a>
    </div>
  );
}

function LinkList(props: {
  title: string;
  product: string;
  links: { text: string; href: string }[];
}) {
  const productClass = props.product === "deploy"
    ? "deploy-link"
    : props.product === "runtime"
    ? "runtime-link"
    : "help-link";
  return (
    <div>
      <h4 className="text-lg font-semibold mb-1">{props.title}</h4>
      {props.links.map((link, index) => (
        <a
          key={index}
          className={`homepage-link mb-1 ${productClass}`}
          href={link.href}
        >
          {link.text}
        </a>
      ))}
    </div>
  );
}

export default function () {
  return (
    <main class="bg-white flex flex-col px-8 pt-6 md:pt-12 pb-10 mt-4 md:items-center md:justify-center max-w-[1260px] mx-auto mb-48">
      <div class="flex flex-col gap-4 md:gap-8 pb-16 align-middle md:pb-0">
        {/* Hero section */}
        <div class="grid grid-cols-1 md:grid-cols-3 mb-6 gap-4">
          <div class="md:col-span-2">
            <h1 class="text-4xl md:text-5xl mb-2 md:mb-6 font-bold">
              Document Center
            </h1>
            <p class="text-md max-w-[600px] md:text-lg">
              目前正在积极维护中的项目
            </p>
          </div>
          <div class="hidden md:block md:col-span-1">
            <img
              class="w-[100px] h-[100px]"
              src="/images/logo.svg"
              alt="logo"
            />
          </div>
        </div>

        {/* Main content  */}
        <div class="flex flex-col gap-8 md:gap-16">
          {/* Temporary banner  */}
          <div class="flex flex-col gap-4 p-4 bg-runtime-background dark:bg-background-secondary border-l-4 text-runtime-foreground border-runtime-500">
            <p class="text-lg">
              <strong>Tomz.io</strong> is out now! Learn about{"  "}
              <a
                href="/runtime/reference/migration_guide"
                class="runtime-link underline underline-offset-4"
              >
                what's changed
              </a>{" "}
              in the release.
            </p>
          </div>

          {/* Runtime content */}
          <div class="flex flex-col gap-8">
            {/* Section Header */}
            <div>
              <h2 class="text-3xl md:text-4xl font-semibold underline underline-offset-8 decoration-runtime-500 mb-6">
                Tomz-blog
              </h2>
              <p class="max-w-[75ch]">
                Blazing Fresh Notion Blog with Deno and Preact
              </p>
            </div>

            {/* Examples Section */}
            <div class="flex flex-col">
              <div class="mb-8">
                <h3 class="text-xl md:text-2xl font-semibold underline underline-offset-8 decoration-runtime-500 mb-4">
                  User Guide
                </h3>
                <p class="max-w-[75ch]">
                  A collection of annotated Tomz-blog examples, to be used as a
                  reference for how to build with Deno, or as a guide to learn
                  about many of Deno's features. Find more examples in the{" "}
                  <a
                    href="/examples/"
                    class="runtime-link underline underline-offset-4"
                  >
                    Examples
                  </a>{" "}
                  section.
                </p>
              </div>
              <div class="grid grid-cols-1 md:grid-cols-4 gap-8 md:gap-16">
                <LinkList
                  title="basic Use"
                  product="runtime"
                  links={[
                    {
                      text: "Hello World",
                      href: "/examples/hello_world",
                    },
                  ]}
                />
                <LinkList
                  title="Configuration"
                  product="runtime"
                  links={[
                    {
                      text: "HTTP Server: Hello World",
                      href: "/examples/http_server",
                    },
                  ]}
                />
                <LinkList
                  title="Deploy"
                  product="runtime"
                  links={[
                    {
                      text: "Command Line Arguments",
                      href: "/examples/command_line_arguments",
                    },
                  ]}
                />
                <LinkList
                  title="Help"
                  product="runtime"
                  links={[
                    {
                      text: "Command Line Arguments",
                      href: "/examples/command_line_arguments",
                    },
                  ]}
                />
              </div>
            </div>

            {/* Reference Section */}
            <div class="flex flex-col">
              <div class="mb-8">
                <h3 class="text-xl md:text-2xl font-semibold underline underline-offset-8 decoration-runtime-500 mb-4">
                  API reference
                </h3>
                <p class="max-w-[75ch]">
                  Deno, Web, and Node API reference documentation, built for the
                  Deno experience. Explore the APIs available in Deno in the
                  {" "}
                  <a
                    href="/api/deno"
                    class="runtime-link underline underline-offset-4"
                  >
                    API reference
                  </a>{" "}
                  section.
                </p>
              </div>
              <div class="grid grid-cols-1 md:grid-cols-4 gap-8 md:gap-16">
                <LinkList
                  title="Deno APIs"
                  product="runtime"
                  links={[
                    {
                      text: "Cloud",
                      href: "/api/deno/cloud",
                    },
                    {
                      text: "FFI",
                      href: "/api/deno/ffi",
                    },
                    {
                      text: "Network",
                      href: "/api/deno/network",
                    },
                    {
                      text: "Permissions",
                      href: "/api/deno/permissions",
                    },
                    {
                      text: "WebSockets",
                      href: "/api/deno/web-sockets",
                    },
                    {
                      text: "View all Deno APIs",
                      href: "/api/deno",
                    },
                  ]}
                />
                <LinkList
                  title="Web APIs"
                  product="runtime"
                  links={[
                    {
                      text: "Cache",
                      href: "/api/web/cache",
                    },
                    {
                      text: "Canvas",
                      href: "/api/web/canvas",
                    },
                    {
                      text: "Fetch",
                      href: "/api/web/fetch",
                    },
                    {
                      text: "Streams",
                      href: "/api/web/streams",
                    },
                    {
                      text: "URL",
                      href: "/api/web/url",
                    },
                    {
                      text: "View all Web APIs",
                      href: "/api/web",
                    },
                  ]}
                />
                <LinkList
                  title="Node APIs"
                  product="runtime"
                  links={[
                    {
                      text: "assert",
                      href: "/api/node/assert",
                    },
                    {
                      text: "buffer",
                      href: "/api/node/buffer",
                    },
                    {
                      text: "fs",
                      href: "/api/node/fs",
                    },
                    {
                      text: "path",
                      href: "/api/node/path",
                    },
                    {
                      text: "process",
                      href: "/api/node/process",
                    },
                    {
                      text: "View all Node APIs",
                      href: "/api/node",
                    },
                  ]}
                />
              </div>
            </div>
          </div>

          <div class="flex flex-col gap-8">
            {/* Scection Header */}
            <div>
              <h2 class="text-3xl md:text-4xl font-semibold underline underline-offset-8 decoration-deploy-500 mb-8">
                <a href="/docs/open-proxy-api/Introduction">Open-proxy-api</a>
              </h2>
              <p class="max-w-[75ch]">
                Serverless platform for deploying JavaScript code to a fast,
                global edge network. Supports Deno APIs and Node.js / npm
                modules
              </p>
            </div>
            {/* Deploy features */}
            <div class="grid grid-cols-1 mb-4 md:grid-cols-3 gap-8 md:gap-24">
              <ContentItem
                title="KV"
                description="Key/value database built in to the Deno runtime. Simple API, works with zero configuration on Deno Deploy."
                linktext="KV docs"
                link="/deploy/kv/manual/"
                product="deploy"
              />

              <ContentItem
                title="Cron"
                description="Execute code on a configurable schedule at the edge in any time zone."
                linktext="Cron docs"
                link="/deploy/kv/manual/cron"
                product="deploy"
              />

              <ContentItem
                title="Queues"
                description="Deno’s queueing API for offloading larger workloads or scheduling tasks with guaranteed delivery."
                linktext="Queues docs"
                link="/deploy/kv/manual/queue_overview/"
                product="deploy"
              />
            </div>

            {/* Subhosting content */}
            <div class="flex flex-col">
              <div class="mb-8">
                <h3 class="text-xl md:text-2xl font-semibold underline underline-offset-8 decoration-deploy-500 mb-4">
                  Subhosting
                </h3>
                <p class="max-w-[66ch]">
                  Deno Subhosting is a robust platform designed to allow
                  Software as a Service (SaaS) providers to securely run code
                  written by their customers.
                </p>
              </div>
              <div class="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-24">
                <ContentItem
                  title="Quick Start"
                  description="Configure your subhosting account and you'll be hosting customer code in minutes."
                  linktext="Quick start"
                  link="/subhosting/manual/quick_start/"
                  product="deploy"
                />

                <ContentItem
                  title="Subhosting architecture"
                  description="Manage key resources in your systems - handle data, manage deployments and their analytics. All while ensuring stability and efficiency."
                  linktext="Learn about subhosting"
                  link="/subhosting/api/"
                  product="deploy"
                />

                <ContentItem
                  title="REST API"
                  description="Quickly provision new projects and make deployments through our REST API."
                  linktext="REST API"
                  link="/subhosting/manual/#rest-api-reference-and-openapi-spec"
                  product="deploy"
                />
              </div>
            </div>
          </div>

          {/* Help content */}

          <div class="flex flex-col gap-8">
            <div>
              <h2 class="text-3xl md:text-4xl font-semibold underline underline-offset-8 decoration-purple-600 dark:decoration-purple-300 mb-8">
                Help
              </h2>
              <p class="max-w-[75ch]">
                Get help from the Deno team or connect with our community.
              </p>
            </div>
            <div class="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-24">
              <ContentItem
                title="Connect with our community"
                description="Get help from the Deno community"
                linktext="Learn more"
                link="/runtime/help"
                product="help"
              />
              <ContentItem
                title="Enterprise support"
                description="Explore Deno's enterprise support options"
                linktext="Learn more"
                link="https://deno.com/enterprise"
                product="help"
              />
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
