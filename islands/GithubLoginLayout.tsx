import useGithubLogin from "@/hooks/useGithubLogin.ts";

const GithubLoginLayout = ({ children }) => {
  const { status, message } = useGithubLogin();
  return (
    <>
      {status === "success" && children}
      {status === "pending" && "Signing..."}
      {status === "error" && message}
    </>
  );
};

export default GithubLoginLayout;
