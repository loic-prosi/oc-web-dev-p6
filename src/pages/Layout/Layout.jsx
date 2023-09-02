import { Outlet, useLocation } from "react-router-dom";

import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

const Layout = () => {
  const { pathname } = useLocation();

  const isLanding = pathname === "/";
  const isRentals = pathname.includes("rentals");
  const isAbout = pathname.includes("about");
  const isError = !isLanding && !isRentals && !isAbout;

  return (
    <div className="layout">
      <div className="layout__container">
        <Navbar />
        <main
          className={`page ${
            isAbout ? "page--about" : isError ? "page--error" : ""
          }`}
        >
          <Outlet />
        </main>
      </div>
      <Footer />
    </div>
  );
};

export default Layout;
