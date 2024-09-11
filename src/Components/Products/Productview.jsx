import React, { useContext, useEffect, useState } from "react";
import picz from "../../assets/productImage/image 11.png";
import { FaStar } from "react-icons/fa6";
import { useParams } from "react-router-dom";




const ProductView = () => {
/*
  const {Cardata}= useContext(ShopContext);
  const {id} = useParams();
  

  useEffect(() => {
    const fetchData = async () => {
      try{
        
        const product = data.filter((p) => p.id == id);
        console.log(product)
        setProducts(product[0])
      } catch (error) {
        console.log("Error fetching data:", error)
      }
    }
    
    fetchData();


  }, [id] )

  const {img, title, category, newPrice} = products;



  return (
    <div className=" h-fit flex w-auto ">
      <div className=" pt-[70px] pb-[70px]">
        <img className="h-[150vh] w-auto " src={img} alt="" />
      </div>
      <div>
        <div className="pt-[70px] ml-[100px]  w-auto   ">
          <h1 className=" font-bold text-3xl justify-cente">
            TRENCH COAT WITH LEATHER COLLAR
          </h1>
          <div className="flex mt-6 text-2xl items-center">
            <FaStar className="text-gray-400 " />
            <FaStar className="text-gray-400 " />
            <FaStar className="text-gray-400 " />
            <FaStar className="text-gray-400 " />
            <FaStar className="text-gray-400 " />
            <p className="pl-4 font-medium">0 REVIEWS</p>
          </div>
          <div className="flex mt-4">
            <p className="mr-[20px]">CATEGORY:</p>
            <p className="font-bold">TRENCH COAT</p>
          </div>
          <div className="flex mt-4">
            <p className="mr-[20px]">AVAILABILITY:</p>
            <p className="font-bold">25</p>
          </div>
          <div className="mt-[40px] ] ">
            <p className="font-bold text-[50px] ml-[30px] text-blue-950">
              400,000.00
            </p>
          </div>
          <a href="/Checkout">

          <button className="mt-[50px] p-2 border-2 rounded-[8px] bg-orange-500 text-gray-200 text-[20px] font-medium w-[400px]">
            BUY NOW
          </button>
          </a>
        </div>
        <div className=" border-[1px] border-b-gray-100 mt-[30px] w-full"></div>
        <div>
          <h1 className="mt-[40px] font-medium ml-[100px] text-[20px]">
            DESCRIPTION
          </h1>
          <p className="ml-[100px] ">
            {" "}
            
          </p>
        </div>
        <div className=" border-[1px] border-b-gray-100  mt-[40px] w-full"></div>
        <div className="ml-[100px]">
          <h1 className="text-yellow-600 text-[25px] underline   mt-[40px]">
            REVIEWS (0)
          </h1>
        </div>
        <div className="flex justify-center items-center">
          <div className="text-center">
            <p className="text-2xl  mt-[40px]">REVIEW (0)</p>
            <div className="flex items-center justify-center  mt-[20px]">
              <FaStar className="text-gray-400 " />
              <FaStar className="text-gray-400 " />
              <FaStar className="text-gray-400 " />
              <FaStar className="text-gray-400 " />
              <FaStar className="text-gray-400 " />
              <p className=" mt-[40px]font-medium ml-4">0 REVIEWS</p>
            </div>
            <button className="mt-6 border-[1px] bg-gray-900 w-[200px] text-white p-2 text-[20px] mb-6">
              WRITE A REVIEW
            </button>
            <p>There are no reviews for this product</p>
          </div>
        </div>
      </div>
    </div>
  );*/
};

export default ProductView
