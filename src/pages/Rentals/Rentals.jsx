import { useState, useEffect } from "react";
import { useLoaderData, useParams, useNavigate } from "react-router-dom";
import Slideshow from "../../components/Slideshow";
import Collapse from "../../components/Collapse";
import Profile from "../../components/Profile";
import Rating from "../../components/Rating";

const Rentals = () => {
  const rentals = useLoaderData();
  const { id } = useParams();
  const [rental, setRental] = useState(null);
  const navigate = useNavigate();

  const renderSlideshow =
    rental && rental.pictures && Array.isArray(rental.pictures);
  const renderTitle = rental && rental.title && rental.title.length > 0;
  const renderLocation =
    rental && rental.location && rental.location.length > 0;
  const renderTags = rental && rental.tags && Array.isArray(rental.tags);
  const renderProfile =
    rental && rental.host && (rental.host.name || rental.host.picture);
  const renderRating = rental && rental.rating && rental.rating.length > 0;
  const renderDescription =
    rental && rental.description && rental.description.length > 0;
  const renderEquipments =
    rental && rental.equipments && rental.equipments.length > 0;

  useEffect(() => {
    if (id) {
      const rental = rentals.find((rental) => rental.id === id);
      if (rental) {
        setRental(rental);
      } else {
        navigate("/error");
      }
    } else {
      navigate("/error");
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      {renderSlideshow && (
        <Slideshow pictures={rental.pictures} imageAlt={rental.title} />
      )}
      <div className="rental">
        <div className="rental__container">
          <div className="rental__heading">
            {renderTitle && <h2 className="rental__title">{rental.title}</h2>}
            {renderLocation && (
              <p className="rental__location">{rental.location}</p>
            )}
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
          {renderDescription && (
            <Collapse
              size="medium"
              title="Description"
              content={rental.description}
            />
          )}
          {renderEquipments && (
            <Collapse
              size="medium"
              title="Équipements"
              content={rental.equipments}
            />
          )}
        </div>
      </div>
    </>
  );
};

export default Rentals;
