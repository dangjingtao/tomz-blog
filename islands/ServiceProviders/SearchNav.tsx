import { h } from "preact";
import { useState } from "preact/hooks";
import Input from "@/islands/Form/Input.tsx";

const SearchNav = ({ state, serviceProviders }) => {
  const [selectedProvider, setSelectedProvider] = useState(null);
  const providers = state.providers || [];

  const handleProviderClick = (providerId) => {
    setSelectedProvider(providerId);
  };

  return (
    <>
      <Input
        type="text"
        placeholder="搜索服务商"
        className="w-full p-2 mb-4 border rounded"
      />
      <div class="mt-5 flex flex-col gap-3">
        {serviceProviders.map((provider, index) => (
          <div
            key={index}
            className="bg-white border rounded-lg p-3 shadow-sm"
          >
            <h4 className="text-md font-semibold mb-2">
              <img class="h-6" src={`/images/ai/${provider.logo}`} />
            </h4>
            <p className="text-sm text-gray-600">
              {provider.description}
            </p>
            <div className="flex flex-wrap gap-2 mt-2">
              {provider.tags.map((tag, tagIndex) => (
                <span
                  key={tagIndex}
                  className="bg-gray-100 text-gray-800 text-xs font-medium px-2 py-1 rounded"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default SearchNav;
