import { Button } from "@material-tailwind/react";
import { IoPower } from "react-icons/io5";
import { Link } from "react-router-dom";
import "../../Pages/commonBorderAnimate.css";
import useCurrentUser from "../../hooks/useCurrentUser";

const Header = () => {
  const user = useCurrentUser();
  console.log(user);
  // const user = false;

  const logout = null;
  return (
    <div className=" flex justify-end p-5 ">
      <div className="flex items-center gap-x-1">
        {user ? (
          <div className="dropdown md:dropdown-hover">
            <div tabIndex={0} role="button" className="avatar m-1">
              <div className="w-10 md:w-12 lg:w-14 rounded-full ring ring-[#FDB913] ring-offset-base-100 ring-offset-2">
                <img src={user?.photoUrl} />
              </div>
            </div>
            <ul
              tabIndex={0}
              className="dropdown-content border-2 -right-2 md:right-6  z-50 menu p-2 shadow-md bg-base-100 rounded-box text-base md:text-lg text-[#39474F]"
            >
              <li>
                <p>{user?.name}</p>
              </li>
              <li>
                <p>{user?.email}</p>
              </li>
              <li></li>
              <li className="w-full my-3">
                <Button
                  onClick={logout}
                  color="amber"
                  size="sm"
                  className="flex justify-center items-center gap-2 md:text-base w-full hover:bg-[#39474F] hover:text-white"
                >
                  {" "}
                  <IoPower />
                  Sign Out
                </Button>
              </li>
            </ul>
          </div>
        ) : (
          <>
            <Link to="/login">
              <Button
                variant="text"
                size="sm"
                className=" text-[#39474F]  text-base hover:bg-transparent  border-animate"
              >
                <span>Log In</span>
              </Button>
            </Link>
            <span className="text-black text-3xl mr-3 ">/</span>
            <Link to="/register">
              <Button
                variant="gradient"
                size="sm"
                color="green"
                className="text-base "
              >
                <span>REGISTER</span>
              </Button>
            </Link>
          </>
        )}
      </div>
    </div>
  );
};

export default Header;
