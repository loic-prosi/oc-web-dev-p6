import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import reportWebVitals from "./reportWebVitals";
import "./index.sass";

import Layout from "./pages/Layout";
import Home from "./pages/Home";
import Rentals from "./pages/Rentals";
import About from "./pages/About";
import Error from "./pages/Error";

import rentals from "./data/rentals.json";

const root = ReactDOM.createRoot(document.getElementById("root"));

const router = createBrowserRouter([
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
        element: <Rentals />
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
]);

root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
