import React from 'react'
import picadm from '../assets/productImage/Group.png'

const AdminNavbar = () => {
  return (
    <div className='w-auto ml-[15%] h-auto justify-end flex border-b-2 border-b-gray-300 items-center'>
        <img className='w-auto h-[40px] mt-2' src={picadm} alt="" />
        <div className=' p-2 mr-4'>
            
            <h1>ADMIN</h1>
            <p className='text-gray-400'>admin@gmail.com</p>
        </div>
    </div>
  )
}

export default AdminNavbar