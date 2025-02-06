import clientCache from "@/lib/clientCache.ts";
import { useEffect, useState } from "preact/hooks";
import request from "@/lib/request.ts";

const useGithubLogin = () => {
  const [result, setResult] = useState<{
    status: string;
    message: string;
    error?: unknown;
  }>({
    status: "pending",
    message: "",
  });

  useEffect(() => {
    const params = new URLSearchParams(globalThis.location.search);
    const code = params.get("code");

    if (code) {
      request({
        url: "/api/user/auth",
        method: "POST",
        body: { code },
      }).then(async (res) => {
        clientCache.set("userInfo", JSON.parse(res.data));
        setResult({ status: "success", message: "Auth successful" });
        globalThis.location.href = "/settings";
      }).catch((error) => {
        setResult({
          status: "error",
          message: `Auth failed: ${error.message}`,
        });
        clientCache.set("userInfo", "");
      });
    } else {
      setResult({ status: "error", message: "Authorization code is null" });
      clientCache.set("userInfo", "");
    }
  }, []);

  return result;
};

export default useGithubLogin;
