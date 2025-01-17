import { Typography } from "@material-tailwind/react";
import { HiMenuAlt2 } from "react-icons/hi";
import { NavLink, Outlet, useLocation } from "react-router-dom";
import Header from "../../../Shared/Header/Header";

const Dashboard = () => {
  const location = useLocation();
  const headFootNotShowing =
    location.pathname.includes("/login") ||
    location.pathname.includes("/register");
  return (
    <div className="drawer lg:drawer-open">
      <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />

      <div className="drawer-content  bg-[#f6f6f6e3]">
        {/* Page content here */}
        {headFootNotShowing || <Header></Header>}
        <Outlet></Outlet>
      </div>
      {/* drawer button icon */}
      <div className="ml-2 mt-2 ">
        <label htmlFor="my-drawer-2" className="drawer-button lg:hidden">
          <HiMenuAlt2 className="text-4xl font-bold" />
        </label>
      </div>
      <div className="drawer-side ">
        <label
          htmlFor="my-drawer-2"
          aria-label="close sidebar"
          className="drawer-overlay"
        ></label>
        <ul className="menu p-4 w-auto  md:w-80 min-h-full text-lg font-semibold gap-1 bg-[#1C444D] text-white">
          <li className="mb-2">
            <Typography
              as="a"
              href="/"
              className="mr-4 flex justify-center  cursor-pointer py-1.5 font-medium "
            >
              <img
                src="/blogo2.jpg"
                alt="Website-log"
                className="w-24 md:w-36"
              />
            </Typography>
          </li>

          {/* Admin Route */}
          {/* {runningUserRole === "admin" && (
            <>
              <li>
                <NavLink to="/dashboard/profile">
                  <CgProfile className="text-lg md:text-2xl" /> Admin Profile
                </NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/adminManageProperty">
                  <GiFamilyHouse className="text-lg md:text-2xl" /> Manage
                  Properties
                </NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/adminManageUsers">
                  <FaUsers className="text-lg md:text-2xl" /> Manage Users
                </NavLink>
              </li>

              <li>
                <NavLink to="/dashboard/adminManageReviews">
                  <MdOutlineReviews className="text-lg md:text-2xl" /> Manage
                  Reviews
                </NavLink>
              </li>
            </>
          )} */}

          {/* Agent Route */}

          {/* user route */}

          {/* {runningUserRole !== "admin" && runningUserRole !== "agent" && (
          <>
            <li>
              <NavLink to="/dashboard/profile">
                <CgProfile className="text-lg md:text-2xl" /> My Profile
              </NavLink>
            </li>
            <li>
              <NavLink to="/dashboard/userWishlist">
                <FaList className="text-lg md:text-2xl" /> Wishlist
              </NavLink>
            </li>
            <li>
              <NavLink to="/dashboard/userPropertyBought">
                <GiFamilyHouse className="text-lg md:text-2xl" /> Property
                Bought
              </NavLink>
            </li>

            <li>
              <NavLink to="/dashboard/userReview">
                <MdOutlineReviews className="text-lg md:text-2xl" /> My
                Reviews
              </NavLink>
            </li>
          </>
        )} */}
          {/* User route */}
          <>
            <li>
              <NavLink to="/overview">Overview</NavLink>
            </li>
            <li>
              <NavLink to="/transactionsHistory">Transactions History</NavLink>
            </li>
            <li>
              <NavLink to="/sendMoney">Send Money</NavLink>
            </li>
            <li>
              <NavLink to="/cashOut">Cash-Out</NavLink>
            </li>
            <li>
              <NavLink to="/cashIn">Cash-In</NavLink>
            </li>
            <li>
              <NavLink to="/balanceInquiry">Balance Inquiry</NavLink>
            </li>
          </>
          {/* Agent route */}
          <>
            <li>
              <NavLink to="/overview">Overview</NavLink>
            </li>
            <li>
              <NavLink to="/agentTransactionsHistory">
                Transactions History
              </NavLink>
            </li>

            <li>
              <NavLink to="/cashInRequests">Cash-In Requests</NavLink>
            </li>
            <li>
              <NavLink to="/cashOutRequests">Cash-Out Requests</NavLink>
            </li>
            <li>
              <NavLink to="/agentBalanceInquiry">Balance Inquiry</NavLink>
            </li>
          </>
          {/* Admin route */}
          <>
            <li>
              <NavLink to="/overview">Overview</NavLink>
            </li>
            <li>
              <NavLink to="/userManagement">User Management</NavLink>
            </li>

            <li>
              <NavLink to="/systemMonitoring">System Monitoring</NavLink>
            </li>
          </>
        </ul>
      </div>
    </div>
  );
};

export default Dashboard;
