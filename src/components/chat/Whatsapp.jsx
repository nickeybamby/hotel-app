import "./whatsapp.css"
import whatsappLogo from '../../images/whatsappChat.svg'

const Whatsapp = () => {
  return (
    <div className="whatsapp">
        <a href="https://wa.me/+2348110429842?text=Hello, How can I help you today?"
          target="_blank"
          rel="noreferrer noopener">
            <img src={whatsappLogo} alt="whatsapp chat" />
        </a>
    </div>
  )
}

export default Whatsapp