interface ModelCardProps {
  logo: string;
  description: string;
  tags: string[];
  onClick?: () => void;
}

const ModelCard = (
  { name, logo, description, tags, onClick }: ModelCardProps,
) => {
  return (
    <div onClick={onClick} className="bg-white border rounded-lg p-3 shadow-sm">
      <h4 className="text-md font-semibold mb-2">
        {logo ? <img class="h-6" src={`/images/ai/${logo}`} /> : name}
      </h4>
      <p className="text-sm text-gray-600">
        {description}
      </p>
      <div className="flex flex-wrap gap-2 mt-2">
        {tags.map((tag, tagIndex) => (
          <span
            key={tagIndex}
            className="bg-gray-100 text-gray-800 text-xs font-medium px-2 py-1 rounded"
          >
            {tag}
          </span>
        ))}
      </div>
    </div>
  );
};

export default ModelCard;
