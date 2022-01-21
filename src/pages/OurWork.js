import athlate from "../img/athlete-small.png";
import theracer from "../img/theracer-small.png";
import goodtimes from "../img/goodtimes-small.png";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { pageAnimation, fade, photoAnim, lineAnim, slider } from "../animation";
import { UseScrool } from "../components/useScroll";
import ScrollTop from "../components/ScroolTop";
const OurWork = () => {
  const [element, controls] = UseScrool();
  const [element2, controls2] = UseScrool();

  return (
    <Work
      style={{ background: "#fff" }}
      exit="exit"
      variants={pageAnimation}
      initial="hidden"
      animate="show"
    >
      <Frame1 variants={slider}></Frame1>
      <Frame2 variants={slider}></Frame2>
      <Frame3 variants={slider}></Frame3>
      <Frame4 variants={slider}></Frame4>
      <Movie>
        <motion.h2 variants={fade}>The Athlete</motion.h2>
        <motion.div variants={lineAnim} className="line"></motion.div>
        <Link to="/work/the-athlete">
          <Hide>
            <motion.img variants={photoAnim} src={athlate} alt="athlate" />
          </Hide>
        </Link>
      </Movie>
      <Movie ref={element} variants={fade} animate={controls} initial="hidden">
        <h2>The Racer</h2>
        <motion.div variants={lineAnim} className="line"></motion.div>
        <Link to="/work/the-racer">
          <img src={theracer} alt="theracer" />
        </Link>
      </Movie>
      <Movie
        ref={element2}
        variants={fade}
        animate={controls2}
        initial="hidden"
      >
        <h2>Good Times</h2>
        <motion.div variants={lineAnim} className="line"></motion.div>
        <Link to="/work/good-times">
          <img src={goodtimes} alt="goodtimes" />
        </Link>
      </Movie>
      <ScrollTop />
    </Work>
  );
};
const Work = styled(motion.div)`
  min-height: 100vh;
  overflow: hidden;
  padding: 5rem 4rem;
  h2 {
    padding: 1rem 0;
  }
`;
const Movie = styled(motion.div)`
  padding-bottom: 10rem;
  .line {
    height: 0.5rem;
    background: #23d997;
    margin-bottom: 3rem;
  }
  img {
    width: 100%;
    height: 70vh;
    object-fit: cover;
  }
`;
const Hide = styled.div`
  overflow: hidden;
`;

// Frame ANimation
const Frame1 = styled(motion.div)`
  position: fixed;
  left: 0;
  top: 10%;
  width: 100%;
  height: 100vh;
  background: #fffebf;
  z-index: 2;
`;
const Frame2 = styled(Frame1)`
  background: #ff8efb;
`;
const Frame3 = styled(Frame1)`
  background: #8ed2ff;
`;

const Frame4 = styled(Frame1)`
  background: #8effa0;
`;

export default OurWork;
