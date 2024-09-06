import Header from "../../components/Header";
import HeaderImage from "../../images/gallery/img__rooms.png";
import RoomDetails from "../../components/RoomDetails";
import Card from "../../UI/Card";
import { roomPage } from "../../data";
import "./rooms.css";

// import icons
import {
  FaWifi,
  FaCoffee,
  FaParking,
  FaCocktail,
  FaStopwatch,
} from "react-icons/fa";

import { IoLogoNoSmoking } from "react-icons/io";

const Rooms = () => {
  return (
    <>
      <Header title="Where Dreams Meet Reality" image={HeaderImage}>
        Home Away from Home.
      </Header>
      <section className="hotelRooms">
        <div className="container rooms__container">
          {roomPage.map(({ id, image, name, maxPerson, price, facilities }) => {
            return <RoomDetails
              key={id}
              image={image}
              name={name}
              maxPerson={maxPerson}
              facilities={
                [
                  {icon: <FaWifi />},
                  {icon: <FaCoffee />},
                  {icon: <FaParking />},
                  // {icon: <FaCocktail />},
                  { icon: <IoLogoNoSmoking /> }
                ]
              }
              price={price}

            />
          })}
        </div>
      </section>
    </>
  );
};

export default Rooms;
