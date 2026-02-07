import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";

import WelcomePage from "./pages/InfoPages/WelcomePage";
import Login from "./pages/login/Login";
import Signup from "./pages/signup/Signup";
import Layout from "./Layout/Layout";
import "./main.scss";
import Dashboard from "./Layout/Dashboard";
const router = createBrowserRouter([
  {
    path: "/",
    element: <WelcomePage />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/sign",
    element: <Signup />,
  },
  {
    path: "/app",
    element: <Layout />,
    children: [
      {
        element: <Dashboard />,
        path: "dashboard",
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
);
