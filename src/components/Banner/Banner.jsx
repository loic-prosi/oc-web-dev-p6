const Banner = ({ image, imageAlt, text }) => {
  return (
    <header className={`banner${text ? "" : " banner--no-text"}`}>
      <img className="banner__image" src={image} alt={imageAlt} />
      {text && (
        <div className="banner__text-container">
          <span className="banner__text">{text}</span>
        </div>
      )}
    </header>
  );
};

export default Banner;
