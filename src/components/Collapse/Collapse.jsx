import { useState, useEffect } from "react";
import arrowIcon from "../../assets/images/arrow.svg";

const Collapse = ({ size, title, content }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [contentText, setContentText] = useState("");

  useEffect(() => {
    if (Array.isArray(content)) {
      let contentText = "";
      content.forEach((element) => {
        contentText = contentText + element + "\n";
      });
      setContentText(contentText);
    } else {
      setContentText(content);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const toggleCollapse = () => {
    setIsOpen(!isOpen);
  };

  return (
    <article className={`collapse-${size}`}>
      <button className={`collapse-${size}__button`} onClick={toggleCollapse}>
        <span className={`collapse-${size}__title`}>{title}</span>
        <img
          className={
            isOpen
              ? `collapse-${size}__icon collapse-${size}__icon--active`
              : `collapse-${size}__icon`
          }
          src={arrowIcon}
          alt={isOpen ? "Flèche vers le bas" : "Flèche vers le haut"}
        />
      </button>
      <p
        className={
          isOpen
            ? `collapse-${size}__content collapse-${size}__content--active`
            : `collapse-${size}__content`
        }
      >
        {contentText}
      </p>
    </article>
  );
};

export default Collapse;
