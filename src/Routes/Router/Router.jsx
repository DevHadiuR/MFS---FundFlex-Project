import { createBrowserRouter } from "react-router-dom";
import Root from "../../Layout/Root/Root";
import Home from "../../Pages/Home/Home";
import Dashboard from "../../Pages/dashboard/Dashboard/Dashboard";
import Overview from "../../Pages/dashboard/overview/Overview";
import UserTransactions from "../../Pages/dashboard/userTransactions/UserTransactions";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Dashboard></Dashboard>,
    children: [
      // routes for user
      {
        path: "/overview",
        element: <Overview></Overview>,
      },
      {
        path: "/transactionsHistory",
        element: <UserTransactions></UserTransactions>,
      },
    ],
  },
]);
