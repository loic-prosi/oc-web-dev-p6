import { render } from "@testing-library/react";
import { RouterProvider, createMemoryRouter } from "react-router-dom";

import routesConfig from "./routesConfig";

const renderPage = (page, rentals) => {
  const routes = routesConfig(rentals ? rentals : []);

  let router;
  switch (page) {
    case "home":
      router = createMemoryRouter(routes);
      break;
    case "rentals":
      router = createMemoryRouter(routes, {
        initialEntries: ["/rentals/1"]
      });
      break;
    case "about":
      router = createMemoryRouter(routes, {
        initialEntries: ["/about"]
      });
      break;
    case "error":
      router = createMemoryRouter(routes, {
        initialEntries: ["/error"]
      });
      break;
    default:
      router = createMemoryRouter(routes);
      break;
  }

  render(<RouterProvider router={router} />);
};

export default renderPage;
