// rooms images
import Room1Img from "./images/rooms/1.png";
import Room1ImgLg from "./images/rooms/1-lg.png";
import Room2Img from "./images/rooms/2.png";
import Room2ImgLg from "./images/rooms/2-lg.png";
import Room3Img from "./images/rooms/3.png";
import Room3ImgLg from "./images/rooms/3-lg.png";
import Room4Img from "./images/rooms/4.png";
import Room4ImgLg from "./images/rooms/4-lg.png";

// import icons
import {
  FaWifi,
  FaCoffee,
  FaParking,
  FaCocktail,
  FaStopwatch,
} from "react-icons/fa";
import { BsPeople } from "react-icons/bs";
import { IoLogoNoSmoking } from "react-icons/io";

// hotel gallery
import Gallery1 from "./images/gallery/gallery1.png";
import Gallery2 from "./images/gallery/gallery2.png";
import Gallery3 from "./images/gallery/gallery3.png";
import Gallery4 from "./images/gallery/gallery4.png";
import Gallery5 from "./images/gallery/gallery5.png";
import Gallery6 from "./images/gallery/gallery6.png";

export { Gallery1, Gallery2, Gallery3, Gallery4, Gallery5, Gallery6 };

export const roomData = [
  {
    id: 1,
    name: "Queen Deluxe",
    description:
      "Our Queen Deluxe Room offers a perfect blend of luxury",
    facilities: [
      { name: "Wifi", icon: <FaWifi /> },
      { name: "Coffee", icon: <FaCoffee /> },
      { name: "Parking", icon: <FaParking /> },
      { name: "Cocktail", icon: <FaCocktail /> },
      { name: "Smoke", icon: <IoLogoNoSmoking /> },
    ],
    maxPerson: 2,
    price: 60000,
    image: Room1Img,
    imageLg: Room1ImgLg,
  },
  {
    id: 2,
    name: "Executive Room",
    description:
      "Our Deluxe Room offers a perfect blend of comfort and elegance. Featuring a plush king-sized bed, modern furnishings, and a spacious en-suite bathroom, this room is designed for relaxation. Enjoy amenities such as free Wi-Fi, a flat-screen TV, and a minibar. Large windows provide plenty of natural light and stunning views",
    facilities: [
      { name: "Wifi", icon: <FaWifi /> },
      { name: "Coffee", icon: <FaCoffee /> },
      { name: "Parking", icon: <FaParking /> },
      { name: "Cocktail", icon: <FaCocktail /> },
      { name: "Smoke", icon: <IoLogoNoSmoking /> },
    ],
    maxPerson: 2,
    price: 50000,
    image: Room2Img,
    imageLg: Room2ImgLg,
  },
  {
    id: 3,
    name: "Studio Room",
    description:
      "Our Deluxe Room offers a perfect blend of comfort and elegance. Featuring a plush king-sized bed, modern furnishings, and a spacious en-suite bathroom, this room is designed for relaxation. Enjoy amenities such as free Wi-Fi, a flat-screen TV, and a minibar. Large windows provide plenty of natural light and stunning views",
    facilities: [
      { name: "Wifi", icon: <FaWifi /> },
      { name: "Coffee", icon: <FaCoffee /> },
      { name: "Parking", icon: <FaParking /> },
      { name: "Cocktail", icon: <FaCocktail /> },
      { name: "Smoke", icon: <IoLogoNoSmoking /> },
    ],
    maxPerson: 2,
    price: 45000,
    image: Room3Img,
    imageLg: Room3ImgLg,
  },
  {
    id: 4,
    name: "Deluxe Room",
    description:
      "Our Deluxe Room offers a perfect blend of comfort and elegance. Featuring a plush king-sized bed, modern furnishings, and a spacious en-suite bathroom, this room is designed for relaxation. Enjoy amenities such as free Wi-Fi, a flat-screen TV, and a minibar. Large windows provide plenty of natural light and stunning views",
    facilities: [
      { name: "Wifi", icon: <FaWifi /> },
      { name: "Coffee", icon: <FaCoffee /> },
      { name: "Parking", icon: <FaParking /> },
      { name: "Cocktail", icon: <FaCocktail /> },
      { name: "Smoke", icon: <IoLogoNoSmoking /> },
    ],
    maxPerson: 2,
    price: 38000,
    image: Room4Img,
    imageLg: Room4ImgLg,
  },
];

// add more eroom images for this and name them accordinly
const Room1 = require("./images/rooms/1.png");
const Room2 = require("./images/rooms/2.png");
const Room3 = require("./images/rooms/3.png");
const Room4 = require("./images/rooms/4.png");
const Room5 = require("./images/rooms/5.png");
export const roomPage = [
  {
    id: 1,
    name: "Queen Deluxe",
    desc: "Our Deluxe Room offers a perfect blend of comfort and elegance.",
    facilities: [
      { name: "Wifi", icon: <FaWifi /> },
      { name: "Coffee", icon: <FaCoffee /> },
      { name: "Parking", icon: <FaParking /> },
      { name: "Cocktail", icon: <FaCocktail /> },
      { name: "Smoke", icon: <IoLogoNoSmoking /> },
    ],
    maxPerson: (
      <div className="room__cap">
        <BsPeople className="icon__people" />
        <div>Max 2 people</div>
      </div>
    ),
    price: 60000,
    image: Room1,
  },
  {
    id: 2,
    name: "Executive Room",
    desc: "Our Deluxe Room offers a perfect blend of comfort and elegance.",
    facilities: [
      { name: "Wifi", icon: <FaWifi /> },
      { name: "Coffee", icon: <FaCoffee /> },
      { name: "Parking", icon: <FaParking /> },
      { name: "Cocktail", icon: <FaCocktail /> },
      { name: "Smoke", icon: <IoLogoNoSmoking /> },
    ],
    maxPerson: (
      <div className="room__cap">
        <BsPeople className="icon__people" />
        <div>Max 2 people</div>
      </div>
    ),
    price: 50000,
    image: Room2,
  },
  {
    id: 3,
    name: "Studio Room",
    desc: "Our Deluxe Room offers a perfect blend of comfort and elegance.",
    facilities: [
      { name: "Wifi", icon: <FaWifi /> },
      { name: "Coffee", icon: <FaCoffee /> },
      { name: "Parking", icon: <FaParking /> },
      { name: "Cocktail", icon: <FaCocktail /> },
      { name: "Smoke", icon: <IoLogoNoSmoking /> },
    ],
    maxPerson: (
      <div className="room__cap">
        <BsPeople className="icon__people" />
        <div>Max 2 people</div>
      </div>
    ),
    price: 45000,
    image: Room3,
  },
  {
    id: 4,
    name: "Delux Room",
    desc: "Our Deluxe Room offers a perfect blend of comfort and elegance. ",
    facilities: [
      { name: "Wifi", icon: <FaWifi /> },
      { name: "Coffee", icon: <FaCoffee /> },
      { name: "Parking", icon: <FaParking /> },
      { name: "Cocktail", icon: <FaCocktail /> },
      { name: "Smoke", icon: <IoLogoNoSmoking /> },
    ],
    maxPerson: (
      <div className="room__cap">
        <BsPeople className="icon__people" />
        <div>Max 2 people</div>
      </div>
    ),
    price: 38000,
    image: Room4,
  },
  {
    id: 5,
    name: "Standard Room",
    desc: "Our Deluxe Room offers a perfect blend of comfort and elegance. ",
    facilities: [
      { name: "Wifi", icon: <FaWifi /> },
      { name: "Coffee", icon: <FaCoffee /> },
      { name: "Parking", icon: <FaParking /> },
      { name: "Cocktail", icon: <FaCocktail /> },
      { name: "Smoke", icon: <IoLogoNoSmoking /> },
    ],
    maxPerson: (
      <div className="room__cap">
        <BsPeople className="icon__people" />
        <div>Max 2 people</div>
      </div>
    ),
    price: 30000,
    image: Room5,
  },
  // {
  //   id: 6,
  //   name: "Standard Room",
  //   desc: "Our Deluxe Room offers a perfect blend of comfort and elegance. ",
  //   facilities: [
  //     { name: "Wifi", icon: <FaWifi /> },
  //     { name: "Coffee", icon: <FaCoffee /> },
  //     { name: "Parking", icon: <FaParking /> },
  //     { name: "Cocktail", icon: <FaCocktail /> },
  //     { name: "Smoke", icon: <IoLogoNoSmoking /> },
  //   ],
  //   maxPerson: (
  //     <div className="room__cap">
  //       <BsPeople className="icon__people" />
  //       <div>Max 2 people</div>
  //     </div>
  //   ),
  //   price: 20000,
  //   image: Room6,
  // },
  // {
  //   id: 7,
  //   name: "Standard Room",
  //   desc: "Our Deluxe Room offers a perfect blend of comfort and elegance. ",
  //   facilities: [
  //     { name: "Wifi", icon: <FaWifi /> },
  //     { name: "Coffee", icon: <FaCoffee /> },
  //     { name: "Parking", icon: <FaParking /> },
  //     { name: "Cocktail", icon: <FaCocktail /> },
  //     { name: "Smoke", icon: <IoLogoNoSmoking /> },
  //   ],
  //   maxPerson: (
  //     <div className="room__cap">
  //       <BsPeople className="icon__people" />
  //       <div>Max 2 people</div>
  //     </div>
  //   ),
  //   price: 13000,
  //   image: Room7,
  // },
  // {
  //   id: 8,
  //   name: "Standard Room",
  //   desc: "Our Deluxe Room offers a perfect blend of comfort and elegance. ",
  //   facilities: [
  //     { name: "Wifi", icon: <FaWifi /> },
  //     { name: "Coffee", icon: <FaCoffee /> },
  //     { name: "Parking", icon: <FaParking /> },
  //     { name: "Cocktail", icon: <FaCocktail /> },
  //     { name: "Smoke", icon: <IoLogoNoSmoking /> },
  //   ],
  //   maxPerson: (
  //     <div className="room__cap">
  //       <BsPeople className="icon__people" />
  //       <div>Max 2 people</div>
  //     </div>
  //   ),
  //   price: 12000,
  //   image: Room8,
  // },
  // {
  //   id: 9,
  //   name: "Standard Room",
  //   desc: "Our Deluxe Room offers a perfect blend of comfort and elegance. ",
  //   facilities: [
  //     { name: "Wifi", icon: <FaWifi /> },
  //     { name: "Coffee", icon: <FaCoffee /> },
  //     { name: "Parking", icon: <FaParking /> },
  //     { name: "Cocktail", icon: <FaCocktail /> },
  //     { name: "Smoke", icon: <IoLogoNoSmoking /> },
  //   ],
  //   maxPerson: (
  //     <div className="room__cap">
  //       <BsPeople className="icon__people" />
  //       <div>Max 2 people</div>
  //     </div>
  //   ),
  //   price: 15000,
  //   image: Room9,
  // },
  // {
  //   id: 10,
  //   name: "Standard Room",
  //   desc: "Our Deluxe Room offers a perfect blend of comfort and elegance. ",
  //   facilities: [
  //     { name: "Wifi", icon: <FaWifi /> },
  //     { name: "Coffee", icon: <FaCoffee /> },
  //     { name: "Parking", icon: <FaParking /> },
  //     { name: "Cocktail", icon: <FaCocktail /> },
  //     { name: "Smoke", icon: <IoLogoNoSmoking /> },
  //   ],
  //   maxPerson: (
  //     <div className="room__cap">
  //       <BsPeople className="icon__people" />
  //       <div>Max 2 people</div>
  //     </div>
  //   ),
  //   price: 15000,
  //   image: Room10,
  // },
  // {
  //   id: 11,
  //   name: "Standard Room",
  //   desc: "Our Deluxe Room offers a perfect blend of comfort and elegance. ",
  //   facilities: [
  //     { name: "Wifi", icon: <FaWifi /> },
  //     { name: "Coffee", icon: <FaCoffee /> },
  //     { name: "Parking", icon: <FaParking /> },
  //     { name: "Cocktail", icon: <FaCocktail /> },
  //     { name: "Smoke", icon: <IoLogoNoSmoking /> },
  //   ],
  //   maxPerson: (
  //     <div className="room__cap">
  //       <BsPeople className="icon__people" />
  //       <div>Max 2 people</div>
  //     </div>
  //   ),
  //   price: 15000,
  //   image: Room11,
  // },
  // {
  //   id: 12,
  //   name: "Standard Room",
  //   desc: "Our Deluxe Room offers a perfect blend of comfort and elegance. ",
  //   facilities: [
  //     { name: "Wifi", icon: <FaWifi /> },
  //     { name: "Coffee", icon: <FaCoffee /> },
  //     { name: "Parking", icon: <FaParking /> },
  //     { name: "Cocktail", icon: <FaCocktail /> },
  //     { name: "Smoke", icon: <IoLogoNoSmoking /> },
  //   ],
  //   maxPerson: (
  //     <div className="room__cap">
  //       <BsPeople className="icon__people" />
  //       <div>Max 2 people</div>
  //     </div>
  //   ),
  //   price: 15000,
  //   image: Room12,
  // },
];

export const links = [
  {
    name: "Home",
    path: "/",
  },
  {
    name: "About",
    path: "/about",
  },
  {
    name: "Rooms",
    path: "/rooms",
  },
  {
    name: "Services",
    path: "/services",
  },
  {
    name: "Gallery",
    path: "/gallery",
  },
  {
    name: "Contact",
    path: "/contact",
  },
];
