import React, { useRef, useState } from "react";
import './food.css';

const ScrollableNav = () => {
  const scrollContainerRef = useRef(null);
  const [touchStartX, setTouchStartX] = useState(0); // Track where the touch starts
  const [touchEndX, setTouchEndX] = useState(0); // Track where the touch ends

  // Handle touch start
  const handleTouchStart = (e) => {
    setTouchStartX(e.targetTouches[0].clientX);
  };

  // Handle touch move
  const handleTouchMove = (e) => {
    setTouchEndX(e.targetTouches[0].clientX);
  };

  // Handle touch end to detect swipe direction
  const handleTouchEnd = () => {
    const swipeDistance = touchStartX - touchEndX;
    if (swipeDistance > 50) {
      // Swiped left (move right)
      scrollContainerRef.current.scrollBy({ left: 200, behavior: "smooth" });
    } else if (swipeDistance < -50) {
      // Swiped right (move left)
      scrollContainerRef.current.scrollBy({ left: -200, behavior: "smooth" });
    }
  };

  return (
    <div>
      {/* Scrollable nav container */}
      <div
        className="scroll-container"
        ref={scrollContainerRef}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
        style={{ overflowX: "", display: "flex", whiteSpace: "nowrap", gap: "20px"}}
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
