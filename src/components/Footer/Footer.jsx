import logoWhite from "../../assets/images/logo-white.svg";

const Footer = () => {
  return (
    <footer className="footer">
      <img className="footer__logo" src={logoWhite} alt="Kasa logo" />
      <p className="footer__copyright">© 2020 Kasa. All rights reserved</p>
    </footer>
  );
};

export default Footer;
