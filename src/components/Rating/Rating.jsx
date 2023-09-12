import starActive from "../../assets/images/star-active.svg";
import starInactive from "../../assets/images/star-inactive.svg";

const Rating = ({ rating }) => {
  const ratingScale = [1, 2, 3, 4, 5];

  return (
    <div className="rating">
      {ratingScale.map((scaleNumber) => {
        return rating >= scaleNumber ? (
          <img
            key={scaleNumber}
            className="rating__star"
            src={starActive}
            alt="Active star"
          />
        ) : (
          <img
            key={scaleNumber}
            className="rating__star"
            src={starInactive}
            alt="Inactive star"
          />
        );
      })}
    </div>
  );
};

export default Rating;
