import Layout from "./pages/Layout";
import Home from "./pages/Home";
import Rentals from "./pages/Rentals";
import About from "./pages/About";
import Error from "./pages/Error";

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
