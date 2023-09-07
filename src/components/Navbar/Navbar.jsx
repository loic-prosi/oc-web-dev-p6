import { Link, NavLink } from "react-router-dom";
import logo from "../../assets/images/logo.svg";

const Navbar = () => {
  return (
    <nav className="navbar">
      <h1 className="navbar__title">
        <Link to="/">
          <img className="navbar__logo" src={logo} alt="Kasa" />
        </Link>
      </h1>
      <ul className="navbar__links">
        <li>
          <NavLink
            className={({ isActive, isPending }) =>
              isPending
                ? ""
                : isActive
                ? "navbar__link navbar__link--active"
                : "navbar__link"
            }
            to="/"
          >
            Accueil
          </NavLink>
        </li>
        <li>
          <NavLink
            className={({ isActive, isPending }) =>
              isPending
                ? ""
                : isActive
                ? "navbar__link navbar__link--active"
                : "navbar__link"
            }
            to="/about"
          >
            A Propos
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
