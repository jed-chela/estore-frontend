import React, { useState } from "react";
import { IoMdMenu } from "react-icons/io";
import { IoCloseSharp } from "react-icons/io5";
import Mobilepage from "./Mobilepage";
import { Link } from "react-router-dom";
import Logo from "../assets/productImage/Awlogo1.png";

const NavToggle = () => {
  const [nav, setNav] = useState(false);
  const handleClick = () => setNav(!nav);
  return (
    <div className="fixed md:hidden  bg-gray-50 text-black font-medium  mt-0 z-[999]   top-0 left-0 w-full h-auto flex justify-between  text-[20px]">
      <div className="flex w-full flex-3 items-center justify-between">
        <Link to="/home">
          <img className="md:hidden h-[25px]  ml-4" src={Logo} alt="" />
        </Link>

        <div onClick={handleClick} className="md:hidden p-2 flex justify-end z-10">
          {!nav ? <IoMdMenu /> : <IoCloseSharp />}
        </div>
      </div>

      <div className="w-auto md:w-auto mt-[40px]  ">
        <div
          className={
            !nav
              ? "hidden "
              : "absolute left-0 flex-1 cursor-pointer h-screen w-full bg-white md:bg-transparent   md:min-h-fit md:text-white"
          }
        >
          {" "}
          <ul className="flex items-center mt-[4%] flex-col md:flex-row md:absolute ">
            <li className="text-[15px] md:text-[20px] sm:mr-4 p-2 rounded-[3px] hover:border hover:bg-gray-600 hover:text-white">
              <a href="/collection">SEARCH</a>
            </li>
            <li className="text-[15px] md:text-[20px] sm:mr-4 p-1 rounded-[3px] hover:border hover:bg-gray-600 hover:text-white">
              ACCOUNT
            </li>
            <li className="text-[15px] md:text-[20px] sm:mr-2 p-1 rounded-[3px] hover:border hover:bg-gray-600 hover:text-white">
              BAG
            </li>
          </ul>
          <div>
            <Mobilepage />
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavToggle;
