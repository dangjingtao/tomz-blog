import { useCallback } from "preact/hooks";
import { marked } from "@marked";
import { v4 as uuidv4 } from "@uuid";

export const generateNestedList = (headers) => {
  const root = { level: 0, children: [] };
  const stack = [root];

  headers.forEach((header) => {
    const item = { ...header, children: [] };
    while (stack.length > 1 && stack[stack.length - 1].level >= header.level) {
      stack.pop();
    }
    stack[stack.length - 1].children.push(item);
    stack.push(item);
  });

  return root.children;
};

const handleClick = (id) => {
  const uuid = uuidv4(id);
  const element = document.getElementById(uuid);
  console.log("haha", element);
  if (element) {
    element.scrollIntoView({ behavior: "smooth" });
  }
};

export const renderList = (items) => {
  if (!items.length) return null;

  return (
    <ul className="list-inside ml-4">
      {items.map((item, index) => (
        <li key={index} className="mb-2">
          <a
            style={{ cursor: "pointer" }}
            // href={`#${item.text.replace(/\s+/g, "-").toLowerCase()}`}
            onClick={(e) => {
              e.preventDefault();
              handleClick(item.text.replace(/\s+/g, "-").toLowerCase());
            }}
            className="text-geek-blue-3"
          >
            {item.text}
          </a>
          {renderList(item.children)}
        </li>
      ))}
    </ul>
  );
};

export const renderMarkdownTOC = (headers) =>
  renderList(generateNestedList(headers));

const MarkdownCategory = ({ content }) => {
  const getContent = useCallback((content) => {
    marked.setOptions({
      renderer: new marked.Renderer(),
      gfm: true,
    });

    const htmlContent = marked.parse(content);
    const headers: { level: number; text: string }[] = [];
    marked.lexer(content).forEach((token) => {
      if (token.type === "heading") {
        headers.push({ level: token.depth, text: token.text });
      }
    });
    const toc = renderMarkdownTOC(headers);
    return { htmlContent, toc };
  }, []);

  const { toc } = getContent(content);

  return (
    <div>
      {toc}
    </div>
  );
};

export default MarkdownCategory;
