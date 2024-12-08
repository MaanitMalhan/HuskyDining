import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { ReactDOM } from "react";
import "./index.css";
import Home from "./pages/Home.jsx";
import Menu from "./pages/Menu.jsx";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Donate from "./pages/Donate.jsx";
import Reviews from "./pages/Reviews.jsx";
import FlexPass from "./pages/Flexpass.jsx";
import Points from "./pages/Points.jsx";
import NotFound from "./pages/NotFound.jsx";
import Login from "./pages/Login.jsx";
import Signup from "./pages/SignUp.jsx";
import PrivateRoute from "./components/PrivateRoutes/PrivateRoutes.jsx";
import Dashboard from "./pages/Dashboard.jsx";
import { AuthProvider } from "./context/AuthContext.jsx";
import Account from "./pages/Account.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    errorElement: <NotFound />,
  },
  {
    path: "/menu",
    element: <Menu />,
  },
  {
    path: "/donate",
    element: <Donate />,
  },
  {
    path: "/reviews",
    element: <Reviews />,
  },
  {
    path: "/flexpass",
    element: <FlexPass />,
  },
  {
    path: "/points",
    element: <Points />,
  },

  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "signup",
    element: <Signup />,
  },
  {
    path: "/dashboard",
    element: (
      <PrivateRoute>
        <Dashboard />
      </PrivateRoute>
    ),
  },
  {
    path: "/account",
    element: (
      <PrivateRoute>
        <Account />
      </PrivateRoute>
    ),
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </StrictMode>
);
