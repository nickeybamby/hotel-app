import './aboutSection.css'
import Bar from '../images/Bar.png'
import { Link } from 'react-router-dom'

const AboutSection = () => {
  return (
    <div className='main__wrapper'>
        <div className="container about__wrapper">
            <div className="about__wrapper-left">
                <h4>About Us</h4>
                <h2>A Luxury Hotel
                & Spa</h2>
                <p>Nestled in the heart of Water Resources, Delta State, [Hotel Name] offers a unique blend of comfort, luxury, and Nigerian hospitality. Our story began with a vision to create a sanctuary where guests can experience the warmth of home combined with the touch of luxury.</p>
                <Link to="/about" className="btn__outline">Read More</Link>
            </div>
            <div className="about__wrapper-right">
                <div className="wrapper-image">
                    <img src={Bar} alt="wine bar and candles" />
                </div>
            </div>
        </div>
    </div>
  )
}

export default AboutSection