import React from "react";
import { CiSearch } from "react-icons/ci";

const Product = () => {
  return (
    <div className="h-[150px] flex flex-wrap ml-[23rem] z-[-2] ">
      <h1 className="font-bold text-2xl mb-[4px] mt-10">PRODUCTS</h1>
      <div className=" w-[[300px] flex ">
        <div className="h-[50px] w-[400px] flex justify-between items-center p-2 bg-gray-300  text-gray-800">
          <CiSearch className="text-3xl" />
          <input
            type="text"
            placeholder="Search"
            className=" h-full p-1
            bg-gray-300 focus:outline-none w-full border-none placeholder-gray-800 "
          />
        </div>

        <div className="flex flex-wrap text-[10px] pb-3 ml-[30px] w-[60%] items-center ">
          <div className="w-1/5">
            <button className="w-[120px] p-1 border border-gray-400 text-gray-900">
              NEW
            </button>
          </div>
          <div className="w-1/5">
            <button className="w-[120px] p-1 border border-gray-400 text-gray-900">
              AWYETU COLLECTION
            </button>
          </div>
          <div className="w-1/5">
            <button className="w-[120px] p-1 border border-gray-400 text-gray-900">
              SHIRTS
            </button>
          </div>
          <div className="w-1/5">
            <button className="w-[120px] p-1 border border-gray-400 text-gray-900">
              TROUSERS
            </button>
          </div>
          <div className="w-1/5">
            <button className="w-[120px] p-1 border border-gray-400 text-gray-900">
              SUITS
            </button>
          </div>
          <div className="w-1/5">
            <button className="w-[120px] p-1 border border-gray-400 text-gray-900">
              BEST SELLERS
            </button>
          </div>
          <div className="w-1/5">
            <button className="w-[120px] p-1 border border-gray-400 text-gray-900">
              T-SHIRTS
            </button>
          </div>
          <div className="w-1/5">
            <button className="w-[120px] p-1 border border-gray-400 text-gray-900">
              AGBADAS
            </button>
          </div>
          <div className="w-1/5">
            <button className="w-[120px] p-1 border border-gray-400 text-gray-900">
              JACKETS
            </button>
          </div>
          <div className="w-1/5">
            <button className="w-[120px] p-1 border border-gray-400 text-gray-900">
              COATS
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
