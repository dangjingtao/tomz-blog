import { h } from "preact";
import { useState } from "preact/hooks";

const SearchNav = ({ state }) => {
  const [selectedProvider, setSelectedProvider] = useState(null);
  const providers = state.providers || [];

  const handleProviderClick = (providerId) => {
    setSelectedProvider(providerId);
  };

  return (
    <>
      <input
        type="text"
        placeholder="搜索服务商"
        className="w-full p-2 mb-4 border rounded"
      />
      <div>
        {providers.map((provider) => (
          <div
            key={provider.id}
            onClick={() => handleProviderClick(provider.id)}
            className={`p-4 mb-2 border rounded cursor-pointer ${
              selectedProvider === provider.id
                ? "border-blue-500"
                : "border-gray-300"
            }`}
          >
            {provider.name}
          </div>
        ))}
      </div>
    </>
  );
};

export default SearchNav;
