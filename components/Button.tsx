import { JSX } from "preact";
import { IS_BROWSER } from "$fresh/runtime.ts";

export function Button(props: JSX.HTMLAttributes<HTMLButtonElement>) {
  return (
    <button
      {...props}
      disabled={!IS_BROWSER || props.disabled}
      class="px-4 py-2 border-none rounded bg-geekblue-500 text-white hover:bg-geekblue-400 transition-colors duration-300"
    >
      {props.children}
    </button>
  );
}
