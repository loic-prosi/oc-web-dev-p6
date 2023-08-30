import { Link } from "react-router-dom";

const Card = ({ id, title, image }) => {
  return (
    <Link className="card" to={`/rentals/${id}`}>
      {image ? (
        <img className="card__image" src={image} alt={title} />
      ) : (
        <div className="card__image-placeholder"></div>
      )}
      <div className="card__title-container">
        <h2 className="card__title">{title}</h2>
      </div>
    </Link>
  );
};

export default Card;
