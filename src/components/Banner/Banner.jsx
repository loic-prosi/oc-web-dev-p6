const Banner = ({ context, image, imageAlt, text }) => {
  return (
    <header className={context ? `banner banner--${context}` : "banner"}>
      <img className="banner__image" src={image} alt={imageAlt} />
      <div className="banner__text-container">
        <span className="banner__text">{text}</span>
      </div>
    </header>
  );
};

export default Banner;
