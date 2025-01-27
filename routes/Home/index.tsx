import HomeBanner from "@/components/Banner/index.tsx";
import TechStack from "@/components/TechStack/index.tsx";
import FeatureGrid from "@/components/FeatureGrid/index.tsx";
const Home = () => {
  return (
    <>
      <HomeBanner />
      <TechStack />

      <main class="flex-grow max-w-7xl mx-auto sm:px-3">
        <FeatureGrid />
      </main>
      <script src="/js/iconfont.js"></script>
    </>
  );
};

export default Home;
