import { type Config } from "tailwindcss";
import customForms from "@tailwindcss/custom-forms";

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
      colors: {
        "primary": "var(--primary-color)",
        "primary-light": "var(--primary-color-light)",
        "primary-dark": "var(--primary-color-dark)",
        "primary-1": "var(--primary-color-1)",
        "primary-2": "var(--primary-color-2)",
        "primary-3": "var(--primary-color-3)",
        "primary-4": "var(--primary-color-4)",
        "primary-5": "var(--primary-color-5)",
        "primary-6": "var(--primary-color-6)",
        "primary-7": "var(--primary-color-7)",
        "primary-8": "var(--primary-color-8)",
        "primary-9": "var(--primary-color-9)",
        "primary-10": "var(--primary-color-10)",
      },
    },
    plugins: [
      customForms,
    ],
  },
} satisfies Config;
