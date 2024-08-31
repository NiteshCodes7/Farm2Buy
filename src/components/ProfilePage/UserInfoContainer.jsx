const UserInfoContainer = () => {
  return (
    <div
      className='w-full flex flex-row items-start justify-center py-0 px-5 box-border max-w-full text-left text-14xl text-gray-2400 font-lexend'
    >
      <div className="w-[810px] shadow-[0px_0px_2px_rgba(23,_26,_31,_0.12),_0px_0px_1px_rgba(23,_26,_31,_0.07)] rounded-lg bg-white border-whitesmoke-100 border-[1px] border-solid box-border flex flex-col items-start justify-start pt-9 pb-5 pl-[43px] pr-2.5 gap-[34px] max-w-full mq1000:pl-[21px] mq1000:pt-[23px] mq1000:pb-5 mq1000:box-border mq1000:gap-[17px] mq450:pt-5 mq450:box-border mq450:border-none">
        <div className="w-[704px] flex flex-row items-start justify-center py-0 px-5 box-border max-w-full">
          <div className="flex flex-col items-end justify-start gap-[25px]">
            <div className="flex flex-row items-start justify-end py-0 px-2.5">
              <img
                className="h-[155px] w-[155px] relative rounded-59xl overflow-hidden shrink-0 object-cover"
                loading="lazy"
                alt=""
                src="/avatar-1@2x.png"
              />
            </div>
            <div className="flex flex-col items-start justify-start gap-2">
              <h2 className="m-0 relative text-inherit leading-[46px] font-bold font-[inherit] mq1000:text-7xl mq1000:leading-[37px] mq450:text-xl mq450:leading-[28px]">
                John Smith
              </h2>
              <div className="flex flex-row items-start justify-start py-0 pl-[75px] pr-[71px] text-mid text-gray-600 font-manrope">
                <div className="relative leading-[26px] inline-block min-w-[46px]">
                  Buyer
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="self-stretch flex flex-row items-start justify-between max-w-full gap-5 text-base text-gray-600 font-manrope mq750:flex-wrap mq750:justify-center">
          <div className="h-[346px] w-[204px] flex flex-col items-start justify-start gap-[14.3px] min-w-[204px] mq750:flex-1">
            <div className="flex flex-row items-start justify-start pt-0 px-0 pb-[10.7px] text-mid">
              <div className="relative leading-[25px]">
                <p className="m-0">Email</p>
                <p className="m-0">john.smith@example.com</p>
              </div>
            </div>
            <div className="self-stretch flex-1 flex flex-col items-start justify-start gap-2.5">
              <div className="flex flex-row items-start justify-start py-0 px-px">
                <div className="relative leading-[26px] inline-block min-w-[114px]">
                  Government ID:
                </div>
              </div>
              <img
                className="self-stretch flex-1 relative max-w-full overflow-hidden max-h-full object-cover"
                loading="lazy"
                alt=""
                src="/aadhaarcard7579588-1280-1@2x.png"
              />
            </div>
            <div className="flex flex-row items-start justify-start py-0 px-px">
              <div className="flex flex-col items-start justify-start gap-2">
                <div className="relative leading-[26px] inline-block min-w-[128px]">
                  Digital Signature:
                </div>
                <div className="flex flex-row items-start justify-start py-0 pl-3.5 pr-[15px]">
                  <img
                    className="h-[49px] w-[99px] relative object-cover"
                    loading="lazy"
                    alt=""
                    src="/digital-signature-mhra-remote-working-1@2x.png"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="w-[403px] flex flex-col items-start justify-start pt-0.5 px-0 pb-0 box-border min-w-[403px] max-w-full text-mid mq750:flex-1 mq750:min-w-full mq450:mt-[40px]">
            <div className="self-stretch flex flex-col items-end justify-start gap-40 mq450:gap-20">
              <div className="self-stretch flex flex-row items-start justify-between gap-5 mq450:flex-wrap">
                <div className="w-[117px] flex flex-col items-start justify-start gap-[31px]">
                  <div className="relative leading-[21px]">
                    <p className="m-0">Phone Number</p>
                    <p className="m-0">+1234567890</p>
                  </div>
                  <div className="self-stretch flex flex-row items-start justify-start py-0 pl-[3px] pr-0.5 text-base">
                    <div className="flex-1 flex flex-col items-start justify-start gap-[7px]">
                      <div className="relative leading-[26px] inline-block min-w-[66px]">
                        Address:
                      </div>
                      <div className="relative leading-[26px] text-black">
                        <p className="m-0">gsjddkfdjkll;dk</p>
                        <p className="m-0">ksnfkkv,</p>
                        <p className="m-0">kkdllsdnkfkvl</p>
                        <p className="m-0">hdjj</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col items-start justify-start pt-0.5 px-0 pb-0">
                  <div className="relative leading-[21px]">
                    <p className="m-0">Pan No. :</p>
                    <p className="m-0">WXU34567890</p>
                  </div>
                </div>
              </div>
              <div className="flex flex-row items-start justify-end py-0 px-[34px]">
                <div className="flex flex-row items-start justify-start gap-[13px]">
                  <button className="cursor-pointer [border:none] py-[11.5px] px-[33px] bg-gray-1200 rounded-lg overflow-hidden flex flex-row items-start justify-start hover:bg-darkslategray-400">
                    <a className="[text-decoration:none] relative text-base leading-[26px] font-manrope text-white text-left inline-block min-w-[29px]">
                      Edit
                    </a>
                  </button>
                  <button className="cursor-pointer [border:none] pt-3 px-[30px] pb-[11px] bg-forestgreen-200 rounded-lg overflow-hidden flex flex-row items-start justify-start hover:bg-forestgreen-100">
                    <div className="relative text-base leading-[26px] font-manrope text-white text-left inline-block min-w-[36px]">
                      Save
                    </div>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserInfoContainer;
