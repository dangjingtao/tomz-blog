/** @jsxImportSource preact */
import { useComputed, useSignal } from "@preact/signals";
// import { useEffect } from "preact/hooks";

const Home = () => {
  const menuOpen = useSignal(false);
  const docs = useSignal([]);
  const currentIndex = useSignal(0);

  const toggleMenu = () => {
    menuOpen.value = !menuOpen.value;
  };

  // useEffect(() => {
  //   // Fetch the latest docs categories (mocked here)
  //   docs.value = [
  //     // "Introduction",
  //     // "Getting Started",
  //     // "API Reference",
  //     // "Guides",
  //     // "Tutorials",
  //     // "Best Practices",
  //     // "FAQ",
  //     // "Release Notes",
  //     // "Changelog",
  //     // "Contributing",
  //   ];
  // }, []);

  // useEffect(() => {
  //   const interval = setInterval(() => {
  //     currentIndex.value = (currentIndex.value + 1) % docs.value.length;
  //   }, 3000); // Change slide every 3 seconds
  //   return () => clearInterval(interval);
  // }, [docs]);

  const visibleDocs = useComputed(() => {
    const start = currentIndex.value;
    const end = start + 8;
    return docs.value.slice(start, end).concat(
      docs.value.slice(0, end - docs.value.length),
    );
  });

  return (
    <div className="text-center min-h-screen flex flex-col">
      <header className="flex justify-between items-center p-4 bg-geekblue-7 text-white">
        <div className="flex items-center gap-4">
          <h1 className="m-0 text-2xl font-bold">TOMZ.IO</h1>
          <nav
            className={`${
              menuOpen.value ? "block" : "hidden"
            } md:flex gap-4 ml-4 transition-all duration-300 ease-in-out`}
          >
            <ul className="list-none p-0 m-0 flex flex-col md:flex-row gap-4">
              <li>
                <a
                  href="#projects"
                  className="text-white no-underline hover:underline"
                >
                  Projects
                </a>
              </li>
              <li>
                <a
                  href="#docs"
                  className="text-white no-underline hover:underline"
                >
                  Docs
                </a>
              </li>
              <li>
                <a
                  href="#blogs"
                  className="text-white no-underline hover:underline"
                >
                  Blogs
                </a>
              </li>
              <li>
                <a
                  href="#about"
                  className="text-white no-underline hover:underline"
                >
                  About
                </a>
              </li>
            </ul>
          </nav>
        </div>
        <div className="flex items-center gap-4">
          <input
            type="text"
            placeholder="Search..."
            className="p-2 rounded-md text-black transition-all duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-geekblue-5"
            style={{ height: "36px" }}
          />
          <button
            className="bg-transparent border-none text-white text-lg md:hidden"
            onClick={toggleMenu}
          >
            {menuOpen.value ? "Close" : "Menu"}
          </button>
        </div>
      </header>
      <div className="relative flex justify-center">
        <div
          className="bg-cover bg-center h-64 md:h-96 w-full"
          style={{
            maxWidth: "1600px",
            backgroundImage: "url(./images/ComfyUI_08073_.png)",
          }}
        >
          {
            /* <div className="h-full flex items-center justify-center bg-geekblue-9 bg-opacity-0.1">
          <h2 className="text-4xl text-white font-bold">Welcome to TOMZ.IO</h2>
        </div> */
          }
        </div>
        <div className="hidden lg:flex absolute inset-0 justify-between pointer-events-none">
          <div className="w-1/4 h-full bg-gradient-to-r from-white to-transparent">
          </div>
          <div className="w-1/4 h-full bg-gradient-to-l from-white to-transparent">
          </div>
        </div>
      </div>
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
