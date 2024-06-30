import { createBrowserRouter, Navigate } from "react-router-dom";
import Signup from "./Signup";
import Login from "./Login";
import Home from "./Home";
import Products from "./Products";
import ProductDetails from "./ProductDetail";
import Wishlist from "./Wishlist";
import Profile from "./Profile";
import Layout from "./Layout";
import Cart from "./Cart";
import NotFound from "./NotFound";
const router = createBrowserRouter([
  { path: "/signup", element: <Signup /> },
  { path: "/login", element: <Login /> },
  {
    path: "/",
    element: <Layout />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/products", element: <Products /> },
      {
        path: "/product/:id",
        element: <ProductDetails />,
      },
      {
        path: "/wishlist",
        element: <Wishlist />,
      },
      { path: "/cart", element: <Cart /> },
      { path: "/not-found", element: <NotFound /> },

      { path: "*", element: <Navigate to="/not-found" /> },
      { path: "/profile", element: <Profile /> },
    ],
  },
]);

export default router;
