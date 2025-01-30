import { PageProps } from "$fresh/server.ts";
import GithubLoginLayout from "@/islands/GithubLoginLayout.tsx";

const AuthLayout = ({ Component, state }: PageProps) => {
  return (
    <GithubLoginLayout>
      <Component />
    </GithubLoginLayout>
  );
};

export default AuthLayout;
