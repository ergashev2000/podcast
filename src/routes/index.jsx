import { lazy } from "react";
import { Navigate } from "react-router-dom";
import Layout from "../layouts/MainLayout";
const Home = lazy(() => import("../pages/Home"));

export default function privateRoutes() {
  return {
    element: <Layout />,
    children: [
      { path: "/", element: <Home /> },
      { path: "*", element: <Navigate to="/" replace /> },
    ],
  };
}
