import { useState } from "react";
import arrowPrev from "../../assets/images/arrow-prev.svg";
import arrowNext from "../../assets/images/arrow-next.svg";

const Slideshow = ({ pictures, imageAlt }) => {
  const [currentImage, setCurrentImage] = useState(0);

  const renderSlideshow = pictures && pictures.length > 0;
  const renderSlideshowNavigation = pictures && pictures.length > 1;

  const prevImage = () => {
    const noMorePictures = currentImage - 1 < 0;
    if (noMorePictures) {
      setCurrentImage(pictures.length - 1);
    } else {
      setCurrentImage(currentImage - 1);
    }
  };

  const nextImage = () => {
    const noMorePictures = currentImage + 1 > pictures.length - 1;
    if (noMorePictures) {
      setCurrentImage(0);
    } else {
      setCurrentImage(currentImage + 1);
    }
  };

  if (renderSlideshow) {
    return (
      <header className="slideshow">
        {pictures.map((picture, index) => {
          return (
            <img
              key={picture}
              className={`slideshow__image ${
                index === currentImage && "slideshow__image--active"
              }`}
              src={picture}
              alt={imageAlt ? imageAlt : ""}
            />
          );
        })}
        {renderSlideshowNavigation && (
          <div className="slideshow__navigation">
            <button
              className="slideshow__button slideshow__button--prev"
              onClick={prevImage}
            >
              <img
                className="slideshow__arrow"
                src={arrowPrev}
                alt="Précédent"
              />
            </button>
            <span className="slideshow__pagination">{`${currentImage + 1}/${
              pictures.length
            }`}</span>
            <button
              className="slideshow__button slideshow__button--next"
              onClick={nextImage}
            >
              <img className="slideshow__arrow" src={arrowNext} alt="Suivant" />
            </button>
          </div>
        )}
      </header>
    );
  }
};

export default Slideshow;
