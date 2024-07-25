import HeroSlider from '../../components/HeroSlider';
import AboutSection from '../../components/AboutSection';
import RoomSection from '../../components/RoomSection';
import DeliciousFood from '../../components/DeliciousFood';
import GallerySection from '../../components/GallerySection';
import ContactSection from '../../components/ContactSection';


import './home.css'

const Home = () => {
  return (
    <>
      <HeroSlider />
      <AboutSection />
      <RoomSection />
      <DeliciousFood />
      <GallerySection />
      <ContactSection />
    </>
  )
}

export default Home