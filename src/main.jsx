import React, { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/home/Home.jsx";
import AboutUs from "./pages/about-us/About.jsx";
import Layout from "./components/layout/Layout.jsx";
import Pricing from "./pages/pricing/Pricing.jsx";
import Products from "./pages/best-sellers/Products.jsx";
import Shop from "./pages/shop/Shop.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    // errorElement: <ErrorPage />, // Uncomment and define ErrorPage if you want to handle errors
    children: [
      {
        path: "/",
        element: <App />,
      },
      {
        index: true,
        element: <Home />,
      },
      {
        path: "home", 
        element: <Home />,
      },
      {
        path: "about-us",
        element: <AboutUs />,
      },
      {
        path: "pricing",
        element: <Pricing/>
      },
      {
        path: "best-sellers",
        element: <Products />,
      },
      {
        path: "shop",
        element: <Shop/>
      }
      
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
