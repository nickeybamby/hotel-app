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

const GallerySection = () => {
  return (
    <section className="gallery__section">
      <div className="container gallery__container">
        <h3>Exquisite View</h3>
        <h1>Gallery</h1>
        <div className=" gallery__wrapper">
          <div className="gallery-image">
            <img src={Gallery1} alt="hotel lobby" />
          </div>
          <div className="gallery-image">
            <img src={Gallery2} alt="Reception" />
          </div>
          <div className="gallery-image">
            <img src={Gallery3} alt="hotel bathroom" />
          </div>
          <div className="gallery-image">
            <img src={Gallery4} alt="hotel bar" />
          </div>
          <div className="gallery-image">
            <img src={Gallery5} alt="Hotel corridor" />
          </div>
          <div className="gallery-image">
            <img src={Gallery6} alt="hotel top bar" />
          </div>
        </div>
        <Link to='./gallery' className="btn__outline gall__btn" >View Gallery</Link>
      </div>
    </section>
  );
};

export default GallerySection;
