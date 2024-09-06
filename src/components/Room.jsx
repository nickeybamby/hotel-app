import "./room.css";
// Link
import { Link } from "react-router-dom";

// icons
import { BsPeople } from "react-icons/bs";

import { motion } from "framer-motion";

// import icons
import {
  FaWifi,
  FaCoffee,
  FaParking,
  FaCocktail,
  FaStopwatch,
} from "react-icons/fa";

import { IoLogoNoSmoking } from "react-icons/io";

const variants = {
  initial: {
    y: 200,
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

const Room = ({ room }) => {
  // destructure room
  const { id, name, image, maxPerson, description, facilities, price } = room;
  return (
    <motion.div variants={variants} className="room__dest group">
      {/* img */}
      <div className="room__dest-img">
        <img className="rm__img" src={image} alt="" />
      </div>
      {/* details */}
      <div className="room__details">
        <div className="room__cap">
          <BsPeople className="icon__people" />
          <div>max 2 people</div>
        </div>
      </div>
      {/* name  & description */}
      <div className="room__text">
        <Link to={`/room/${id}`}>
          <h3 className="room__h3">{name}</h3>
        </Link>
        {/* <p className="room__text-desc">{description.slice(0, 60)}</p> */}

        <p> { price } </p> <br />
      </div>
      {/* button */}

      <Link to={`/room/${id}`} className="room-btn">
        View Room
      </Link>
    </motion.div>
  );
};

export default Room;
