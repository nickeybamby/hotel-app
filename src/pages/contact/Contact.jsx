import Header from "../../components/Header";
import HeaderImage from "../../images/gallery/img__contact.png";
import { MdEmail } from "react-icons/md";
import { BsMessenger } from "react-icons/bs";
import { IoLogoWhatsapp } from "react-icons/io";

import "./contact.css";
import ContactSection from "../../components/ContactSection";
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

const Contact = () => {
  return (
    <>
      <Header title="Get In Touch" image={HeaderImage}>
        Feel free to reach out! We’re here to assist you.
      </Header>

      <motion.div
        className="contact__wrapper container"
        variants={variants}
        initial="initial"
        whileInView="animate"
      >
        <motion.a
          href="mailto:hoteldiezani@gmail.com"
          target="_blank"
          rel="noreferrer noopener"
        >
          <MdEmail />
        </motion.a>
        <motion.a
          href="https://m.me/clinicraftstudios"
          target="_blank"
          rel="noreferrer noopener"
        >
          <BsMessenger />
        </motion.a>
        <motion.a
          href="https://wa.me/+23480110429842"
          target="_blank"
          rel="noreferrer noopener"
        >
          <IoLogoWhatsapp />
        </motion.a>
      </motion.div>
      <ContactSection />
    </>
  );
};

export default Contact;
