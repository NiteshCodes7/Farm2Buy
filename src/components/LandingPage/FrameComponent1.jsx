const FrameComponent1 = () => {
  return (
    <div className="flex flex-row items-start justify-start py-0 pl-[29px] pr-[38px] box-border w-auto h-auto text-left text-57xl text-text-default-default font-lexend mq450:w-full mq450:justify-center mq450:items-center mq450:px-0">
      <div className="flex-1 flex flex-col items-start justify-start gap-[84px] w-auto h-auto mq450:min-w-[350px] mq450:gap-[40px]">
        <h1 className="m-0 text-inherit font-bold leading-[42px] w-auto mq450:text-[55px] mq450:leading-[50px] mq800:text-42xl mq800:leading-[30px]">
          Products Available
        </h1>
        <div className="flex flex-col gap-[25.1px] text-9xl text-black font-manrope mq450:justify-center">
          <div className="flex flex-row flex-wrap gap-[58px] mq450:flex-col mq450:gap-[20px] mq450:w-full">
            {/* Product Card */}
            <div className="flex-1 shadow rounded-lg bg-gainsboro-600 border border-gray-100 flex flex-row gap-[19px] min-w-[387px] p-[21px] mq450:min-w-[300px]">
              <div className="flex flex-col items-start min-w-[154px]">
                <img
                  className="w-[154px] h-[154px] rounded object-cover"
                  loading="lazy"
                  alt=""
                  src="/image-78@2x.png"
                />
              </div>
              <div className="flex-1 flex flex-col gap-[5px]">
                <h2 className="text-9xl font-bold mq450:text-xl mq450:leading-[28px] mb-1 mt-1">
                  Fresh Fruits
                </h2>
                <div className="text-base text-darkslategray-300 mq450:text-sm">
                  Farmer - Jhon Doe
                </div>
                <p className="text-base text-darkslategray-300 mq450:text-sm">
                  Enjoy a variety of fresh fruits handpicked from our orchards
                </p>
                <div className="text-mid text-gray-700 mq450:text-xs">
                  $25 per basket
                </div>
                <button className="cursor-pointer py-2 px-5 bg-gray-1200 rounded-2xl text-base text-gainsboro-500 hover:bg-darkslategray-300 mq450:py-1 mq450:px-3 mq450:text-xs">
                  Add to Cart
                </button>
              </div>
            </div>
            {/* Duplicate product cards */}
            <div className="flex-1 shadow rounded-lg bg-gainsboro-600 border border-gray-100 flex flex-row gap-[19px] min-w-[387px] p-[21px] mq450:min-w-[300px]">
              <div className="flex flex-col items-start min-w-[154px]">
                <img
                  className="w-[154px] h-[154px] rounded object-cover"
                  loading="lazy"
                  alt=""
                  src="/image-78@2x.png"
                />
              </div>
              <div className="flex-1 flex flex-col gap-[5px]">
                <h2 className="text-9xl font-bold mq450:text-xl mq450:leading-[28px] mb-1 mt-1">
                  Fresh Fruits
                </h2>
                <div className="text-base text-darkslategray-300 mq450:text-sm">
                  Farmer - Jhon Doe
                </div>
                <p className="text-base text-darkslategray-300 mq450:text-sm">
                  Enjoy a variety of fresh fruits handpicked from our orchards
                </p>
                <div className="text-mid text-gray-700 mq450:text-xs">
                  $25 per basket
                </div>
                <button className="cursor-pointer py-2 px-5 bg-gray-1200 rounded-2xl text-base text-gainsboro-500 hover:bg-darkslategray-300 mq450:py-1 mq450:px-3 mq450:text-xs">
                  Add to Cart
                </button>
              </div>
            </div>
            <div className="flex-1 shadow rounded-lg bg-gainsboro-600 border border-gray-100 flex flex-row gap-[19px] min-w-[387px] p-[21px] mq450:min-w-[300px]">
              <div className="flex flex-col items-start min-w-[154px]">
                <img
                  className="w-[154px] h-[154px] rounded object-cover"
                  loading="lazy"
                  alt=""
                  src="/image-78@2x.png"
                />
              </div>
              <div className="flex-1 flex flex-col gap-[5px]">
                <h2 className="text-9xl font-bold mq450:text-xl mq450:leading-[28px] mb-1 mt-1">
                  Fresh Fruits
                </h2>
                <div className="text-base text-darkslategray-300 mq450:text-sm">
                  Farmer - Jhon Doe
                </div>
                <p className="text-base text-darkslategray-300 mq450:text-sm">
                  Enjoy a variety of fresh fruits handpicked from our orchards
                </p>
                <div className="text-mid text-gray-700 mq450:text-xs">
                  $25 per basket
                </div>
                <button className="cursor-pointer py-2 px-5 bg-gray-1200 rounded-2xl text-base text-gainsboro-500 hover:bg-darkslategray-300 mq450:py-1 mq450:px-3 mq450:text-xs">
                  Add to Cart
                </button>
              </div>
            </div>
            <div className="flex-1 shadow rounded-lg bg-gainsboro-600 border border-gray-100 flex flex-row gap-[19px] min-w-[387px] p-[21px] mq450:min-w-[300px]">
              <div className="flex flex-col items-start min-w-[154px]">
                <img
                  className="w-[154px] h-[154px] rounded object-cover"
                  loading="lazy"
                  alt=""
                  src="/image-78@2x.png"
                />
              </div>
              <div className="flex-1 flex flex-col gap-[5px]">
                <h2 className="text-9xl font-bold mq450:text-xl mq450:leading-[28px] mb-1 mt-1">
                  Fresh Fruits
                </h2>
                <div className="text-base text-darkslategray-300 mq450:text-sm">
                  Farmer - Jhon Doe
                </div>
                <p className="text-base text-darkslategray-300 mq450:text-sm">
                  Enjoy a variety of fresh fruits handpicked from our orchards
                </p>
                <div className="text-mid text-gray-700 mq450:text-xs">
                  $25 per basket
                </div>
                <button className="cursor-pointer py-2 px-5 bg-gray-1200 rounded-2xl text-base text-gainsboro-500 hover:bg-darkslategray-300 mq450:py-1 mq450:px-3 mq450:text-xs">
                  Add to Cart
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FrameComponent1;
