import { easeIn, motion, useScroll, useTransform } from "framer-motion";
import FrameComponent from "../components/LandingPage/FrameComponent";
import FrameComponent1 from "../components/LandingPage/FrameComponent1";
import FrameComponent2 from "../components/LandingPage/FrameComponent2";
import FrameComponent3 from "../components/LandingPage/FrameComponent3";
import Footer from "../components/Footer";

const LandingPage = () => {
  const { scrollYProgress } = useScroll();

  const scale = useTransform(scrollYProgress, [0, 0.5], [1, 0.8]);

  return (
    <div className="w-full relative shadow-[0px_3px_6px_rgba(18,_15,_40,_0.12)] bg-background-default-default overflow-hidden flex flex-col items-start justify-start pt-[0.9px] box-border h-auto">
      <main className="flex flex-col items-start justify-start w-full gap-0">
        <motion.div
          className="w-full"
          style={{ scale }} // Apply the scroll-based scaling effect
        >
          <FrameComponent />
        </motion.div>

        <motion.section className="w-full shadow-[0px_0px_2px_rgba(23,_26,_31,_0.12),_0px_0px_1px_rgba(23,_26,_31,_0.07)] bg-background-default-default border border-background-default-default box-border flex flex-col items-start justify-start gap-[52px] p-[131px_69px_231px_69px] mq450:p-[60px_20px] mq800:p-[80px_34px] mq1350:pb-[97px]">
          <motion.div
            initial={{ opacity: 0.7, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: easeIn }}
            viewport={{ once: true, amount: 0.2 }}
          >
            <FrameComponent1 />
          </motion.div>

          <motion.div
            className="w-full"
            initial={{ opacity: 0.7, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: easeIn }}
            viewport={{ once: true, amount: 0.2 }}
          >
            <FrameComponent2 />
          </motion.div>

          <motion.div
            className="w-full"
            initial={{ opacity: 0.7, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: easeIn }}
            viewport={{ once: true, amount: 0.2 }}
          >
            <FrameComponent3 />
          </motion.div>
        </motion.section>
      </main>
      <motion.div
        className="w-full"
        initial={{ opacity: 0.7, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: easeIn }}
        viewport={{ once: true, amount: 0.2 }}
      >
        <Footer />
      </motion.div>
    </div>
  );
};

export default LandingPage;
