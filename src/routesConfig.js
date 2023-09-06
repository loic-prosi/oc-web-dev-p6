import Layout from "./pages/Layout";
import Home from "./pages/Home";
import Rentals from "./pages/Rentals";
import About from "./pages/About";
import Error from "./pages/Error";

import rentals from "./data/rentals.json";

const routesConfig = [
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Home />,
        loader: async () => {
          return rentals;
        }
      },
      {
        path: "/rentals/:id",
        element: <Rentals />,
        loader: async () => {
          return rentals;
        }
      },
      {
        path: "/about",
        element: <About />
      },
      {
        path: "*",
        element: <Error />
      }
    ]
  }
];

export default routesConfig;
