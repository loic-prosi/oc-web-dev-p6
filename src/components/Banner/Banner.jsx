import coast from "../../assets/images/coast.png";

const Banner = () => {
  return (
    <header className="banner">
      <img className="banner__image" src={coast} alt="Imagedd" />
      <div className="banner__text-container">
        <span className="banner__text">Chez vous, partout et ailleurs</span>
      </div>
    </header>
  );
};

export default Banner;
