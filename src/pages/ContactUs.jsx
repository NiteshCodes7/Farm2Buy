import EmailSubjectLabels from "../components/ContactPage/EmailSubjectLabels";
import FrameComponent6 from "../components/ContactPage/FrameComponent6";
import Footer from "../components/Footer";
import ContactNavbar from "../components/ContactPage/ContactNavbar";
import { useState } from "react";

const ContactUs = () => {
  const [selectedRole, setSelectedRole] = useState("");

  return (
    <div className="self-stretch w-full h-full relative shadow-[0px_3px_6px_rgba(18,_15,_40,_0.12)] bg-white overflow-hidden flex flex-col items-center justify-start pt-[30.8px] px-0 box-border gap-[40.2px] leading-[normal] mq1050:h-auto">
      <ContactNavbar />
      <section className="self-stretch flex flex-row items-start justify-center pt-0 pb-[21.8px] pl-5 pr-[21px] box-border max-w-full shrink-0 text-left text-[41px] text-black font-lexend">
        <div className="w-[813px] flex flex-col items-start justify-start gap-[19px] max-w-full">
          <div className="self-stretch flex flex-row items-start justify-center py-0 pl-[77px] pr-5 mq450:pl-5 mq450:box-border">
            <h1 className="m-0 relative text-inherit leading-[58px] font-bold font-[inherit] mq450:text-[25px] mq450:leading-[35px] mq1050:text-[33px] mq1050:leading-[46px]">
              Contact Us
            </h1>
          </div>
          <b className="relative text-[21px] leading-[32px] text-darkslategray-1500 mq450:text-mid mq450:leading-[26px]">
            Get in touch with us. We're here to assist you with all your
            Farm2Buy needs.
          </b>
        </div>
      </section>
      <section className="self-stretch flex flex-row items-start justify-center pt-0 pb-[62.8px] pl-[50px] pr-5 box-border max-w-full shrink-0 text-left text-base text-gray-600 font-manrope lg:pl-[25px] lg:box-border mq750:pb-[27px] mq750:box-border mq1050:pb-[41px] mq1050:box-border">
        <div className="w-[1132px] flex flex-col items-start justify-start gap-3.5 max-w-full">
          <div className="flex flex-row items-start justify-start py-0 px-px">
            <label className="relative leading-[26px] inline-block min-w-[77px]">
              Your name
            </label>
          </div>
          <div className="self-stretch flex flex-row items-start justify-start gap-[135px] max-w-full mq1050:flex-wrap">
              <form className="m-0 w-[451px] flex flex-col items-start justify-start gap-[37px] min-w-[451px] max-w-full mq750:min-w-full mq1050:flex-1">
              <div className="self-stretch rounded-lg bg-gray-400 border-gainsboro-700 border-[1px] border-solid flex flex-row items-start justify-start px-5 ">
                <input
                  className="w-full [border:none] [outline:none] font-manrope text-base bg-[transparent] h-[26px] relative leading-[26px] text-dimgray-500 text-left inline-block py-5"
                  placeholder="Full name"
                  type="text"
                />
              </div>
              <EmailSubjectLabels
                yourEmail="Your email"
                johnsmithgmailcomPlaceholder="johnsmith@gmail.com"
              />
              <div className="flex flex-col gap-2 w-full">
               <label className="relative text-base leading-[26px] font-manrope text-gray-800 text-left mt-3">
                  Subject
                </label>
                <div className="self-stretch rounded-lg bg-gray-400 border-gainsboro-700 border-[1px] border-solid flex flex-row items-start justify-start px-5 ">
                <input
                  className="w-full [border:none] [outline:none] font-manrope text-base bg-[transparent] h-[26px] relative leading-[26px] text-dimgray-500 text-left inline-block py-5"
                  placeholder="Full name"
                  type="text"
                />
              </div>
              </div>
              <div className="self-stretch flex flex-col items-start justify-start gap-[14.4px]">
                <div className="flex flex-row items-start justify-start py-0 px-px">
                  <label className="relative text-base leading-[26px] font-manrope text-gray-800 text-left inline-block min-w-[59px]">
                    You are:
                  </label>
                </div>
                <div className="w-[254px] flex flex-row items-start justify-start py-0 px-px box-border">
                  <div className="flex-1 flex flex-row items-start justify-between gap-5">
                    <div className="flex flex-row items-start justify-start gap-[20px]">
                      <label className="flex flex-row items-center gap-2">
                        <input
                          className="m-0 h-[25px] w-[25px]"
                          type="radio"
                          name="role"
                          value="Farmer"
                          checked={selectedRole === "Farmer"}
                          onChange={() => setSelectedRole("Farmer")}
                        />
                        <b className="text-mini leading-[24px] font-manrope text-black">
                          Farmer
                        </b>
                      </label>
                      <label className="flex flex-row items-center gap-2">
                        <input
                          className="m-0 h-[25px] w-[25px]"
                          type="radio"
                          name="role"
                          value="Buyer"
                          checked={selectedRole === "Buyer"}
                          onChange={() => setSelectedRole("Buyer")}
                        />
                        <b className="text-mini leading-[24px] font-manrope text-black">
                          Buyer
                        </b>
                      </label>
                    </div>
                  </div>
                </div>
                <label className="relative text-base leading-[26px] font-manrope text-gray-800 text-left mt-3">
                  Message
                </label>
              <div className="self-stretch rounded-lg bg-gray-400 border-gainsboro-700 border-[1px] border-solid flex flex-row items-start justify-start px-5 ">
                <input
                  className="w-full [border:none] [outline:none] font-manrope text-base bg-[transparent] h-[26px] relative leading-[26px] text-dimgray-500 text-left inline-block py-5"
                    placeholder="Enter your message here"
                    type="text"
                  />
                </div>
              </div>
              <div className="self-stretch flex flex-col items-start justify-start gap-3.5">
                <div className="flex flex-row items-start justify-start py-0 px-px">
                  <label className="relative text-base leading-[26px] font-manrope text-gray-800 text-left">
                    Any Relevant Attachment
                  </label>
                </div>
                <div className="self-stretch rounded-lg bg-gray-400 border-gainsboro-700 border-[1px] border-solid flex flex-row items-center justify-between pt-[21px] pb-5 pl-5 pr-[21px] h-full">
                  <input
                    className="w-full h-full [border:none] [outline:none] font-manrope text-mini bg-[transparent] relative leading-[24px] text-dimgray-700 text-left inline-block p-0 z-10"
                    type="file"
                    accept=".pdf, .jpg, .jpeg, .png"
                  />
                  <img
                    className="h-[25px] w-[25px] relative object-cover z-0"
                    alt=""
                    src="/link-1@2x.png"
                  />
                </div>
              </div>
              <button className="cursor-pointer [border:none] py-[15px] px-5 bg-gray-1200 self-stretch rounded-lg overflow-hidden flex flex-row items-start justify-center whitespace-nowrap hover:bg-darkslategray-400">
                <div className="relative text-mini leading-[24px] font-manrope text-gainsboro-300 text-left inline-block min-w-[102px]">
                  Send Message
                </div>
              </button>
            </form>
            <div className="flex-1 flex flex-col items-start justify-start pt-[41px] px-0 pb-0 box-border min-w-[355px] max-w-full mq450:min-w-full mq750:pt-[27px] mq750:box-border">
              <img
                className="self-stretch h-[651px] relative rounded max-w-full overflow-hidden shrink-0 object-cover"
                loading="lazy"
                alt=""
                src="/image-61@2x.png"
              />
            </div>
          </div>
        </div>
      </section>
      <FrameComponent6 />
      <Footer />
    </div>
  );
};

export default ContactUs;
