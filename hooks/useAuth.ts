import { useEffect, useState } from "preact/hooks";
import request from "@/lib/request.ts";

const useAuth = () => {
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
      }).then((res) => {
        console.log(res);
        sessionStorage.setItem("userInfo", res.data);
        setResult({ status: "success", message: "Auth successful" });
        globalThis.location.href = "/setting";
      }).catch((error) => {
        setResult({
          status: "error",
          message: `Auth failed: ${error.message}`,
        });
        sessionStorage.setItem("userInfo", "");
      });
    } else {
      setResult({ status: "error", message: "Authorization code is null" });
      sessionStorage.setItem("userInfo", "");
    }
  }, []);

  return result;
};

export default useAuth;
