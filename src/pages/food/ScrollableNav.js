import './food.css';

const ScrollableNav = () => {

  return (
    <div className="foodMenu__nav">
      {/* Scrollable nav container */}
      <div
        className="scroll-container "
      
      >
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
          onClick={() => document.getElementById("breakfast").scrollIntoView()}
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
  );
};

export default ScrollableNav;
