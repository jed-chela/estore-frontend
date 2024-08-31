import React from 'react'

const AdminSidebar = () => {
  return (
    <div className='fixed h-full w-[15%] mr-[85%] border-r-2'>
        
        <a href="/Admindashboard">
            <h1 className='text-gray-800 text-3xl mt-4 justify-center flex mb-[50px] '> AWYETU</h1>
        </a>

        <div className=''>
            <div className='text-blue-950  w-[200px] hover:bg-blue-950 hover:text-white hover:rounded-[3px] m-4 p-1 text-center'>
                <a href="">
                    <p>Dashboard</p>
                </a>
            </div>
            <div className='text-blue-950  w-[200px] hover:bg-blue-950 hover:text-white hover:rounded-[3px] m-4 p-1 text-center '>
                <a href="">
                    <p>Products</p>
                </a>
            </div>
            <div className='text-blue-950  w-[200px] hover:bg-blue-950 hover:text-white hover:rounded-[3px] m-4 p-1 text-center'>
                <a href="">
                    <p>Orders</p>
                </a>
            </div>
        </div>

        
     
    </div>
  )
}

export default AdminSidebar