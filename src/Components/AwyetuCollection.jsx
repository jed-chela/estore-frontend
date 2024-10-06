import React, { useState, useEffect } from "react";
import { CiSearch } from "react-icons/ci";
import { Link } from "react-router-dom";
import Logo from "../assets/productImage/Awlogo4.png";
import Cardata from "./Cardata";
import Cards from "./Cards";
import Sidebar from "./Sidebar";

const AwyetuCollection = () => {
  const [filteredProducts, setFilteredProducts] = useState(Cardata);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedSize, setSelectedSize] = useState("");

  // Function to handle filtering by status
  const handleFilter = (filterType) => {
    const filtered = Cardata.filter(
      (product) => product.type.toLowerCase() === filterType.toLowerCase()
    );
    setFilteredProducts(filtered);
  };

  // Effect to filter products based on the search query
  useEffect(() => {
    const filtered = Cardata.filter(
      (product) =>
        (product.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
          product.category.toLowerCase().includes(searchQuery.toLowerCase())) &&
        (selectedSize === "" || product.size.toLocaleLowerCase() === selectedSize.toLowerCase())
    );
    setFilteredProducts(filtered);
  }, [searchQuery, selectedSize]); // Runs whenever searchQuery or selectedSize changes
  return (
    <>
      <Sidebar onSizeSelect={setSelectedSize} />
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
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)} // Update search query state
            />
          </div>

          <div className="hidden md:grid md:grid-cols-5  cursor-default  md:text-[10px] md:pb-3 md:ml-0  md:w-auto  items-center ">
            <button
              onClick={() => handleFilter("New")}
              className="w-[100px]  xl:w-[130px] m-1 p-1 md:border border-gray-300 text-gray-900 hover:bg-gray-300"
            >
              NEW
            </button>

            <button
              onClick={() => handleFilter("Timeless Tradition")}
              className="w-[100px]   xl:w-[130px] m-1 p-1 md:border border-gray-300 text-gray-900 hover:bg-gray-300"
            >
              TIMELESS TRADITION
            </button>

            <button
              onClick={() => handleFilter("Shirts")}
              className="w-[100px]   xl:w-[130px] m-1 p-1 md:border border-gray-300 text-gray-900 hover:bg-gray-300"
            >
              SHIRTS
            </button>

            <button
              onClick={() => handleFilter("Trousers")}
              className="w-[100px] xl:w-[130px] m-1 p-1 md:border border-gray-300 text-gray-900 hover:bg-gray-300"
            >
              TROUSERS
            </button>

            <button
              onClick={() => handleFilter("Suits")}
              className="w-[100px]  xl:w-[130px] m-1  p-1 md:border border-gray-300 text-gray-900 hover:bg-gray-300"
            >
              SUITS
            </button>

            <button
              onClick={() => handleFilter("Best Sellers")}
              className="w-[100px]  xl:w-[130px] m-1 p-1  md:border border-gray-300 text-gray-900 hover:bg-gray-300"
            >
              BEST SELLERS
            </button>

            <button
              onClick={() => handleFilter("T-Shirts")}
              className="w-[100px]  xl:w-[130px] m-1 p-1 md:border border-gray-300 text-gray-900 hover:bg-gray-300"
            >
              T-SHIRTS
            </button>

            <button
              onClick={() => handleFilter("Agbadas")}
              className="w-[100px]  xl:w-[130px] m-1 p-1 md:border border-gray-300 text-gray-900 hover:bg-gray-300"
            >
              AGBADAS
            </button>

            <button
              onClick={() => handleFilter("Jackets")}
              className="w-[100px]   xl:w-[130px] m-1 p-1 md:border border-gray-300 text-gray-900 hover:bg-gray-300"
            >
              JACKETS
            </button>

            <button
              onClick={() => handleFilter("Coats")}
              className="w-[100px]  xl:w-[130px] m-1 p-1 md:border border-gray-300 text-gray-900 hover:bg-gray-300"
            >
              COATS
            </button>
          </div>
        </div>
      </div>

      <div className="md:grid md:ml-[23%] grid-cols-1 md:grid-cols-3  lg:mt-[2rem]  z-[-3] w-auto ">
        {filteredProducts.map((product) => (
          <Cards
            key={product.id}
            img={product.img}
            title={product.title}
            category={product.category}
            privPrice={product.privPrice}
            newPrice={product.newPrice}
          />
        ))}
      </div>
    </>
  );
};

export default AwyetuCollection;
