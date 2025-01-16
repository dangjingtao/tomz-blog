/** @jsxImportSource preact */
import { useComputed, useSignal } from "@preact/signals";
import Header from "../../components/Header/index.tsx";
import HomeBanner from "../../components/Banner/index.tsx";
const Home = () => {
  const docs = useSignal([]);
  const currentIndex = useSignal(0);

  const visibleDocs = useComputed(() => {
    const start = currentIndex.value;
    const end = start + 8;
    return docs.value.slice(start, end).concat(
      docs.value.slice(0, end - docs.value.length),
    );
  });

  return (
    <div className="text-center min-h-screen flex flex-col">
      <Header />
      <HomeBanner />
      <main className="flex-grow p-4 bg-geekblue-1">
        <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 my-8">
          <div className="p-4 bg-geekblue-2 shadow-md rounded-lg">
            <h3 className="text-2xl font-bold text-geekblue-7">Feature 1</h3>
            <p className="text-geekblue-9">Description of feature 1.</p>
          </div>
          <div className="p-4 bg-geekblue-2 shadow-md rounded-lg">
            <h3 className="text-2xl font-bold text-geekblue-7">Feature 2</h3>
            <p className="text-geekblue-9">Description of feature 2.</p>
          </div>
          <div className="p-4 bg-geekblue-2 shadow-md rounded-lg">
            <h3 className="text-2xl font-bold text-geekblue-7">Feature 3</h3>
            <p className="text-geekblue-9">Description of feature 3.</p>
          </div>
          <div className="p-4 bg-geekblue-2 shadow-md rounded-lg">
            <h3 className="text-2xl font-bold text-geekblue-7">Feature 4</h3>
            <p className="text-geekblue-9">Description of feature 4.</p>
          </div>
        </section>
        <section id="projects" className="my-8">
          <h2 className="text-4xl font-bold mb-4 text-geekblue-7">
            My Projects
          </h2>
          <p className="text-lg text-geekblue-9">
            Here are some of the projects I have worked on.
          </p>
        </section>
        <section id="docs" className="my-8">
          <h2 className="text-4xl font-bold mb-4 text-geekblue-7">Docs</h2>
          <div className="overflow-hidden" style={{ height: "460px" }}>
            <ul
              className="list-none p-0 m-0 flex gap-4 transition-transform duration-300 ease-in-out"
              style={{
                transform: `translateX(-${currentIndex.value * 100}%)`,
                height: "100%",
              }}
            >
              {visibleDocs.value.map((doc, index) => (
                <li
                  key={index}
                  className="p-4 bg-geekblue-2 shadow-md rounded-lg"
                >
                  <h3 className="text-2xl font-bold text-geekblue-7">{doc}</h3>
                </li>
              ))}
            </ul>
          </div>
        </section>
        <section id="blogs" className="my-8">
          <h2 className="text-4xl font-bold mb-4 text-geekblue-7">Blogs</h2>
          <p className="text-lg text-geekblue-9">
            Read my latest blog posts and articles.
          </p>
        </section>
        <section id="about" className="my-8">
          <h2 className="text-4xl font-bold mb-4 text-geekblue-7">About Me</h2>
          <p className="text-lg text-geekblue-9">Learn more about me.</p>
        </section>
      </main>
      <footer className="p-4 bg-geekblue-7 text-white">
        <p>&copy; 2023 My Portfolio</p>
      </footer>
    </div>
  );
};

export default Home;
