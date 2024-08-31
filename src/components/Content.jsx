const Content = () => {
  return (
    <section className="w-full flex flex-row items-center justify-start max-w-full h-screen text-23xl text-black font-lexend ">
        <div className="w-full flex flex-col items-center justify-start gap-[34.1px] max-w-full h-full mq750:min-w-full px-16">
          <div className="flex flex-row items-center justify-between gap-3 px-10 w-full">
              <h1 className="m-0 text-inherit leading-[60px] font-bold mq450:text-6xl mq450:leading-[36px] mq1050:text-15xl mq1050:leading-[48px]">
                Your Products
              </h1>
              <button className=" cursor-pointer py-[9.5px] pl-[34px] pr-[25px] bg-gray-1200 rounded-lg text-mid text-gainsboro-700 font-extrabold whitespace-nowrap hover:bg-gray-500">
                Upload Product
              </button>
          </div>
          <div className="flex flex-row gap-24 w-full items-center justify-center">
            <div className="self-stretch flex flex-col items-start justify-start gap-[10.9px] max-w-full w-auto h-auto text-mid text-gray-700">
              <img
                className="self-stretch h-[250px] w-[370px] rounded-xl object-cover"
                loading="lazy"
                alt=""
                src="/image-14@2x.png"
              />
              <div className="flex flex-col items-start justify-center pb-[6.1px] w-auto gap-[3px] text-gray-1300 font-manrope">
                <div className="leading-[26px]">Tomatoes</div>
                <div className="text-base leading-[26px] text-dimgray-300">Fresh Tomatoes</div>
                <div className="text-mini leading-[30px] text-gray-700 font-lexend">
                  Amount Available: 2 Kg
                </div>
                <b className="text-xl leading-[30px] text-gray-700 font-bold mq450:text-base mq450:leading-[24px]">
                  $3.00 / Ib
                </b>
              </div>
              <div className="flex flex-row items-start justify-start gap-[47px] w-full h-auto mq450:flex-wrap">
                <button className="cursor-pointer py-[9.5px] px-[65px] bg-gray-1200 rounded-lg text-base text-gainsboro-200 font-manrope font-bold hover:bg-gray-500">  
                  Edit
                </button>
                <button className="cursor-pointer pt-2.5 pb-[9px] pl-[59px] pr-14 bg-red-300 rounded-lg text-base text-gainsboro-200 font-manrope font-bold hover:bg-red-100">
                  Delete
                </button>
              </div>
            </div>
            <div className="self-stretch flex flex-col items-start justify-start gap-[10.9px] max-w-full w-auto h-auto text-mid text-gray-700">
              <img
                className="self-stretch w-[370px] h-[250px] rounded-xl object-cover"
                loading="lazy"
                alt=""
                src="/image-14@2x.png"
              />
              <div className="flex flex-col items-center justify-center pb-[6.1px] w-auto gap-[3px] text-gray-1300 font-manrope">
                <div className="leading-[26px]">Tomatoes</div>
                <div className="text-base leading-[26px] text-dimgray-300">Fresh Tomatoes</div>
                <div className="text-mini leading-[30px] text-gray-700 font-lexend">
                  Amount Available: 2 Kg
                </div>
                <b className="text-xl leading-[30px] text-gray-700 font-bold mq450:text-base mq450:leading-[24px]">
                  $3.00 / Ib
                </b>
              </div>
              <div className="flex flex-row items-start justify-start gap-[47px] w-full h-auto mq450:flex-wrap">
                <button className="cursor-pointer py-[9.5px] px-[65px] bg-gray-1200 rounded-lg text-base text-gainsboro-200 font-manrope font-bold hover:bg-gray-500">
                  Edit
                </button>
                <button className="cursor-pointer pt-2.5 pb-[9px] pl-[59px] pr-14 bg-red-300 rounded-lg text-base text-gainsboro-200 font-manrope font-bold hover:bg-red-100">
                  Delete
                </button>
              </div>
            </div>
            <div className="self-stretch flex flex-col items-start justify-start gap-[10.9px] max-w-full w-auto h-auto text-mid text-gray-700">
              <img
                className="self-stretch w-[370px] h-[250px] rounded-xl object-cover"
                loading="lazy"
                alt=""
                src="/image-14@2x.png"
              />
              <div className="flex flex-col items-center justify-center pb-[6.1px] w-auto gap-[3px] text-gray-1300 font-manrope">
                <div className="leading-[26px]">Tomatoes</div>
                <div className="text-base leading-[26px] text-dimgray-300">Fresh Tomatoes</div>
                <div className="text-mini leading-[30px] text-gray-700 font-lexend">
                  Amount Available: 2 Kg
                </div>
                <b className="text-xl leading-[30px] text-gray-700 font-bold mq450:text-base mq450:leading-[24px]">
                  $3.00 / Ib
                </b>
              </div>
              <div className="flex flex-row items-start justify-start gap-[47px] w-full h-auto mq450:flex-wrap">
                <button className="cursor-pointer py-[9.5px] px-[65px] bg-gray-1200 rounded-lg text-base text-gainsboro-200 font-manrope font-bold hover:bg-gray-500">
                  Edit
                </button>
                <button className="cursor-pointer pt-2.5 pb-[9px] pl-[59px] pr-14 bg-red-300 rounded-lg text-base text-gainsboro-200 font-manrope font-bold hover:bg-red-100">
                  Delete
                </button>
              </div>
            </div>
          </div>
        </div>
    </section>
  );
};

export default Content;
