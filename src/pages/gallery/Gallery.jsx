import Header from "../../components/Header";
import HeaderImage from "../../images/gallery/img__gallery.png";
import "./gallery.css";

const Gallery = () => {
  const galleryLength = 12;
  const images = [];

  for (let i = 1; i <= galleryLength; i++) {
    images.push(require(`../../images/gallery/gallery${i}.png`));
  }

  return (
    <>
      <Header title="Elegance In Every Corner." image={HeaderImage}>
        Discover our luxurious suites with breathtaking views.
      </Header>
      <section className="gallery">
        <div className="container mainGallery__container">
          {images.map((image, index) => {
            return (
              <article key={index}>
                <img src={image} alt={`Gallery Image ${index + 1}`} />
              </article>
            );
          })}
        </div>
      </section>
    </>
  );
};

export default Gallery;
