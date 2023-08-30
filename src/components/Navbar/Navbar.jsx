import { NavLink } from "react-router-dom";
import logo from "../../assets/images/logo.svg";

const Navbar = () => {
  return (
    <header className="navbar">
      <img className="navbar__logo" src={logo} alt="Kasa logo" />
      <nav>
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
    </header>
  );
};

export default Navbar;
