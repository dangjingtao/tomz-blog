import { useEffect, useState } from "preact/hooks";
import request from "@/lib/request.ts";
import clientCache from "@/lib/clientCache.ts";

const useLocation = () => {
  const [location, setLocation] = useState(null);

  useEffect(() => {
    // setLocation(globalThis.location)
    (async () => {
      try {
        request({ url: "https://ipapi.co/json/", method: "GET" }).then(
          (res) => {
            const data = JSON.parse(res.data);
            setLocation(`${data.region}, ${data.city}`);
          },
        );
        // const response = await fetch("https://ipapi.co/json/");
        // const data = await response.json();
        // setLocation(`${data.region}, ${data.city}`);
      } catch (error) {
        console.error("Error fetching location:", error);
      }
    })();
  }, []);
  return location;
};
export default useLocation;
