interface TreeNode {
  id: string;
  text: string;
  children?: TreeNode[];
}

interface TreeSelectProps {
  data: TreeNode[];
  onSelect: (
    args: { event: React.MouseEvent<HTMLAnchorElement>; id: string },
  ) => void;
}

const TreeSelect = ({ data, onSelect }: TreeSelectProps) => {
  const renderTree = (nodes: TreeNode[]) => {
    return (
      <ul>
        {nodes.map(({ text, id, children }) => (
          <li key={text} className="mb-2">
            <a
              href={`#${id}`}
              onClick={(event) => onSelect({ event, id })}
              className="text-gray-700 hover:text-primary-6 text-sm leading-5"
            >
              {text}
            </a>
            {children && (
              <>
                <div className="pl-3 border-l-1 border-gray-300 mt-2">
                  {renderTree(children)}
                </div>
              </>
            )}
          </li>
        ))}
      </ul>
    );
  };

  return <>{renderTree(data)}</>;
};

interface MarkdownCateProps {
  toc: TreeNode[];
}

export default ({ toc }: MarkdownCateProps) => {
  const onSelect = ({ event, id }: { event: Event; id: string }) => {
    event.preventDefault();
    const element = document.querySelector(`#${id}`);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <div className="border-l-2 pl-2">
      <TreeSelect data={toc} onSelect={onSelect} />
    </div>
  );
};
