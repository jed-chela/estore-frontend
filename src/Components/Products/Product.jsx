import React from "react";
import { CiSearch } from "react-icons/ci";

const Product = () => {
  return (
    <div className="h-[150px] will-change-auto lg:w-full mr-4 md:grid lg:flex flex-wrap ml-4 md:ml-6 lg:ml-[20rem] z-[-2] items-center ">
      <h1 className="font-bold w-auto text-1xl md:text-[20px] mb-[4px] mt-[70px] m:mt-10 ">PRODUCTS</h1>
      <div className=" md:grid md:gap-4  lg:flex ">
        <div className="h-[50px] w-full md:w-[400px] flex justify-between items-center p-2 bg-gray-300  text-gray-800">
          <CiSearch className="text-3xl" />
          <input
            type="text"
            placeholder="Search"
            className=" h-full p-1
            bg-gray-300 focus:outline-none w-full border-none placeholder-gray-800 "
          />
        </div>

        <div className="hidden md:grid md:grid-cols-5  cursor-default  md:text-[10px] md:pb-3 md:ml-0  md:w-full items-center ">
          <div className="lg:w-1/5">
            <button className="w-[100px] lg:w-[120px] m-1 p-1 md:border border-gray-300 text-gray-900 hover:bg-gray-300">
              NEW
            </button>
          </div>
          <div className="lg:w-1/5">
            <button className="w-[100px] lg:w-[120px] m-1 p-1 md:border border-gray-300 text-gray-900 hover:bg-gray-300">
              COLLECTION
            </button>
          </div>
          <div className="lg:w-1/5">
            <button className="w-[100px] lg:w-[120px] m-1 p-1 md:border border-gray-300 text-gray-900 hover:bg-gray-300">
              SHIRTS
            </button>
          </div>
          <div className="lg:w-1/5">
            <button className="w-[100px] lg:w-[120px] m-1 p-1 md:border border-gray-300 text-gray-900 hover:bg-gray-300">
              TROUSERS
            </button>
          </div>
          <div className="lg:w-1/5">
            <button className="w-[100px] lg:w-[120px] m-1  p-1 md:border border-gray-300 text-gray-900 hover:bg-gray-300">
              SUITS
            </button>
          </div>
          <div className="lg:w-1/5">
            <button className="w-[100px] lg:w-[120px] m-1 p-1  md:border border-gray-300 text-gray-900 hover:bg-gray-300">
              BEST SELLERS
            </button>
          </div>
          <div className="lg:w-1/5">
            <button className="w-[100px] lg:w-[120px] m-1 p-1 md:border border-gray-300 text-gray-900 hover:bg-gray-300">
              T-SHIRTS
            </button>
          </div>
          <div className="lg:w-1/5">
            <button className="w-[100px] lg:w-[120px] m-1 p-1 md:border border-gray-300 text-gray-900 hover:bg-gray-300">
              AGBADAS
            </button>
          </div>
          <div className="lg:w-1/5">
            <button className="w-[100px] lg:w-[120px] m-1 p-1 md:border border-gray-300 text-gray-900 hover:bg-gray-300">
              JACKETS
            </button>
          </div>
          <div className="lg:w-1/5">
            <button className="w-[100px] lg:w-[120px] m-1 p-1 md:border border-gray-300 text-gray-900 hover:bg-gray-300">
              COATS
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
