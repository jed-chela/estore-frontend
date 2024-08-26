import React, { useEffect, useState } from "react";
import { CiShoppingBasket } from "react-icons/ci";
import pic1 from '../assets/productImage/Group 19.png';


const Cards = () => {
  



  return (
    <div className="flex flex-wrap ml-[23rem] cursor-pointer w-6">
      <div className=" mt-[20px] border-gray-200 p-5">
        <div>
          <div className="w-[300px] ">
          <img src={pic1} alt="Coat" className="" />
          </div>

          <div className="flex justify-between items-center mb-2">
            <h3 className="flex-1 text-[12px] text-gray-500 mr-4">TRENCH COAT</h3>
            <del className="flex-2 mr-2 ">500,000</del>
            <div className="flex-2 font-medium ">
              450,000
            </div>
          </div>

          <div className='flex justify-between items-center' >
            <h2 className="text-[15px] font-medium">LEATHER COLLAR TRENCH COAT</h2>
            <div>
              <CiShoppingBasket className="text-2xl text-gray-500 text-right" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cards;
