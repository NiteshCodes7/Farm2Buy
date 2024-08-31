import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer
      className='grid grid-cols-3 gap-10 shadow-[0px_0px_2px_rgba(23,_26,_31,_0.12),_0px_0px_1px_rgba(23,_26,_31,_0.07)] 
        bg-gainsboro-100 border-background-default-default box-border 
        pt-9 px-[117px] pb-8 w-full h-full 
        text-left text-9xl text-gray-1000 font-lexend mq450:px-[30px] mq450:pb-[40px]'
    >
      
      <div className="flex flex-col justify-start gap-1 text-mid text-darkslategray-1000 font-manrope">
        <h2 className="mq800:text-[20px] mq450:text-[15px]">Farm2Buy</h2>

        <div className="flex flex-col gap-3 text-gray-800">
          <a href="/" className="no-underline mq800:text-[12px]">Home</a>
          <a href="/" className="no-underline mq800:text-[12px]">Shop</a>
          <a href="/" className="no-underline mq800:text-[12px]">About</a>
          <a href="/" className="no-underline mq800:text-[12px]">Privacy Policy</a>
          <a href="/" className="no-underline mq800:text-[12px]">Terms and Condition</a>
        </div>

      </div>

      <div className="flex flex-col justify-start gap-1 text-mid text-darkslategray-1000 font-manrope">
        <h2 className="mq800:text-[20px] mq450:text-[15px]">Help</h2>

        <div className="flex flex-col gap-3 text-gray-800">
          <a href="/" className="no-underline mq800:text-[12px]">FAQs</a>
          <a href="/" className="no-underline mq800:text-[12px]">Contact</a>
          <a href="/" className="no-underline mq800:text-[12px]">Your farming partner for success</a>
          <a href="#" onClick={scrollToTop} className="no-underline mq800:text-[12px]">Return to Top</a>

        </div>
      </div>

      <div className="flex flex-col justify-start gap-1 text-mid font-manrope">
        <h2 className="font-extrabold text-[50px] mt-1 mb-0 mq800:text-[30px] mq450:text-[15px] mq450:mt-3 mq450:mb-3 font-manrope"><span className="text-darkolivegreen font-manrope">Farm</span>
            <span className="text-darkslategray-700">2</span>
            <span className="text-red-100">Buy</span>
        </h2>

        <div className="flex flex-col gap-3 text-gray-800">
          <h3 className="m-0 mq800:text-[15px] mq450:text-[10px]">Follow Us</h3>
          <div className="flex flex-row gap-5">
            <a href="/" className="no-underline text-gray-1200 text-[30px] mq800:text-[20px] mq450:text-[12px]"><FaFacebook /></a>
            <a href="/" className="no-underline text-gray-1200 text-[30px] mq800:text-[20px] mq450:text-[12px]"><FaInstagram /></a>
            <a href="/" className="no-underline text-gray-1200 text-[30px] mq800:text-[20px] mq450:text-[12px]"><FaTwitter /></a>
          </div>
          
          <a href="/" className="no-underline mq800:text-[12px] mq450:text-[11px]">Connecting farmers and buyers for sustainable agriculture.</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
