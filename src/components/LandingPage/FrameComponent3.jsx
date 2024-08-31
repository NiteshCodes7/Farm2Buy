import CountdownTimer from "./CountdownTimer";

const FrameComponent3 = () => {
  return (
    <div className="self-stretch flex flex-row items-start justify-start gap-[22px] max-w-full w-auto h-auto text-left text-lgi text-gray-1000 font-manrope hover:flex mq1350:flex-wrap mq1350:h-full">
      <div className="w-[329px] flex flex-col items-center justify-center pt-2 pb-0 min-w-[329px] max-w-full h-auto gap-5 mq1350:flex-row mq1350:justify-center mq1350:items-center mq1350:w-[100%] mq1125:flex-row mq1125:justify-between mq1125:w-[100%] mq450:flex-col mq450:gap-5">
        <div className="self-stretch flex flex-col items-start justify-start gap-4 w-auto h-auto mq800:w-[85%] mq450:w-[100%] mq450:justify-center mq450:items-center mq1350:w-[100%] mq1350:justify-center mq1350:items-center">
          <div className="self-stretch flex flex-row items-start justify-start py-0 pl-1 pr-2.5 box-border w-auto h-auto">
            <div className="flex-1 flex flex-col items-start justify-start gap-[26px] h-auto">
              <div className="self-stretch flex flex-row items-start justify-start py-0 pl-px pr-0 box-border w-auto h-auto ">
                <div className="flex-1 shadow-[0px_0px_2px_rgba(23,_26,_31,_0.12),_0px_0px_1px_rgba(23,_26,_31,_0.07)] rounded-md bg-gainsboro-600 border-lightgray border-[1px] box-border flex flex-row items-start justify-start pt-[15px] px-5 pb-[13px] gap-[13px] h-auto mq450:flex-wrap">
                  <img
                    className="h-[30px] w-8 rounded object-cover"
                    loading="lazy"
                    alt=""
                    src="/image-28@2x.png"
                  />
                  <div className="flex flex-col items-start justify-start pt-1 w-auto">
                    <div className="relative leading-[30px] flex min-w-[109px] w-auto">
                      Empowering
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <CountdownTimer />
        </div>
        <div className="self-stretch shadow-[0px_0px_2px_rgba(23,_26,_31,_0.12),_0px_0px_1px_rgba(23,_26,_31,_0.07)] rounded-md bg-gainsboro-600 border-gray-100 border-[1px] box-border flex flex-col items-center justify-center pt-[38px] pb-[27px] pl-8 pr-[45px] gap-[91px] w-auto h-auto text-mid text-gray-1300 mq1125:gap-[70px] mq1125:pl-5 mq1125:w-[80%] mq1125:h-[410px] mq1350:w-[70%] mq800:flex-col mq800:w-[100%] mq800:gap-[40px] mq800:pl-4 mq800:pr-4 mq800:ml-[10px] mq800:items-center mq800:justify-center mq800:relative mq450:ml-0">
          <div className="w-48 flex flex-row items-start justify-end px-4 h-auto mq1125:w-[230px] mq800:w-[100%] mq800:flex-col mq800:justify-center mq800:items-center mq800:relative">
            <div className="flex-1 flex flex-col items-center justify-center gap-3 h-auto mq800:items-center">
              <div className="self-stretch flex flex-col items-center justify-center w-auto h-auto">
                <div className="flex flex-col items-center justify-center w-auto h-auto">
                  <div className="flex flex-col items-center justify-center py-0 pl-px pr-0 box-border w-auto h-auto">
                    <div className="relative leading-[26px] flex min-w-[100px] w-auto text-gray-1300">
                      Special Price
                    </div>
                  </div>
                  <div className="relative leading-[26px] text-dimgray-100 flex min-w-[100px] w-auto">
                    by Farm2Buy
                  </div>
                </div>
              </div>

              <div className="relative w-[150px] h-[150px] mq800:h-[150px] mq800:w-[150px]">
                <img
                  className="h-full w-full rounded-31xl object-cover"
                  loading="lazy"
                  alt=""
                  src="/image-19@2x.png"
                />
                <div className="absolute top-1/4 left-3/4 transform -translate-x-1/2 -translate-y-1/2 shadow-[0px_0px_2px_rgba(23,_26,_31,_0.12),_0px_0px_1px_rgba(23,_26,_31,_0.07)] rounded-22xl bg-gray-100 border-gray-100 border-[1px] box-border flex flex-row items-center justify-center pt-[15px] pb-4 pl-[22px] pr-[21px] h-auto gap-0 z-[1]">
                  <div className="relative leading-[23px] flex w-auto ">
                    <p className="m-0">20%</p>
                    <p className="m-0">OFF</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <button className="cursor-pointer border-dimgray-200 border-[1px] py-3 px-5 bg-gray-1200 self-stretch rounded-lg box-border flex flex-col items-center justify-center w-auto h-auto gap-0 hover:bg-gray-300 active:bg-darkslategray-200 active:border-dimgray-200 mq1125:ml-5 mq800:ml-0">
            <div className="relative text-mini leading-[24px] font-manrope text-gainsboro-400 text-left flex min-w-[81px] w-auto">
              Get Started
            </div>
          </button>
        </div>
      </div>

      <div className="container mx-auto p-4">
        <h2 className="text-center text-xl mb-6">People Connected with Us</h2>
        <div className="grid gap-8 grid-cols-1 mq450:grid-cols-2 mq800:grid-cols-2 mq1250:grid-cols-3 mq1600:grid-cols-3">
          <div className="relative cursor-pointer hover:brightness-50">
            <img
              className="w-full h-auto rounded-xl object-cover"
              loading="lazy"
              alt="Farmer John"
              src="/image-24@2x.png"
            />
            <h2 className="absolute bottom-2 left-9 text-md font-semibold text-gray-700 mq450:text-[10px]">
              Farmer John
            </h2>
          </div>
          <div className="relative cursor-pointer hover:brightness-50">
            <img
              className="w-full h-auto rounded-xl object-cover"
              loading="lazy"
              alt="Sarah Green"
              src="/avatar-3@2x.png"
            />
            <h2 className="absolute bottom-2 left-9 text-md font-semibold text-gray-700 mq450:text-[10px]">
              Sarah Green
            </h2>
          </div>
          <div className="relative cursor-pointer hover:brightness-50">
            <img
              className="w-full h-auto rounded-xl object-cover"
              loading="lazy"
              alt="Farmer John"
              src="/image-24@2x.png"
            />
            <h2 className="absolute bottom-2 left-9 text-md font-semibold text-gray-700 mq450:text-[10px]">
              Farmer John
            </h2>
          </div>
          <div className="relative cursor-pointer hover:brightness-50">
            <img
              className="w-full h-auto rounded-xl object-cover"
              loading="lazy"
              alt="Sarah Green"
              src="/avatar-3@2x.png"
            />
            <h2 className="absolute bottom-2 left-9 text-md font-semibold text-gray-700 mq450:text-[10px]">
              Sarah Green
            </h2>
          </div>
          <div className="relative cursor-pointer hover:brightness-50">
            <img
              className="w-full h-auto rounded-xl object-cover"
              loading="lazy"
              alt="Sarah Green"
              src="/avatar-3@2x.png"
            />
            <h2 className="absolute bottom-2 left-9 text-md font-semibold text-gray-700 mq450:text-[10px]">
              Sarah Green
            </h2>
          </div>
          <div className="relative cursor-pointer hover:brightness-50">
            <img
              className="w-full h-auto rounded-xl object-cover"
              loading="lazy"
              alt="Sarah Green"
              src="/avatar-3@2x.png"
            />
            <h2 className="absolute bottom-2 left-9 text-md font-semibold text-gray-700 mq450:text-[10px]">
              Sarah Green
            </h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FrameComponent3;
