import { useLocation } from "react-router-dom";
import Slideshow from "../../components/Slideshow";

const Rentals = () => {
  const location = useLocation();
  const rental = location && location.state && location.state;

  return (
    <>
      <Slideshow pictures={rental.pictures} imageAlt={rental.title} />
    </>
  );
};

export default Rentals;
