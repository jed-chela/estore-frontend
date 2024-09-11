import React from 'react'
import picadm from '../assets/productImage/Group.png'

const AdminNavbar = () => {
  return (
    <div className='hidden w-auto ml-[15%] h-auto justify-end md:flex border-b-2 border-b-gray-300 items-center'>
        <img className='w-auto h-[40px] mt-2' src={picadm} alt="" />
        <div className=' p-2 mr-4'>
            
            <h1 className='md:text-[15px] lg:text-[20px]'>ADMIN</h1>
            <p className='text-gray-400 md:md:text-[10px] lg:text-[15px] '>admin@gmail.com</p>
        </div>
    </div>
    
  )
}

export default AdminNavbar