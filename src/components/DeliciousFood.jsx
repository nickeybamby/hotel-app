import { Link } from "react-router-dom";
import Meals from "../images/Meals.png";
import "./aboutSection.css";

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

const DeliciousFood = () => {
  return (
    <motion.div
      variants={variants}
      initial="initial"
      whileInView="animate"
      className="main__wrapper deliciousFood"
    >
      <div className="container about__wrapper">
        <motion.div variants={variants} className="about__wrapper-left">
          <h4>Delicious Food</h4>
          <h2>We Serve Fresh & Delicious Meals</h2>
          <p>
            At Hotel De'Zani, we believe that great hospitality starts with great
            food. Our on-site restaurant offers a diverse menu featuring fresh,
            locally sourced ingredients, ensuring every meal is a delightful
            experience. From hearty breakfasts to gourmet dinners, our culinary
            team crafts dishes that cater to all tastes and dietary preferences.
          </p>
          <Link to="/services" className="btn__outline">
            Read More
          </Link>
        </motion.div>
        <motion.div variants={variants} className="about__wrapper-right">
          <motion.div variants={variants} className="wrapper-image">
            <img src={Meals} alt="delicious cuisine" />
          </motion.div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default DeliciousFood;
