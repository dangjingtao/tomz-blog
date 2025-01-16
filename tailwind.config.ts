import { type Config } from "tailwindcss";

export default {
  content: [
    "{routes,islands,components}/**/*.{ts,tsx,js,jsx}",
  ],
  theme: {
    extend: {
      transitionProperty: {
        "transform": "transform",
        "opacity": "opacity",
        "all": "all",
      },
      transitionDuration: {
        "800": "800ms",
      },
      transitionTimingFunction: {
        "ease-in-out": "cubic-bezier(0.4, 0, 0.2, 1)",
      },
      transform: {
        "translate-y-0": "translateY(0)",
        "-translate-y-full": "translateY(-100%)",
      },
      opacity: {
        "0": "0",
        "100": "1",
      },
    },
  },
} satisfies Config;
