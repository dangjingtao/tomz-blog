const HomeBanner = () => {
  return (
    <div className="relative flex justify-center">
      <div
        className="bg-cover bg-center h-64 md:h-96 w-full"
        style={{
          maxWidth: "1600px",
          backgroundImage: "url(./images/ComfyUI_08073_.png)",
        }}
      >
        {
          /* <div className="h-full flex items-center justify-center bg-geekblue-3 ">
            <h2 className="text-4xl text-geekblue-7 font-bold">
              Welcome to TOMZ.IO
            </h2>
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
  );
};

export default HomeBanner;
