import video from "../assets/Awyetu.mp4";
import { IoMdMenu } from "react-icons/io";
import { IoCloseSharp } from "react-icons/io5";
import React, { useState } from "react";
import Mobilepage from "./Mobilepage";
import "animate.css";

const Hero = () => {
  const [nav, setNav] = useState(false);
  const handleClick = () => setNav(!nav);
  return (
    <div className="relative w-full h-full">
      <video
        className=" mt-10  md:mt-0 w-full md:h-full md:object-cover"
        src={video}
        autoPlay
        muted
        loop
      >
       
      </video>
      <div className="absolute top-[35%] left-[25%] sm:top-[50%] sm:left-[30%] md:top-[40%] md:left-[25%] xl:left-[35%]   text-center md:justify-between items-center ">
          <h1 className="text-[20px] font-light text-white ">
            <a
              className="text-[20px] sm:text-[30px] md:text-[50px] mb-4 text-center"
              href="/Home"
            >
              Timeless Tradition
            </a>
          </h1>

          <button className="md:py-[5px] md:px-[30px] md:mt-10 text-[15px] md:text-[20px] font-medium mt-4  text-white underline hover:border hover:rounded-[3px]">
            <a href="/collection">S H O P</a>
          </button>
        </div>

      <div className="fixed md:absolute  bg-gray-50 text-black font-medium bg-opacity-70 mt-0 z-[999]  md:bg-transparent  top-0 left-0 w-full h-auto flex justify-between md:font-thin md:mt-2 text-[20px] md:text-white">
        <div className="hidden md:block  sm: text-[10px] md:text-[20px] flex-1 ">
          <a className="ml-2 md:ml-4" href="">
            SAFARI
          </a>
          <a className="ml-2" href="">
            KAFTAN
          </a>
        </div>

        <div className="mr-[60%] ml-2 sm:mr-[75%] sm:ml-4 items-center  h-auto md:w-full md:ml-[25%] xl:ml-[35%] flex- flex-2 text-[20px] md:text-5xl">
          <a className=" " href="/Home">
            AWYETU
          </a>
        </div>
        <div onClick={handleClick} className="md:hidden mt-2  z-10">
          {!nav ? <IoMdMenu /> : <IoCloseSharp />}
        </div>

        <div className="w-full md:w-auto mt-[40px]  ">
          <div
            className={
              !nav
                ? "hidden ": "absolute left-0 flex-1 cursor-pointer h-screen w-full bg-white md:bg-transparent   md:min-h-fit md:text-white"
            }
          >
            {" "}
            <ul  className=
                "flex items-center mt-[4%] flex-col md:flex-row md:absolute ">
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
    </div>
  );
};

export default Hero;
