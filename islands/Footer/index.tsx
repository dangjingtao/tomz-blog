/** @jsxImportSource preact */

const Footer = () => {
  return (
    <footer className="p-8 bg-[rgb(10,28,58)] text-white">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        <div>
          <h3 className="text-xl font-bold mb-4">关于本站</h3>
          <p>
            本站立足于美利坚合众国，对全球华人服务，受北美法律保护
          </p>
        </div>
        <div>
          <h3 className="text-xl font-bold mb-4">快速链接</h3>
          <ul>
            <li>
              <a href="/" className="hover:underline">首页</a>
            </li>
            <li>
              <a href="/about" className="hover:underline">关于本站</a>
            </li>
            <li>
              <a href="/docs" className="hover:underline">文档中心</a>
            </li>
          </ul>
        </div>
        <div>
          <h3 className="text-xl font-bold mb-4">联系我们</h3>
          <p>Email: dangjingtao@gmail.com</p>
          <p>Phone: +86 131 7297 9806</p>
          <div className="flex space-x-4 mt-4">
            <a href="https://facebook.com" className="hover:underline">
              Facebook
            </a>
            <a href="https://twitter.com" className="hover:underline">
              Twitter
            </a>
            <a href="https://linkedin.com" className="hover:underline">
              LinkedIn
            </a>
          </div>
        </div>
      </div>
      <div className="text-center mt-8">
        <>&copy; {new Date().getFullYear()} tomz.io</>
      </div>
    </footer>
  );
};

export default Footer;
