// rooms images
import Room1Img from './images/rooms/1.png'
import Room1ImgLg from './images/rooms/1-lg.png'
import Room2Img from './images/rooms/2.png'
import Room2ImgLg from './images/rooms/2-lg.png'
import Room3Img from './images/rooms/3.png'
import Room3ImgLg from './images/rooms/3-lg.png'
import Room4Img from './images/rooms/4.png'
import Room4ImgLg from './images/rooms/4-lg.png'

// import icons
import {
    FaWifi,
    FaCoffee,
    FaParking,
    FaCocktail,
    FaStopwatch,
} from 'react-icons/fa';

import { SiOpenaigym } from "react-icons/si";

// hotel gallery
import Gallery1 from './images/gallery/gallery1.png'
import Gallery2 from './images/gallery/gallery2.png'
import Gallery3 from './images/gallery/gallery3.png'
import Gallery4 from './images/gallery/gallery4.png'
import Gallery5 from './images/gallery/gallery5.png'
import Gallery6 from './images/gallery/gallery6.png'






export
    {
        Gallery1,
        Gallery2,
        Gallery3,
        Gallery4,
        Gallery5,
        Gallery6,
    }


export const roomData = [
    {
        id: 1,
        name: 'Superior Room',
        description: 'Our Deluxe Room offers a perfect blend of comfort and elegance. Featuring a plush king-sized bed, modern furnishings, and a spacious en-suite bathroom, this room is designed for relaxation. Enjoy amenities such as free Wi-Fi, a flat-screen TV, and a minibar. Large windows provide plenty of natural light and stunning views',
        facilities: [
            { name: 'Wifi', icon: <FaWifi /> },
            { name: 'Coffee', icon: <FaCoffee /> },
            { name: 'Parking', icon: <FaParking /> },
            { name: 'Cocktail', icon: <FaCocktail /> },
            { name: 'GYM', icon: <FaStopwatch /> },
        ],
        maxPerson: 2,
        price: 20000,
        image: Room1Img,
        imageLg: Room1ImgLg
    },
    {
        id: 2,
        name: 'Diamond Room',
        description: 'Our Deluxe Room offers a perfect blend of comfort and elegance. Featuring a plush king-sized bed, modern furnishings, and a spacious en-suite bathroom, this room is designed for relaxation. Enjoy amenities such as free Wi-Fi, a flat-screen TV, and a minibar. Large windows provide plenty of natural light and stunning views',
        facilities: [
            { name: 'Wifi', icon: <FaWifi /> },
            { name: 'Coffee', icon: <FaCoffee /> },
            { name: 'Parking', icon: <FaParking /> },
            { name: 'Cocktail', icon: <FaCocktail /> },
            { name: 'GYM', icon: <FaStopwatch /> },
        ],
        maxPerson: 2,
        price: 30000,
        image: Room2Img,
        imageLg: Room2ImgLg
    },
    {
        id: 3,
        name: 'Delux Room',
        description: 'Our Deluxe Room offers a perfect blend of comfort and elegance. Featuring a plush king-sized bed, modern furnishings, and a spacious en-suite bathroom, this room is designed for relaxation. Enjoy amenities such as free Wi-Fi, a flat-screen TV, and a minibar. Large windows provide plenty of natural light and stunning views',
        facilities: [
            { name: 'Wifi', icon: <FaWifi /> },
            { name: 'Coffee', icon: <FaCoffee /> },
            { name: 'Parking', icon: <FaParking /> },
            { name: 'Cocktail', icon: <FaCocktail /> },
            { name: 'GYM', icon: <FaStopwatch /> },
        ],
        maxPerson: 2,
        price: 20000,
        image: Room3Img,
        imageLg: Room3ImgLg
    },
    {
        id: 4,
        name: 'Standard Room',
        description: 'Our Deluxe Room offers a perfect blend of comfort and elegance. Featuring a plush king-sized bed, modern furnishings, and a spacious en-suite bathroom, this room is designed for relaxation. Enjoy amenities such as free Wi-Fi, a flat-screen TV, and a minibar. Large windows provide plenty of natural light and stunning views',
        facilities: [
            { name: 'Wifi', icon: <FaWifi /> },
            { name: 'Coffee', icon: <FaCoffee /> },
            { name: 'Parking', icon: <FaParking /> },
            { name: 'Cocktail', icon: <FaCocktail /> },
            { name: 'GYM', icon: <FaStopwatch /> },
        ],
        maxPerson: 2,
        price: 15000,
        image: Room4Img,
        imageLg: Room4ImgLg
    },
];



export const links = [
    {
        name: "Home",
        path: '/'
    },
    {
        name: "About",
        path: '/about'
    },
    {
        name: "Rooms",
        path: '/rooms'
    },
    {
        name: "Services",
        path: '/services'
    },
    {
        name: "Gallery",
        path: '/gallery'
    },
    {
        name: "Contact",
        path: '/contact'
    },
]


