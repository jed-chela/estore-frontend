import React from "react";
import { CiSearch } from "react-icons/ci";

const Product = () => {
  return (
    <div className="h-[150px] w-[270px] md:flex flex-wrap ml-4 md:ml-[23rem] z-[-2] ">
      <h1 className="font-bold text-1xl md:text-2xl mb-[4px] mt-[70px] m:mt-10">PRODUCTS</h1>
      <div className=" md:w-[[300px] flex ">
        <div className="h-[50px] w-full md:w-[400px] flex justify-between items-center p-2 bg-gray-300  text-gray-800">
          <CiSearch className="text-3xl" />
          <input
            type="text"
            placeholder="Search"
            className=" h-full p-1
            bg-gray-300 focus:outline-none w-full border-none placeholder-gray-800 "
          />
        </div>

        <div className="hidden md:flex md:flex-wrap md:text-[10px] md:pb-3 md:ml-[30px] md:w-[60%] md:items-center ">
          <div className="w-1/5">
            <button className="w-[120px] p-1 border border-gray-400 text-gray-900 hover:bg-gray-300">
              NEW
            </button>
          </div>
          <div className="w-1/5">
            <button className="w-[120px] p-1 border border-gray-400 text-gray-900 hover:bg-gray-300">
              AWYETU COLLECTION
            </button>
          </div>
          <div className="w-1/5">
            <button className="w-[120px] p-1 border border-gray-400 text-gray-900 hover:bg-gray-300">
              SHIRTS
            </button>
          </div>
          <div className="w-1/5">
            <button className="w-[120px] p-1 border border-gray-400 text-gray-900 hover:bg-gray-300">
              TROUSERS
            </button>
          </div>
          <div className="w-1/5">
            <button className="w-[120px] p-1 border border-gray-400 text-gray-900 hover:bg-gray-300">
              SUITS
            </button>
          </div>
          <div className="w-1/5">
            <button className="w-[120px] p-1 border border-gray-400 text-gray-900 hover:bg-gray-300">
              BEST SELLERS
            </button>
          </div>
          <div className="w-1/5">
            <button className="w-[120px] p-1 border border-gray-400 text-gray-900 hover:bg-gray-300">
              T-SHIRTS
            </button>
          </div>
          <div className="w-1/5">
            <button className="w-[120px] p-1 border border-gray-400 text-gray-900 hover:bg-gray-300">
              AGBADAS
            </button>
          </div>
          <div className="w-1/5">
            <button className="w-[120px] p-1 border border-gray-400 text-gray-900 hover:bg-gray-300">
              JACKETS
            </button>
          </div>
          <div className="w-1/5">
            <button className="w-[120px] p-1 border border-gray-400 text-gray-900 hover:bg-gray-300">
              COATS
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
