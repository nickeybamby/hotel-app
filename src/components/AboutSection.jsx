import "./aboutSection.css";
import Bar from "../images/Bar.png";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const variants = {
  initial: {
    y: 100,
    opacity: 0,
  },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 1.2,
      staggerChildren: 0.1,
    },
  },
};

const AboutSection = () => {
  return (
    <motion.div
      variants={variants}
      initial="initial"
      whileInView="animate"
      className="main__wrapper"
    >
      <motion.div className="container about__wrapper">
        <motion.div variants={variants} className="about__wrapper-left">
          <motion.h4>About Us</motion.h4>
          <motion.h2>A Luxury Hotel & Spa</motion.h2>
          <motion.p>
            Nestled in the heart of Water Resources, Delta State, [Hotel Name]
            offers a unique blend of comfort, luxury, and Nigerian hospitality.
            Our story began with a vision to create a sanctuary where guests can
            experience the warmth of home combined with the touch of luxury.
          </motion.p>
          <Link to="/about" className="btn__outline">
            Read More
          </Link>
        </motion.div>
        <motion.div variants={variants} className="about__wrapper-right">
          <motion.div variants={variants} className="wrapper-image">
            <img src={Bar} alt="wine bar and candles" />
          </motion.div>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default AboutSection;
