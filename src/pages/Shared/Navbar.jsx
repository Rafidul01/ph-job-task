import { useContext, useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";

import { toast } from "react-toastify";
import { AuthContext } from "../../provider/AuthProvider";
// import logo from "../../assets/images/PikPng.com_graphic-designing-png_821269.png";
const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");
  console.log(user);
  useEffect(() => {
    localStorage.setItem("theme", theme);
    const localTheme = localStorage.getItem("theme");
    document.querySelector("html").setAttribute("data-theme", localTheme);
  }, [theme]);

  const handleToggle = (e) => {
    if (e.target.checked) {
      setTheme("dark");
    } else setTheme("light");

    console.log(e.target.checked);
  };

  const handleLogOut = () => {
    logOut()
      .then(() => {
        toast.success("Loged out Successful!");
      })
      .catch(() => {
        toast.success("Logout failed");
      });
  };

  const links = (
    <>
      <li className="hover:text-[#973E12]">
        <NavLink
          className={({ isActive }) =>
            isActive ? "border border-[#973E12] text-[#973E12] font-bold" : ""
          }
          to="/"
        >
          Home
        </NavLink>
      </li>
      
      {/* {user && (
        <li className="hover:text-[#973E12]">
          <NavLink
            className={({ isActive }) =>
              isActive ? "border border-[#973E12] text-[#973E12] font-bold" : ""
            }
            to={`/myArtAndCraft/${user.email}`}
          >
            My Art&Craft List
          </NavLink>
        </li>
      )} */}
    </>
  );
  return (
    <div className="navbar bg-base-100 p-0 my-4 border-b-2 rounded-xl px-2 shadow-lg">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className=" menu menu-sm dropdown-content mt-3 z-50 p-2 shadow bg-base-100 rounded-box w-52 text-[#9EA18E] font-lato"
          >
            {links}
            {user ? (
          <>
            <li>
            <Link
              onClick={handleLogOut}
              className="btn bg-[#973E12]  text-white font-poppins rounded-3xl min-h-0 h-10 md:min-h-[3rem] md:h-[3rem]"
            >
              LogOut
            </Link>
            </li>
            
          </>
        ) : (
          <>
            <li>
            <Link
              to="/login"
              className="btn bg-[#973E12]  text-white font-poppins rounded-3xl min-h-0 h-10 md:min-h-[3rem] md:h-[3rem]"
            >
              Login
            </Link>
            </li>
            <li>
            <Link
              to="/register"
              className=" btn bg-[#973E12] text-white font-poppins rounded-3xl min-h-0 h-10 md:min-h-[3rem] md:h-[3rem]"
            >
              Register
            </Link>
            </li>
          </>
        )}
          </ul>
        </div>
        <Link
          to="/"
          className="btn btn-ghost text-lg md:text-3xl text-start p-0 font-lato text-[#9EA18E] font-normal"
        >
          {/* <img 
          src={logo} 
          alt="" className="h-9" /> */}
          <span className="text-[#973E12]">Product</span> House
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 text-[#9EA18E] font-thin">
          {links}
        </ul>
      </div>
      <div className="navbar-end font-lato">
        {user ? (
          <>
            <div
              className="avatar hover:tooltip hover:tooltip-open hover:tooltip-bottom"
              data-tip={user.displayName}
            >
              <div className="w-6 md:w-8 mr-2 md:mr-4 rounded-full ring ring-[#973E12] ring-offset-base-100 ring-offset-2 ">
                <img src={user.photoURL} />
              </div>
            </div>
            <Link
              onClick={handleLogOut}
              className="hidden md:flex btn bg-[#973E12]  text-white font-poppins rounded-3xl min-h-0 h-10 md:min-h-[3rem] md:h-[3rem]"
            >
              LogOut
            </Link>
          </>
        ) : (
          <>
            <Link
              to="/login"
              className="btn hidden md:flex bg-[#973E12]  text-white font-poppins rounded-3xl min-h-0 h-10 md:min-h-[3rem] md:h-[3rem]"
            >
              Login
            </Link>
            <Link
              to="/register"
              className=" hidden md:flex ml-2 btn bg-[#973E12] text-white font-poppins rounded-3xl min-h-0 h-10 md:min-h-[3rem] md:h-[3rem]"
            >
              Register
            </Link>
          </>
        )}

        <div></div>
        {/* theme */}

        <label className="swap swap-rotate">
          {/* this hidden checkbox controls the state */}
          <input
            type="checkbox"
            onChange={handleToggle}
            checked={theme === "dark" ? true : false}
            className="theme-controller "
            
          />

          {/* sun icon */}
          <svg
            className="swap-off fill-current w-8 h-8 md:w-10 md:h-10 text-[#973E12]  "
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
          >
            <path d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z" />
          </svg>

          {/* moon icon */}
          <svg
            className="swap-on fill-current w-8 h-8 md:w-10 md:h-10  text-[#973E12]"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
          >
            <path d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z" />
          </svg>
        </label>
      </div>
    </div>
  );
};

export default Navbar;