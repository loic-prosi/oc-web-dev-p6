import { useLocation } from "react-router-dom";
import Slideshow from "../../components/Slideshow";
import Collapse from "../../components/Collapse";
import Profile from "../../components/Profile";
import Rating from "../../components/Rating";

const Rentals = () => {
  const location = useLocation();
  const rental = location && location.state && location.state;

  const renderSlideshow =
    rental && rental.pictures && Array.isArray(rental.pictures);
  const renderTags = rental && rental.tags && Array.isArray(rental.tags);
  const renderProfile =
    rental && rental.host && (rental.host.name || rental.host.picture);
  const renderRating = rental && rental.rating && rental.rating.length > 0;

  return (
    <>
      {renderSlideshow && (
        <Slideshow pictures={rental.pictures} imageAlt={rental.title} />
      )}
      <div className="rental">
        <div className="rental__container">
          <div className="rental__heading">
            <h2 className="rental__title">{rental.title}</h2>
            <p className="rental__location">{rental.location}</p>
            <div className="rental__tags">
              {renderTags &&
                rental.tags.map((tag, index) => {
                  return (
                    <span key={tag + index} className="rental__tag">
                      {tag}
                    </span>
                  );
                })}
            </div>
          </div>
          <div className="rental__profile-rating">
            {renderProfile && (
              <Profile name={rental.host.name} picture={rental.host.picture} />
            )}
            {renderRating && <Rating rating={rental.rating} />}
          </div>
        </div>
        <div className="rental__collapses">
          <Collapse
            size="medium"
            title="Description"
            content={rental.description}
          />
          <Collapse
            size="medium"
            title="Équipements"
            content={rental.equipments}
          />
        </div>
      </div>
    </>
  );
};

export default Rentals;
