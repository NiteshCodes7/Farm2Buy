import { useMemo } from "react";

const EmailSubjectLabels = ({
  propPadding,
  yourEmail,
  propColor,
  propMinWidth,
  johnsmithgmailcomPlaceholder,
  propWidth,
}) => {
  const emailSubjectLabelsStyle = useMemo(() => {
    return {
      padding: propPadding,
    };
  }, [propPadding]);

  const yourEmailStyle = useMemo(() => {
    return {
      color: propColor,
      minWidth: propMinWidth,
    };
  }, [propColor, propMinWidth]);

  const johnsmithgmailcomStyle = useMemo(() => {
    return {
      width: propWidth,
    };
  }, [propWidth]);

  return (
    <div
      className='self-stretch flex flex-col items-start justify-start gap-[15px] text-left text-base text-gray-500 font-manrope ${className}'
      style={emailSubjectLabelsStyle}
    >
      <div className="flex flex-row items-start justify-start py-0 px-px">
        <div
          className="relative leading-[26px] inline-block min-w-[75px]"
          style={yourEmailStyle}
        >
          {yourEmail}
        </div>
      </div>
          <div className="self-stretch rounded-lg bg-gray-400 border-gainsboro-700 border-[1px] border-solid flex flex-row items-start justify-start px-5 ">
            <input
              className="w-full [border:none] [outline:none] font-manrope text-base bg-[transparent] h-[26px] relative leading-[26px] text-dimgray-500 text-left inline-block py-5"
          placeholder={johnsmithgmailcomPlaceholder}
          type="text"
          style={johnsmithgmailcomStyle}
        />
      </div>
    </div>
  );
};


export default EmailSubjectLabels;
