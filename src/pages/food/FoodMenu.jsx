import Header from "../../components/Header";
import ScrollableNav from "./ScrollableNav";
import "./food.css";
import Food from "./Food";
import HeaderImage from "../../images/foodGallery/ImgHdr.png";

import {
  proteinData,
  swallowData,
  chineseData,
  saladData,
  bbqData,
  soupData,
  sideDishData,
  breakfastData,
  spiritData,
  beerData,
  energyDrinkData,
  softDrinkData,
} from "./data";



const FoodMenu = () => {
  return (
    <>
      <Header title="" image={HeaderImage}></Header>
      <ScrollableNav/>
      <section id="proteins">
        <div className="container">
          <div className="food__menu">
            <div className="food__menu-title"> Proteins </div>
            {proteinData.map(({ id, image, name }) => {
              return <Food key={id} image={image} name={name} />;
            })}
          </div>
        </div>
      </section> <br />
      <section id="swallows">
        <div className="container food__menu">
          <div className="food__menu-title"> Swallow </div>
          {swallowData.map(({ id, image, name }) => {
            return <Food key={id} image={image} name={name} />;
          })}
        </div>
      </section>
      <section id="chinese">
        <div className="container food__menu">
          <div className="food__menu-title"> Proteins </div>
          {chineseData.map(({ id, image, name }) => {
            return <Food key={id} image={image} name={name} />;
          })}
        </div>
      </section>
      <section id="salad">
        <div className="container food__menu">
          <div className="food__menu-title"> Proteins </div>
          {saladData.map(({ id, image, name }) => {
            return <Food key={id} image={image} name={name} />;
          })}
        </div>
      </section>
      <section id="bbq">
        <div className="container food__menu">
          <div className="food__menu-title"> Proteins </div>
          {bbqData.map(({ id, image, name }) => {
            return <Food key={id} image={image} name={name} />;
          })}
        </div>
      </section>
      <section id="soup">
        <div className="container food__menu">
          <div className="food__menu-title"> Proteins </div>
          {soupData.map(({ id, image, name }) => {
            return <Food key={id} image={image} name={name} />;
          })}
        </div>
      </section>
      <section id="side">
        <div className="container food__menu">
          <div className="food__menu-title"> Proteins </div>
          {sideDishData.map(({ id, image, name }) => {
            return <Food key={id} image={image} name={name} />;
          })}
        </div>
      </section>
      <section id="breakfast">
        <div className="container food__menu">
          <div className="food__menu-title"> Proteins </div>
          {breakfastData.map(({ id, image, name }) => {
            return <Food key={id} image={image} name={name} />;
          })}
        </div>
      </section>
      <section id="spirit">
        <div className="container food__menu">
          <div className="food__menu-title"> Proteins </div>
          {spiritData.map(({ id, image, name }) => {
            return <Food key={id} image={image} name={name} />;
          })}
        </div>
      </section>
      <section id="beer">
        <div className="container food__menu">
          <div className="food__menu-title"> Proteins </div>
          {beerData.map(({ id, image, name }) => {
            return <Food key={id} image={image} name={name} />;
          })}
        </div>
      </section>
      <section id="energy">
        <div className="container food__menu">
          <div className="food__menu-title"> Proteins </div>
          {energyDrinkData.map(({ id, image, name }) => {
            return <Food key={id} image={image} name={name} />;
          })}
        </div>
      </section>
      <section id="soft">
        <div className="container food__menu">
          <div className="food__menu-title"> Proteins </div>
          {softDrinkData.map(({ id, image, name }) => {
            return <Food key={id} image={image} name={name} />;
          })}
        </div>
      </section>
    </>
  );
};

export default FoodMenu;
