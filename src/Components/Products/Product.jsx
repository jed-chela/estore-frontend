import React from "react";
import { CiSearch } from "react-icons/ci";
import { Link } from "react-router-dom";
import Logo from "../../assets/productImage/Awlogo4.png";

const Product = () => {
  return (
    <div className="h-[150px]   md:grid w-auto flex-wrap ml-4 md:ml-[23%]    z-[-2] items-center ">
      <div className="md:hidden mt-[20%] text-3xl text-center ml-[21%] justify-center">
        <Link to="/home">
          <img className="w-[150px]" src={Logo} alt="" />
        </Link>
      </div>
      <h1 className="font-bold w-auto text-[15px] md:text-[20px] mb-[4px] mt-[20%] md:mt-0  ">
        PRODUCTS
      </h1>
      <div className=" md:grid md:gap-2 w-auto  lg:flex ">
        <div className="h-[50px]  w-auto lg:m-2   flex  items-center p-2 bg-gray-300  text-gray-800">
          <CiSearch className="text-3xl" />
          <input
            type="text"
            placeholder="Search"
            className=" h-full p-1
            bg-gray-300 focus:outline-none w-auto xl:w-[400px] border-none placeholder-gray-800 "
          />
        </div>

        <div className="hidden md:grid md:grid-cols-5  cursor-default  md:text-[10px] md:pb-3 md:ml-0  md:w-auto  items-center ">
          <button className="w-[100px]  xl:w-[130px] m-1 p-1 md:border border-gray-300 text-gray-900 hover:bg-gray-300">
            NEW
          </button>

          <button className="w-[100px]   xl:w-[130px] m-1 p-1 md:border border-gray-300 text-gray-900 hover:bg-gray-300">
            TIMELESS TRADITION
          </button>

          <button className="w-[100px]   xl:w-[130px] m-1 p-1 md:border border-gray-300 text-gray-900 hover:bg-gray-300">
            SHIRTS
          </button>

          <button className="w-[100px] xl:w-[130px] m-1 p-1 md:border border-gray-300 text-gray-900 hover:bg-gray-300">
            TROUSERS
          </button>

          <button className="w-[100px]  xl:w-[130px] m-1  p-1 md:border border-gray-300 text-gray-900 hover:bg-gray-300">
            SUITS
          </button>

          <button className="w-[100px]  xl:w-[130px] m-1 p-1  md:border border-gray-300 text-gray-900 hover:bg-gray-300">
            BEST SELLERS
          </button>

          <button className="w-[100px]  xl:w-[130px] m-1 p-1 md:border border-gray-300 text-gray-900 hover:bg-gray-300">
            T-SHIRTS
          </button>

          <button className="w-[100px]  xl:w-[130px] m-1 p-1 md:border border-gray-300 text-gray-900 hover:bg-gray-300">
            AGBADAS
          </button>

          <button className="w-[100px]   xl:w-[130px] m-1 p-1 md:border border-gray-300 text-gray-900 hover:bg-gray-300">
            JACKETS
          </button>

          <button className="w-[100px]  xl:w-[130px] m-1 p-1 md:border border-gray-300 text-gray-900 hover:bg-gray-300">
            COATS
          </button>
        </div>
      </div>
    </div>
  );
};

export default Product;
