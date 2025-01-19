const BloggerInfo = ({ name, avatar, bio, socialLinks }) => {
  return (
    <div className="p-6 border rounded-lg shadow-md bg-white flex items-center space-x-4 text-left">
      <img
        src={avatar}
        alt={`${name}'s avatar`}
        className="w-16 h-16 rounded-full"
      />
      <div>
        <h2 className="text-xl font-bold mb-2">{name}</h2>
        <p className="text-gray-700 mb-4">{bio}</p>
        <div className="flex space-x-2">
          {socialLinks.map((link) => (
            <a
              key={link.platform}
              href={link.url}
              className="text-blue-500 hover:underline"
            >
              {link.platform}
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BloggerInfo;
