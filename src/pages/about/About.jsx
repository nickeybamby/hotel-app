import Header from "../../components/Header";
import HeaderImage from "../../images/gallery/img__about.png";
import "./about.css";

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

// variants = { variants };
// initial = "initial";
// whileInView = "animate";

const About = () => {
  return (
    <>
      <Header title="Discover Our Journey" image={HeaderImage}>
        Welcome! Discover our story, from inception to excellence.
      </Header>
    </>
  );
};

export default About;
