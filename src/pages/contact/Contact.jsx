import Header from "../../components/Header";
import HeaderImage from "../../images/gallery/img__contact.png";
import { BsMessenger } from "react-icons/bs";
import { IoLogoWhatsapp } from "react-icons";

import "./contact.css";
import ContactSection from "../../components/ContactSection";

const Contact = () => {
  return(
  <>
    <Header title="Get In Touch" image={HeaderImage}>
    Feel free to reach out! We’re here to assist you.
    </Header>
  </>
  )
};

export default Contact;
