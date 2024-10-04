import Header from "../../components/Header";
import ScrollableNav from "./ScrollableNav";
import "./food.css";
import Food from "./Food";
import HeaderImage from "../../images/foodGallery/ImgHdr.png";
// import FoodMenu from "../../images/foodGallery/foodMenu-bg.png";

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
      <ScrollableNav />
      <section id="proteins">
        <div className="container">
          <div className="food__menu">
            <div className="food__menu-title"> Proteins </div>
            {proteinData.map(({ id, image, name }) => {
              return <Food key={id} image={image} name={name} />;
            })}
          </div>
        </div>
      </section>{" "}
      <br />
      <div className="foodMenu__nav">
        {/* Scrollable nav container */}
        <div className="scroll-container ">
          <button
            className="foodMenu__btn"
            onClick={() => document.getElementById("proteins").scrollIntoView()}
          >
            Proteins
          </button>
          <button
            className="foodMenu__btn"
            onClick={() => document.getElementById("swallows").scrollIntoView()}
          >
            Swallows
          </button>
          <button
            className="foodMenu__btn"
            onClick={() => document.getElementById("chinese").scrollIntoView()}
          >
            Chinese Dish{" "}
          </button>
          <button
            className="foodMenu__btn"
            onClick={() => document.getElementById("salad").scrollIntoView()}
          >
            Salad{" "}
          </button>
          <button
            className="foodMenu__btn"
            onClick={() => document.getElementById("bbq").scrollIntoView()}
          >
            BBQ{" "}
          </button>
          <button
            className="foodMenu__btn"
            onClick={() => document.getElementById("soup").scrollIntoView()}
          >
            Soup{" "}
          </button>
          <button
            className="foodMenu__btn"
            onClick={() => document.getElementById("side").scrollIntoView()}
          >
            Side Dish{" "}
          </button>
          <button
            className="foodMenu__btn"
            onClick={() =>
              document.getElementById("breakfast").scrollIntoView()
            }
          >
            English Breakfast{" "}
          </button>
          <button
            className="foodMenu__btn"
            onClick={() => document.getElementById("spirit").scrollIntoView()}
          >
            Spirit & Wine{" "}
          </button>
          <button
            className="foodMenu__btn"
            onClick={() => document.getElementById("beer").scrollIntoView()}
          >
            Beer{" "}
          </button>
          <button
            className="foodMenu__btn"
            onClick={() => document.getElementById("energy").scrollIntoView()}
          >
            Energy Drinks{" "}
          </button>
          <button
            className="foodMenu__btn"
            onClick={() => document.getElementById("soft").scrollIntoView()}
          >
            Soft Drinks{" "}
          </button>
        </div>
      </div>
      
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
          <div className="food__menu-title"> Chinese Dish </div>
          {chineseData.map(({ id, image, name }) => {
            return <Food key={id} image={image} name={name} />;
          })}
        </div>
      </section>
      <section id="salad">
        <div className="container food__menu">
          <div className="food__menu-title"> Salad </div>
          {saladData.map(({ id, image, name }) => {
            return <Food key={id} image={image} name={name} />;
          })}
        </div>
      </section>
      <section id="bbq">
        <div className="container food__menu">
          <div className="food__menu-title"> BBQ </div>
          {bbqData.map(({ id, image, name }) => {
            return <Food key={id} image={image} name={name} />;
          })}
        </div>
      </section>
      <section id="soup">
        <div className="container food__menu">
          <div className="food__menu-title"> Soups </div>
          {soupData.map(({ id, image, name }) => {
            return <Food key={id} image={image} name={name} />;
          })}
        </div>
      </section>
      <section id="side">
        <div className="container food__menu">
          <div className="food__menu-title"> Side Dish </div>
          {sideDishData.map(({ id, image, name }) => {
            return <Food key={id} image={image} name={name} />;
          })}
        </div>
      </section>
      <section id="breakfast">
        <div className="container food__menu">
          <div className="food__menu-title"> English Breakfast </div>
          {breakfastData.map(({ id, image, name }) => {
            return <Food key={id} image={image} name={name} />;
          })}
        </div>
      </section>
      <section id="spirit">
        <div className="container food__menu">
          <div className="food__menu-title"> Spirits & Wine </div>
          {spiritData.map(({ id, image, name }) => {
            return <Food key={id} image={image} name={name} />;
          })}
        </div>
      </section>
      <section id="beer">
        <div className="container food__menu">
          <div className="food__menu-title"> Beers </div>
          {beerData.map(({ id, image, name }) => {
            return <Food key={id} image={image} name={name} />;
          })}
        </div>
      </section>
      <section id="energy">
        <div className="container food__menu">
          <div className="food__menu-title"> Energy Drinks </div>
          {energyDrinkData.map(({ id, image, name }) => {
            return <Food key={id} image={image} name={name} />;
          })}
        </div>
      </section>
      <section id="soft">
        <div className="container food__menu">
          <div className="food__menu-title"> Soft Drinks </div>
          {softDrinkData.map(({ id, image, name }) => {
            return <Food key={id} image={image} name={name} />;
          })}
        </div>
      </section>
    </>
  );
};

export default FoodMenu;
