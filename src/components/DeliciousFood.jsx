import { Link } from 'react-router-dom';
import Meals from '../images/Meals.png'
import "./aboutSection.css";

const DeliciousFood = () => {
  return (
    <div className="main__wrapper">
      <div className="container about__wrapper">
        <div className="about__wrapper-left">
          <h4>Delicious Food</h4>
          <h2>We Serve Fresh
          & Delicious Meals</h2>
          <p>
          At [Hotel Name], we believe that great hospitality starts with great food. Our on-site restaurant offers a diverse menu featuring fresh, locally sourced ingredients, ensuring every meal is a delightful experience. From hearty breakfasts to gourmet dinners, our culinary team crafts dishes that cater to all tastes and dietary preferences.


          </p>
          <Link to="/services" className="btn__outline">
            Read More
          </Link>
        </div>
        <div className="about__wrapper-right">
          <div className="wrapper-image">
            <img src={Meals} alt="delicious cuisine" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default DeliciousFood;
