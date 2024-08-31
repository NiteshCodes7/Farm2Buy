import Navbar from "../Navbar";

const FrameComponent = () => {
  return (
    <section className="self-stretch flex flex-col items-center justify-start py-0 pl-0 pr-0 box-border max-w-full w-auto h-screen gap-0 text-center text-black font-lexend">
      <div className="w-full flex-1 shadow-[0px_0px_2px_rgba(23,_26,_31,_0.12),_0px_0px_1px_rgba(23,_26,_31,_0.07)] rounded-sm bg-gainsboro-600 border-gainsboro-600 border-[1px] border-solid box-border flex flex-col items-center justify-start pt-[42px] pb-[88px] px-[65px] gap-[113px] relative z-[2] mq450:pr-[40px] mq450:pl-[5px]">
        <img
          className="w-full h-full absolute top-0 left-0 object-cover"
          alt=""
          src="/home-1@2x.png"
        />
        
        <Navbar />

        <div className="w-full h-full mb-[20px] relative flex flex-col items-center justify-center py-0 px-[20px] md:px-[43px] box-border mq450:pl-[63px]">
          <div className="flex-1 flex flex-col items-center justify-center max-w-full h-auto">
            <div className="flex flex-col items-center justify-center max-w-full  mb-[70px]">
              <div className="w-[758px] flex flex-col items-center justify-start gap-8 max-w-full h-auto">
                <div className="self-stretch flex flex-col items-center justify-center py-0 pl-5 pr-[25px] box-border max-w-full w-auto h-auto gap-0 text-57xl">
                  <h1 className="m-0 text-[70px] leading-[90px] font-bold text-black text-center mq800:text-[38px] mq800:leading-[50px] md:text-[55px] md:leading-[75px]">
                    <div className="flex flex-col justify-center items-center">
                      <p className="m-0 text-darkolivegreen">
                        FARMER <span className="text-gray-1200">TO</span>
                      </p>
                      <p className="m-0 text-red-100">BUYER</p>
                    </div>
                  </h1>
                </div>
                <h2 className="m-0 text-[25px] leading-[42px] font-bold mq800:text-[15px] mq800:leading-[32px] md:text-[20px] md:leading-[40px]">
                  Connecting Farmers and Consumers - Bringing Fresh
                </h2>
                <div className="self-stretch flex flex-row items-start justify-center py-0 pl-5 pr-[26px] box-border w-auto h-auto gap-0">
                  <h2 className="m-0 text-[25px] leading-[42px] font-bold mq800:text-[15px] mq800:leading-[32px] md:text-[20px] md:leading-[40px]">
                    No Middleman
                  </h2>
                </div>
              </div>
            </div>
            <div className="self-stretch flex flex-row items-start justify-between gap-5 w-auto h-auto mq450:w-[270px] mq450:overflow-hidden mq450:gap-x-[80px] mq450:flex-row mq450:justify-center">
              <button className="cursor-pointer py-[5px] px-[19px] bg-gray-1400 rounded-mid box-border overflow-hidden flex flex-row items-start justify-start whitespace-nowrap w-auto h-auto z-[1] hover:bg-darkslategray-200 mq800:w-[100px] mq800:text-[6px] mq800:justify-center mq800:items-center">
                <div className="relative text-base leading-[26px] font-manrope text-gainsboro-700 text-center flex min-w-[90] w-auto">
                  Our Centers
                </div>
              </button>
              <button className="cursor-pointer py-[5px] px-[19px] bg-gray-1400 rounded-mid box-border overflow-hidden flex flex-row items-start justify-start whitespace-nowrap w-auto h-auto z-[1] hover:bg-darkslategray-200 mq800:w-[100px] mq800:text-[6px] mq800:justify-center mq800:items-center">
                <div className="relative text-base leading-[26px] font-manrope text-gainsboro-700 text-center flex min-w-[84] w-auto">
                  How to Use
                </div>
              </button>
            </div>
            <div className="w-[1133px] flex flex-row items-start justify-center py-0 px-5 box-border max-w-full h-auto mq800:mt-8">
              <button className="cursor-pointer pt-[13px] px-[38px] pb-3 bg-gray-1400 w-[197px] rounded-xl box-border overflow-hidden flex flex-row items-start justify-start whitespace-nowrap h-auto z-[1] hover:bg-darkslategray-200 mq800:w-[130px] mq800:text-[7px] mq800:items-center mq800:justify-center">
                <div className="relative text-xl leading-[24px] font-manrope text-gainsboro-300 text-center flex min-w-[114] w-auto">
                  Explore Now
                </div>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FrameComponent;
