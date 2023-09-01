import { useState } from "react";
import arrowIcon from "../../assets/images/arrow.svg";

const Collapse = ({ title, content }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleCollapse = () => {
    setIsOpen(!isOpen);
  };

  return (
    <article className="collapse">
      <button className="collapse__button" onClick={toggleCollapse}>
        <span className="collapse__title">{title}</span>
        <img
          className={
            isOpen ? "collapse__icon collapse__icon--active" : "collapse__icon"
          }
          src={arrowIcon}
          alt={isOpen ? "Flèche vers le bas" : "Flèche vers le haut"}
        />
      </button>
      <p
        className={
          isOpen
            ? "collapse__content collapse__content--active"
            : "collapse__content"
        }
      >
        {content}
      </p>
    </article>
  );
};

export default Collapse;
