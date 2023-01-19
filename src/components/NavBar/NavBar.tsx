import React from "react";
import { useState } from "react";
import { useQuery } from "react-query";

import { Link, useLocation } from "react-router-dom";
import { Logo } from "../../images";

import { fetchUser } from "./NavBarControllers";

const NavBar: React.FC = (): JSX.Element => {
  const [screenSize, setScreenSize] = useState<string>("notMobile");

  const logout = () => {
    localStorage.removeItem("token");
    window.location.href = "/";
  };

  const { data } = useQuery("User", fetchUser, {
    enabled: true,
    staleTime: 10000 * 60 * 50,
  });

  const route = useLocation();
  console.log("====================================");
  console.log(route.pathname);
  console.log("====================================");
  return (
    <>
      <nav className="flex sm:py-0 px-8 py-0 text-yellow-600 bg-white flex-col sm:flex-row ">
        <div className="flex-1 cursor-pointer   sm:my-0  sm:ml-0 p-4 sm:p-2 border-2 border-black w-max sm:border-0">
          <Link to={"/"}>
            <div className="w-12 h-12">
              <img src={Logo} height="100%" width={"100%"} />
            </div>
          </Link>
        </div>
        <div
          className="sm:hidden block ml-auto cursor-pointer absolute top-[2rem] right-[2rem]"
          onClick={() =>
            screenSize === "mobile"
              ? setScreenSize("notMobile")
              : setScreenSize("mobile")
          }
        >
          <div className="w-9 h-1 bg-slate-900  relative duration-200 line1 "></div>
          <div className="w-9 h-1 bg-slate-900  relative duration-200 line2 "></div>
          <div className="w-9 h-1 bg-slate-900  relative duration-200 line3"></div>
        </div>
        <div
          className="flex-auto flex justify-between sm:flex-row items-center flex-col  "
          id={screenSize}
        >
          <div className="h-full w-24 min-w-max px-1 flex items-center justify-center   cursor-pointer hover:text-white hover:bg-yellow-600">
            <Link to={"/"}>Home</Link>
          </div>
          <div className="h-full w-24 min-w-max px-1 flex items-center justify-center   cursor-pointer hover:text-white hover:bg-yellow-600">
            <Link to={"/catalogue"}>Catalogue</Link>
          </div>
          {data?.data.username ? (
            ""
          ) : (
            <div className="h-full w-24 min-w-max px-1 flex items-center justify-center   cursor-pointer hover:text-white hover:bg-yellow-600">
              <Link to={"/login"}>login</Link>
            </div>
          )}
          {data?.data.username ? (
            ""
          ) : (
            <div className="h-full w-24 min-w-max px-1 flex items-center justify-center   cursor-pointer hover:text-white hover:bg-yellow-600">
              <Link to={"/register"}>Register</Link>
            </div>
          )}
          {data?.data.username ? (
            <div className="h-full w-24 min-w-max px-1 flex items-center justify-center   cursor-pointer hover:text-white hover:bg-yellow-600">
              <Link to={"/carts"}>Cart</Link>
            </div>
          ) : (
            ""
          )}

          {data?.data.username === "sagarkhadkammm" && (
            <>
              <div className="h-full w-24 min-w-max px-1 flex items-center justify-center   cursor-pointer hover:text-white hover:bg-yellow-600">
                <Link to={"/item"}>Create New Ad</Link>
              </div>
            </>
          )}

          {data?.data.username ? (
            <div className="h-full w-24 min-w-max px-1 flex items-center justify-center   cursor-pointer hover:text-white hover:bg-yellow-600">
              <Link to={"/orders"}>Orders</Link>
            </div>
          ) : (
            ""
          )}

          {data?.data.username && (
            <div className="h-full w-24 min-w-max px-1 flex items-center justify-center   cursor-pointer hover:text-white hover:bg-yellow-600">
              {data.data.username}
            </div>
          )}
          {data?.data.username ? (
            <div
              className="h-full w-24 min-w-max px-1 flex items-center justify-center   cursor-pointer hover:text-white hover:bg-yellow-600"
              onClick={logout}
            >
              Log Out
            </div>
          ) : (
            ""
          )}
        </div>
      </nav>
    </>
  );
};

export default NavBar;
