const features = [
  {
    icon: "ico_people",
    title: "Easy to Use",
    description:
      "The framework so simple, you already know it. Tomz'blog is designed to be easy to use by building on the best well-known tools, conventions, and web standards.",
  },
  {
    icon: "ico_oms_pro",
    title: "Friendly to Developers",
    description:
      "The team also used Fresh, a next-gen Deno-native full stack web framework that sends zero JavaScript to the client, for its modern developer experience and snappy performance…This stack unlocked 5x faster page load speeds and a 30% jump in conversion rates for their clients.",
  },
  {
    icon: "ico_efficient",
    title: "High Performance",
    description: "Description of feature 3.",
  },
  {
    icon: "yingyong",
    title: "300+ UI Components",
    description:
      "UI components and snippets that cover all you need to create almost any- business, startup, SaaS landing page, or site.",
  },
  {
    icon: "xuniji",
    title: "Built on Deno",
    description:
      "Deno is the next evolution of server-side JavaScript, with stronger security, a robust built-in toolchain, and zero-config TypeScript support. (It's faster than Node, too.)",
  },
  {
    icon: "ico_ttms",
    title: "TypeScript suggest",
    description: "Description of feature 4.",
  },
];

const FeatureGrid = () => {
  return (
    <section class="pt-5 mt-7">
      <h2 class="text-title-2">
        Core Features
      </h2>
      <p class="text-para-large text-[24px] py-3">
        Everything you need to create outstanding website user interfaces
        rapidly.
      </p>
      <section class="grid grid-cols-1 lg:grid-cols-3 gap-4 mt-4 mb-8 text-left">
        {features.map((feature, index) => (
          <div key={index} class="p-7 bg-white shadow-sm rounded-lg">
            <svg class="icon w-16 h-16 my-3" aria-hidden="true">
              <use xlink:href={`#icon-${feature.icon}`}></use>
            </svg>
            <h3 class="text-title-3">
              {feature.title}
            </h3>
            <p class="text-para-sub">{feature.description}</p>
          </div>
        ))}
      </section>
    </section>
  );
};

export default FeatureGrid;
