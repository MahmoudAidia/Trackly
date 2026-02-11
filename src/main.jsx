import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { AppProvider } from "./Context/AppContext";
import WelcomePage from "./pages/InfoPages/WelcomePage";
import Login from "./pages/login/Login";
import Signup from "./pages/signup/Signup";
import Layout from "./Layout/Layout";
import "./main.scss";
import Dashboard from "./Layout/Dashboard";
import ProtectedRoute from "./UI/ProtectedRoute";
import { QueryClientProvider } from "@tanstack/react-query";
import { queryClient } from "./lib/QueryClient";
import Transaction from "./pages/transaction/Transaction";
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
    element: (
      <ProtectedRoute>
        <Layout />
      </ProtectedRoute>
    ),
    children: [
      {
        path: "dashboard",
        element: <Dashboard />,
      },
      {
        path: "transactions",
        element: <Transaction />,
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
      <AppProvider>
        <RouterProvider router={router} />
      </AppProvider>
    </QueryClientProvider>
  </StrictMode>,
);
