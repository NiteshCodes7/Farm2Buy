import UserInfoContainer from "../components/ProfilePage/UserInfoContainer";
import Footer from "../components/Footer";
import ProfileNavbar from "../components/ProfilePage/ProfileNavbar";

const Profile = () => {
  return (
    <div className="w-full relative shadow-[0px_3px_6px_rgba(18,_15,_40,_0.12)] bg-white overflow-hidden flex flex-col items-center justify-center gap-[239px] leading-[normal] tracking-[normal] mq1000:gap-[119px] mq450:gap-[60px]">
      <section className="self-stretch flex flex-col items-center justify-center gap-[70px] w-full mq450:gap-[30px]">
        <ProfileNavbar />
        <UserInfoContainer />
      </section>
      <Footer />
    </div>
  );
};

export default Profile;
