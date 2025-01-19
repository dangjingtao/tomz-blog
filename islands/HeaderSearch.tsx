import { useEffect, useRef, useState } from "preact/hooks";
import MagnifyIcon from "@mdi-preact/MagnifyIcon.js";

const HeaderSeach = () => {
  const [placeholder, setPlaceholder] = useState("Search...");
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    const isMac = navigator.platform.toUpperCase().indexOf("MAC") >= 0;
    const isLinux = navigator.platform.toUpperCase().indexOf("LINUX") >= 0;
    if (isMac || isLinux) {
      setPlaceholder("Cmd+K to search...");
    } else {
      setPlaceholder(`Ctrl+K to search...`);
    }

    const handleKeyDown = (event: KeyboardEvent) => {
      if ((isMac || isLinux) && event.metaKey && event.key === "k") {
        event.preventDefault();
        inputRef.current?.focus();
      } else if (!isMac && !isLinux && event.ctrlKey && event.key === "k") {
        event.preventDefault();
        inputRef.current?.focus();
      }
    };

    globalThis.addEventListener("keydown", handleKeyDown);
    return () => {
      globalThis.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  return (
    <div className="hidden sm:flex items-center gap-6 h-8 relative">
      <input
        ref={inputRef}
        type="text"
        className="rounded-lg h-8 pl-10 pr-6 border border-gray-300 bg-white bg-opacity-75 focus:bg-opacity-100 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-300 ease-in-out"
        placeholder={placeholder}
      />
      <MagnifyIcon
        size={24}
        className="absolute left-2 top-1/2 transform -translate-y-1/2 text-gray-400"
      />
    </div>
  );
};

export default HeaderSeach;
