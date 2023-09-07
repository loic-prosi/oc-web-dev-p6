import { Link } from "react-router-dom";

const Card = ({ id, title, cover }) => {
  return (
    <Link className="card" to={`/rentals/${id}`}>
      {cover ? (
        <img className="card__cover" src={cover} alt={title} />
      ) : (
        <div className="card__cover-placeholder"></div>
      )}
      <div className="card__title-container">
        <h2 className="card__title">{title}</h2>
      </div>
    </Link>
  );
};

export default Card;
