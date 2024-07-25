import { useContext } from "react";

// context
import { RoomContext } from "./context/RoomContext";

// components
import Room from "./Room";
import "./roomSection.css";

const RoomSection = () => {
  const { rooms } = useContext(RoomContext);
  return (
    <section className="roomSection">
      <div className="container room__container">
        <h3>Luxury Hotel & Spa</h3>
        <h1>Rooms & Suites</h1>
        {/* grid */}
        <div className="room__section-slide">
            {rooms.map((room) => {
                return <Room room={room} key={room.id} />;
            })}
        </div>
      </div>
    </section>
  );
};

export default RoomSection;
