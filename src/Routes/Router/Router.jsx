import { createBrowserRouter } from "react-router-dom";
import Root from "../../Layout/Root/Root";
import Home from "../../Pages/Home/Home";
import Dashboard from "../../Pages/dashboard/Dashboard/Dashboard";
import Overview from "../../Pages/dashboard/overview/Overview";
import UserTransactions from "../../Pages/dashboard/userTransactions/UserTransactions";
import SendMoney from "../../Pages/dashboard/userSendMoney/SendMoney";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Dashboard></Dashboard>,
    children: [
      {
        path: "/overview",
        element: <Overview></Overview>,
      },
      // routes for user
      {
        path: "/transactionsHistory",
        element: <UserTransactions></UserTransactions>,
      },
      {
        path: "/sendMoney",
        element: <SendMoney></SendMoney>,
      },
    ],
  },
]);
