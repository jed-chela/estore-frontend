import React from 'react'
import Logo2 from '../assets/productImage/AwLogo2.png'
import { Link } from "react-router-dom";

const AdminSidebar = () => {
  return (
    <div className='hidden md:block md:fixed h-full font-medium w-[15%]  mr-[85%] border-r-2 z-[999] bg-white'>
        
        <a href="/Admindashboard">
            <h1 className='text-gray-800 md:text-2xl md:mt-4 md:justify-center flex mb-[50px] '>
                <img className='w-[100px] h-[50px]' src={Logo2} alt="" />
            </h1>
        </a>

        <div className='md:w-auto justify-center xl:text-center'>
            <div className='text-[#0B202E] w-auto  xl:w-[200px] hover:bg-[#0B202E] hover:text-white hover:rounded-[3px] md:m-4 p-1 '>
                <a href="/Admindashboard">
                    <p>Dashboard</p>
                </a>
            </div>
            <div className='text-[#0B202E]w-auto  xl:w-[200px] hover:bg-[#0B202E] hover:text-white hover:rounded-[3px] m-4 p-1  '>
                <a href="/AdminproductList">
                    <p>Products</p>
                </a>
            </div>
            <div className='text-[#0B202E] w-auto   xl:w-[200px] hover:bg-[#0B202E] hover:text-white hover:rounded-[3px] m-4 p-1'>
                <a href="/Adminorderpage">
                    <p>Orders</p>
                </a>
            </div>
        </div>


        <div className='h-full flex relative md:top-64  xl:top-96 justify-center '>
          <div className='mt-5 '>
            <h1 className='text-red-600 hover:text-[#0B202E] border-2 lg:p-2 w-[100px] rounded-md text-center lg:m-2'><Link to="/home">Logout</Link></h1>
          </div>
        </div>

        
     
    </div>
  )
}

export default AdminSidebar