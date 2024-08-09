import Header from "../../components/Header";
import HeaderImage from "../../images/gallery/img__services.png";
import { motion } from "framer-motion";
import Meals from "../../images/Meals.png";
import Chef from "../../images/gallery/img__chef.png";
import "./services.css";

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

const Services = () => {
  return (
    <>
      <Header title="Unwind In Style." image={HeaderImage}>
        Discover personalized service tailored to your needs.
      </Header>

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
              At [Hotel Name], we believe that great hospitality starts with
              great food. Our on-site restaurant offers a diverse menu featuring
              fresh, locally sourced ingredients, ensuring every meal is a
              delightful experience. From hearty breakfasts to gourmet dinners,
              our culinary team crafts dishes that cater to all tastes and
              dietary preferences.
            </p>
          </motion.div>
          <motion.div variants={variants} className="about__wrapper-right">
            <motion.div variants={variants} className="wrapper-image">
              <img src={Meals} alt="delicious cuisine" />
            </motion.div>
          </motion.div>
        </div>
      </motion.div>

      <motion.div
        variants={variants}
        initial="initial"
        whileInView="animate"
        className="main-service__wrapper"
      >
        <div className="container service__wrapper">
          <motion.div variants={variants} className="service__wrapper-left">
            <motion.div variants={variants} className="service__wrapper-image">
              <img src={Chef} alt="delicious cuisine" />
            </motion.div>
          </motion.div>
          <motion.div variants={variants} className="service__wrapper-right">
            <h2>Meet Our Chef</h2>
            <p>
              At [Hotel Name], we believe that great hospitality starts with
              great food. Our on-site restaurant offers a diverse menu featuring
              fresh, locally sourced ingredients, ensuring every meal is a
              delightful experience. From hearty breakfasts to gourmet dinners,
              our culinary team crafts dishes that cater to all tastes and
              dietary preferences.
            </p>
          </motion.div>
        </div>
      </motion.div>

      <motion.div
        variants={variants}
        initial="initial"
        whileInView="animate"
        className="main__wrapper wrpnd"
      >
        <div className="container about__wrapper">
          <motion.div variants={variants} className="about__wrapper-left">
            {/* <h4>Delicious Food</h4> */}
            <h2>Hospitality & Spa</h2>
            <p>
              At [Hotel Name], we believe that great hospitality starts with
              great comfort. Our on-site spa sessions offer a relaxing package
              for our customers, ensuring
              every session is a delightful experience. From room services, to
              soft tissue spa sessions, our team crafts hospitable packages that cater to all
              tastes and preferences.
            </p>
          </motion.div>
          <motion.div variants={variants} className="about__wrapper-right">
            <motion.div variants={variants} className="wrapper-image">
              <img src={Meals} alt="delicious cuisine" />
            </motion.div>
          </motion.div>
        </div>
      </motion.div>
    </>
  );
};

export default Services;
