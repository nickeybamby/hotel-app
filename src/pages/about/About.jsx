import Header from "../../components/Header";
import ContactSection from "../../components/ContactSection";
import HeaderImage from "../../images/gallery/img__about.png";
import "./about.css";
import Bar from "../../images/Bar.png";
import HotelGroup from "../../images/gallery/img__contact.png";
import { motion } from "framer-motion";

const variants = {
  // initial: {
  //   y: 50,
  //   opacity: 0,
  // },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      staggerChildren: 0.1,
    },
  },
};

const About = () => {
  return (
    <>
      <Header title="Discover Our Journey" image={HeaderImage}>
        Welcome! Discover our story, from inception to excellence.
      </Header>

      {/* copied just the jsx codes from about section and commented the read more out  */}
      <motion.div
        variants={variants}
        initial="initial"
        whileInView="animate"
        className="main__wrapper"
      >
        <motion.div className="container about__wrapper">
          <motion.div variants={variants} className="about__wrapper-left">
            <motion.h4>About Us</motion.h4>
            <motion.h2>Hotel De'Zani</motion.h2>
            <motion.p>
              Nestled in the heart of Water Resources, Delta State, Hotel De'Zani
              offers a unique blend of comfort, luxury, and Nigerian
              hospitality. Our story began with a vision to create a sanctuary
              where guests can experience the warmth of home combined with the
              touch of luxury.
            </motion.p>
            {/* <Link to="/about" className="btn__outline">
              Read More
            </Link> */}
          </motion.div>
          <motion.div variants={variants} className="about__wrapper-right">
            <motion.div variants={variants} className="about__wrapper-image">
              <img src={Bar} alt="wine bar and candles" />
            </motion.div>
          </motion.div>
        </motion.div>
      </motion.div>

      <div className="about__main-wrapper">
        <div className="container about__article-wrapper">
          <div className="about__article-text">
            <p>
              Our mission is to inspire our guests and to offer the very highest
              level of service in every respect.
            </p>
          </div>
          <div className="a__article-wrapper">
            <div className="a__wrapper-left">
              <div className="a__left-img">
                <img src={HotelGroup} alt="" />
              </div>
            </div>
            <div className="a__wrapper-right">
              <p>
                In our quest to become among the leading hotels in the heart of
                Warri, Delta State, we strive to optimize the services we
                provide. We expect nothing but the very best from the products
                and services provided by our suppliers. We attach great
                importance to sharing both responsibility and recognition in an
                atmosphere characterized by team work and inspiration. As an
                expert in our field, we endeavor to bring out the very best in
                our staff by offering them efficient training programs and
                meaningful career opportunities. We encourage individuality and
                personal initiative among our employees.
              </p>
            </div>
          </div>
        </div>
      </div>

      <section>
        <ContactSection />
      </section>
    </>
  );
};

export default About;
