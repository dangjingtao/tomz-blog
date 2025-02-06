import Input from "@/islands/Form/Input.tsx";
import ModelCard from "./ModelCard.tsx";
import T from "@/lib/Translate.ts";

const SearchNav = ({ serviceProviders, openDialog }) => {
  const handleProviderClick = (provider) => {
    openDialog(provider);
  };

  return (
    <div class="h-full flex flex-col">
      <div>
        <Input placeholder="搜索服务商" />
      </div>
      <div className="flex-1 mt-5 overflow-auto group">
        <div className="flex flex-col gap-3 overflow-auto hide-scrollbar group-hover:show-scrollbar">
          {serviceProviders.map((provider, index) => (
            <ModelCard
              key={index}
              {...provider}
              onClick={() => handleProviderClick(provider)}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default SearchNav;
