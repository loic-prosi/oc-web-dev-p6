import Layout from "./pages/Layout";
import Home from "./pages/Home";
import Rentals from "./pages/Rentals";
import About from "./pages/About";
import Error from "./pages/Error";

const routesConfig = (data) => {
  return [
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          index: true,
          element: <Home />,
          loader: async () => {
            return data;
          }
        },
        {
          path: "/rentals/:id",
          element: <Rentals />,
          loader: async () => {
            return data;
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
};

export default routesConfig;
