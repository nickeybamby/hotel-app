import { Link } from "react-router-dom";
import "./footer.css";
import Logo from "../images/logoWhite.svg";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container footer__container">
        <Link to="/" className="logo">
          <img src={Logo} alt="footer Logo" />
        </Link>
        <div className="footer__text">
          <p>&copy; 2024 Luxury Hotel & Spa. All rights reserved. | Powered by <a href="https://clinicraftstudios.agency" target="blank">CliniCraft Studios</a></p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
