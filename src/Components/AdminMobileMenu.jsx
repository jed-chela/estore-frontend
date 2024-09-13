import React, { useState } from "react";
import { IoMdMenu } from "react-icons/io";
import { IoCloseSharp } from "react-icons/io5";
import { Link } from "react-router-dom";
import Logo2 from "../assets/productImage/Asset 2.svg.png";

const AdminMobileMenu = () => {
  const [nav, setNav] = useState(false);
  const handleClick = () => setNav(!nav);
  return (
    <div className="fixed md:hidden  bg-gray-50 text-black font-medium  mt-0 z-[999]  top-0 left-0 w-full h-[50px] grid-rows-1 justify-between  text-[20px]">
      <div className="flex w-full flex-3 justify-between items-center ">
        <h1 className=" ml-4 items-center mt-2 pb-2">
          {" "}
          <Link to="/Admindashboard">AWYETU</Link>
        </h1>

        <div
          onClick={handleClick}
          className="md:hidden mt-2  mr-2 w-full flex justify-end z-10"
        >
          {!nav ? <IoMdMenu /> : <IoCloseSharp />}
        </div>
      </div>

      <div className="w-full h-full grid justify-center  md:didden">
        <div
          className={
            !nav
              ? "hidden "
              : "absolute  left-0 cursor-pointer h-screen w-full bg-gray-200 md:bg-transparent  "
          }
        >
          <div className="mt-[50px] justify-center text-center text-gray-900 text-[20px]">
            <p className=" p-4 m-2 ">
              <Link to="/Admindashboard">Dashboard</Link>
            </p>
            <p className=" p-4 m-2 ">
              <Link to="/AdminproductList">Products</Link>
            </p>
            <p className=" p-4 m-2 ">
              <Link to=""> Orders</Link>
            </p>
          </div>

          <div className="mt-[100px] justify-center text-red-500 items-center flex">
            <button className="border border-gray-500 px-4 rounded-md py-2">
              <Link to="">Logout</Link>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminMobileMenu;
