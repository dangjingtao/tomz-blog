import useAuth from "@/hooks/useAuth.ts";

const AuthLayout = ({ children }) => {
  const { status, message } = useAuth();
  return (
    <>
      {status === "success" && children}
      {status === "pending" && "Signing..."}
      {status === "error" && message}
    </>
  );
};

export default AuthLayout;
