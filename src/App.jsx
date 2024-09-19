import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";

import Home from "./pages/home/Home";
import About from "./pages/about/About";
import Contact from "./pages/contact/Contact";
import Gallery from "./pages/gallery/Gallery";
import Rooms from "./pages/rooms/Rooms";
import Services from "./pages/services/Services";
import NotFound from "./pages/notFound/NotFound";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";
import Whatsapp from "./components/chat/Whatsapp";
import FoodMenu from "./pages/food/FoodMenu";

const App = () => {
  return (
    <BrowserRouter>
      <ScrollToTop /> {/* Scroll to top on route change */}
      <Navbar />
      <Routes>
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="contact" element={<Contact />} />
        <Route path="gallery" element={<Gallery />} />
        <Route path="rooms" element={<Rooms />} />
        <Route path="services" element={<Services />} />
        <Route path="foodmenu" element={<FoodMenu />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Whatsapp />
      <Footer />
    </BrowserRouter>
  );
};

export default App;
