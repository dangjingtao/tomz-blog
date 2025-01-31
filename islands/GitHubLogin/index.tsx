import ErrorPage from "@/routes/error/index.tsx";
import useGithubLogin from "@/hooks/useGithubLogin.ts";
export default () => {
  const { status, message } = useGithubLogin();

  return <ErrorPage status="loading" title={status} content={message} />;
};
