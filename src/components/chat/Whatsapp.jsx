import "./whatsapp.css";
import whatsappLogo from "../../images/whatsappChat.svg";

const Whatsapp = () => {
  return (
    <div className="whatsapp">
      <div className="whatsapp__container">
        <div className="whatsapp__text">
          <p>Need a reservation?</p>
          <strong>Chat with us</strong>
        </div>
        <div>
          <a
            href="https://wa.me/+2348110429842?text=Hello, I would like to make a reservation"
            target="_blank"
            rel="noreferrer noopener"
          >
            <img src={whatsappLogo} alt="whatsapp chat" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Whatsapp;
