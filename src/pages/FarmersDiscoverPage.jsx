import Content from "../components/Content";
import Footer from "../components/Footer";
import FarmerDiscoverPageNavbar from "../components/FarmerDiscoverPageNavbar";

const FarmersDiscoverPage = () => {
  return (
    <div className="w-full relative shadow-[0px_3px_6px_rgba(18,_15,_40,_0.12)] bg-background-default-default overflow-hidden flex flex-col items-center justify-center pt-3 px-0 box-border gap-8 leading-[normal] tracking-[normal] h-auto ">
      <FarmerDiscoverPageNavbar />
      <Content />
      <Footer/>
    </div>
  );
};

export default FarmersDiscoverPage;
