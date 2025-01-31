import { useEffect, useState } from "preact/hooks";

const useScroll = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // console.log("scrolling", globalThis.scrollY > 0);
      console.log("scrolling", globalThis.scrollY);

      setIsScrolled(globalThis.scrollY > 0);
    };
    globalThis.addEventListener("scroll", handleScroll);
    return () => {
      globalThis.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return isScrolled;
};

export default useScroll;
