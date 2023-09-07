import Layout from "../pages/Layout/Layout";
import Home from "../pages/Home/Home";
import Rentals from "../pages/Rentals/Rentals";
import About from "../pages/About/About";
import Error from "../pages/Error/Error";

const routesConfig = (rentals) => {
  return [
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
          errorElement: <Error />,
          loader: async ({ params }) => {
            const { id } = params;
            const rental = rentals.find((rental) => rental.id === id);
            if (rental) {
              return rental;
            } else {
              throw new Response("Rental not found", { status: 404 });
            }
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
