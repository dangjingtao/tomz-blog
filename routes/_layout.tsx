import Header from "@/islands/Header/index.tsx";
import Footer from "@/islands/Footer/index.tsx";
import { PageProps } from "$fresh/server.ts";
import { Partial } from "$fresh/runtime.ts";

const RootLayout = ({ Component, state }: PageProps) => {
  return (
    <div className="min-h-screen flex flex-col" f-client-nav>
      <Header />
      <Partial name="body">
        <div className="flex-grow bg-primary-1">
          <Component />
        </div>
        {!state.hidefooter && <Footer />}
      </Partial>
    </div>
  );
};

export default RootLayout;
