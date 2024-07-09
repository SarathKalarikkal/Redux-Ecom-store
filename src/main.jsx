import React from "react";
import ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import "./index.css";
import Root from "./routes/root";
import ErrorPage from "./error-page";
import Home from "./routes/home";
import Mens from "./routes/mens";
import Womens from "./routes/womens";
import Kids from "./routes/electronics";
import About from "./routes/About";
import Cart from "./routes/cart";

import store from './app/store'
import { Provider } from 'react-redux'
import Electronics from "./routes/electronics";
import Jewelery from "./routes/jewelery";
import SingleProduct from "./routes/singleProduct";
import WishList from "./routes/wishList";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement : <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
        errorElement : <ErrorPage />,
      },
      {
        path: "/shop/mens",
        element: <Mens />,
        errorElement : <ErrorPage />,
      },
      {
        path: "/shop/womens",
        element: <Womens />,
        errorElement : <ErrorPage />,
      },
      {
        path: "/shop/electronics",
        element: <Electronics />,
        errorElement : <ErrorPage />,
      },
      {
        path: "/shop/jewelery",
        element: <Jewelery />,
        errorElement : <ErrorPage />,
      },
      {
        path: "/shop/:productId",
        element: <SingleProduct />,
        errorElement : <ErrorPage />,
      },
      {
        path: "/about",
        element: <About />,
        errorElement : <ErrorPage />,
      },
      {
        path: "/cart",
        element: <Cart />,
        errorElement : <ErrorPage />,
      },
      {
        path: "/wishList",
        element: <WishList />,
        errorElement : <ErrorPage />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
    <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
);