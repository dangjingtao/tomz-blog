import { PageProps } from "$fresh/server.ts";
import Auth from "@/islands/Auth.tsx";

const AuthLayout = ({ Component, state }: PageProps) => {
  return (
    <Auth>
      <Component />
    </Auth>
  );
};

export default AuthLayout;
