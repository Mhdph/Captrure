import AboutSection from "../components/AboutSection";
import ServicesSection from "../components/SevicesSection";
import FaqSection from "../components/FaqSection";
import { motion } from "framer-motion";
import { pageAnimation } from "../animation";
import ScrollTop from "../components/ScroolTop";
const AboutUs = () => {
  return (
    <motion.div
      exit="exit"
      variants={pageAnimation}
      initial="hidden"
      animate="show"
    >
      <AboutSection />
      <ServicesSection />
      <FaqSection />
      <ScrollTop />
    </motion.div>
  );
};

export default AboutUs;
