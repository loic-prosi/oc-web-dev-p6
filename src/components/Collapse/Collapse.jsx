import { useState, useEffect } from "react";
import arrowIcon from "../../assets/images/arrow.svg";

const Collapse = ({ size, title, content }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [contentText, setContentText] = useState("");

  const contentFormat = (content) => {
    let newContent = "";
    content.forEach((contentElement) => {
      newContent = newContent + contentElement + "\n";
    });
    return newContent;
  };

  useEffect(() => {
    if (Array.isArray(content)) {
      const contentFormatted = contentFormat(content);
      setContentText(contentFormatted);
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
      <header className={`collapse-${size}__header`} onClick={toggleCollapse}>
        {size === "large" && (
          <h2 className={`collapse-${size}__title`}>{title}</h2>
        )}
        {size === "medium" && (
          <h3 className={`collapse-${size}__title`}>{title}</h3>
        )}
        <img
          className={
            isOpen
              ? `collapse-${size}__icon collapse-${size}__icon--active`
              : `collapse-${size}__icon`
          }
          src={arrowIcon}
          alt={isOpen ? "Flèche vers le bas" : "Flèche vers le haut"}
        />
      </header>
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
