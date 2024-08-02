import React from "react";
import "./gallerySection.css";
import { Link } from "react-router-dom";
import {
  Gallery1,
  Gallery2,
  Gallery3,
  Gallery4,
  Gallery5,
  Gallery6,
} from "../data";

import { motion } from "framer-motion";

const variants = {
  initial: {
    x: 0,
    y: 100,
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    y: 0,
    transition: {
      duration: 1.2,
      staggerChildren: 0.1,
    },
  },
};

const GallerySection = () => {
  return (
    <motion.section
      variants={variants}
      initial="initial"
      whileInView="animate"
      className="gallery__section"
    >
      <div className="container gallery__container">
        <motion.h3>Exquisite View</motion.h3>
        <motion.h1>Gallery</motion.h1>
        <motion.div variants={variants} className=" gallery__wrapper">
          <motion.div variants={variants} className="gallery-image">
            <img src={Gallery1} alt="hotel lobby" />
          </motion.div>
          <motion.div variants={variants} className="gallery-image">
            <img src={Gallery2} alt="Reception" />
          </motion.div>
          <motion.div variants={variants} className="gallery-image">
            <img src={Gallery3} alt="hotel bathroom" />
          </motion.div>
          <motion.div variants={variants} className="gallery-image">
            <img src={Gallery4} alt="hotel bar" />
          </motion.div>
          <motion.div variants={variants} className="gallery-image">
            <img src={Gallery5} alt="Hotel corridor" />
          </motion.div>
          <motion.div variants={variants} className="gallery-image">
            <img src={Gallery6} alt="hotel top bar" />
          </motion.div>
        </motion.div>
        <Link to="./gallery" className="btn__outline gall__btn">
          View Gallery
        </Link>
      </div>
    </motion.section>
  );
};

export default GallerySection;
