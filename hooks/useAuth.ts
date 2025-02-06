import { useEffect, useState } from "preact/hooks";
import request from "@/lib/request.ts";
import clientCache from "@/lib/clientCache.ts";

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
    const { notification_email } = clientCache.get("userInfo") || {};
    if (!notification_email) {
      setResult({
        status: "error",
        message: "Auth failed: notification_email is not found",
      });
      return;
    } else {
      request({
        url: "/api/user/auth",
        method: "GET",
        params: { notification_email },
      }).then((res) => {
        setResult({ status: "success", message: "Auth successful" });
      }).catch((error) => {
        setResult({
          status: "error",
          message: `Auth failed: ${error.message}`,
        });
        clientCache.set("userInfo", "");
      });
    }
  }, []);

  return result;
};

export default useAuth;
