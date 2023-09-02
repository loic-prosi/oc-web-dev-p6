const Card = ({ title, cover }) => {
  return (
    <>
      {cover ? (
        <img className="card__cover" src={cover} alt={title} />
      ) : (
        <div className="card__cover-placeholder"></div>
      )}
      <div className="card__title-container">
        <h2 className="card__title">{title}</h2>
      </div>
    </>
  );
};

export default Card;
