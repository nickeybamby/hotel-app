import { useContext } from "react";

// context
import { RoomContext } from "./context/RoomContext";

// components
import Room from "./Room";
import "./roomSection.css";
import { motion } from "framer-motion";

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

const RoomSection = () => {
  const { rooms } = useContext(RoomContext);
  return (
    <motion.section variants={variants} className="roomSection">
      <div className="container room__container">
        <h3>Hotel De'Zani</h3>
        <h1>Rooms & Suites</h1>
        {/* grid */}
        <div className="room__section-slide">
          {rooms.map((room) => {
            return <Room room={room} key={room.id} />;
          })}
        </div>
      </div>
    </motion.section>
  );
};

export default RoomSection;
