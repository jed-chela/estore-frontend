import React from "react";
import { CiShoppingBasket } from "react-icons/ci";



function Cards(props) {
  return (
    <div className=" m-1   cursor-pointer  md:w-auto">
      <div className=" mt-[20px] md:mt-[7rem] border-gray-200 p-5 ">
      
        <div>
        <a href="/Productpage">
          <div className="md:w-full w-full ">
          <img src={props.img} alt="" className="mx-auto w-full hover:scale-105 transition-all duration-300 " />
          </div>

          <div className="flex justify-between items-center mb-2">
            <h3 className="flex-1 text-[12px] md:text-[12px] text-gray-500 mr-4">
              {props.category}
            </h3>
            <del className="flex-2 mr-2 md:text-[10px] ">{props.privPrice}</del>
            <div className="flex-2 font-medium md:text-[10px] ">{props.newPrice}</div>
          </div>

          <div className="flex justify-between items-center">
            <h2 className="text-[15px] md:text-[10px] font-medium">
             {props.title}
             
            </h2>
            <div>
              <CiShoppingBasket className="text-2xl text-gray-500 text-right" />
            </div>
          </div>
          </a>
        </div>
       
      </div>
    </div>
  );
};

export default Cards;
