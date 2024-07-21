import AboutSection from '../../components/AboutSection';
import DeliciousFood from '../../components/DeliciousFood';
import HeroSlider from '../../components/HeroSlider';


import './home.css'

const Home = () => {
  return (
    <>
      <HeroSlider />
      <AboutSection />
      {/* <RoomSection /> */}
      <DeliciousFood />
    </>
  )
}

export default Home