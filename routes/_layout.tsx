import Header from "@/components/Header/index.tsx";
import Footer from "@/components/Footer/index.tsx";
import { PageProps } from "$fresh/server.ts";

const RootLayout = ({ Component, state }: PageProps) => {
  return (
    <div className="text-center min-h-screen flex flex-col">
      <Header />
      <div className="flex-grow bg-geekblue-1">
        <Component />
      </div>
      <Footer />
    </div>
  );
};

export default RootLayout;
