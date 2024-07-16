import { createBrowserRouter } from "react-router-dom";
import Root from "../../Layout/Root/Root";
import Home from "../../Pages/Home/Home";
import Dashboard from "../../Pages/dashboard/Dashboard/Dashboard";
import Overview from "../../Pages/dashboard/overview/Overview";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Dashboard></Dashboard>,
    children: [
      {
        path: "/overview",
        element: <Overview></Overview>,
      },
    ],
  },
]);
