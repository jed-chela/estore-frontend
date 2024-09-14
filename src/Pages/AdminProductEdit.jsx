import React from 'react'
import AdminMobileMenu from '../Components/AdminMobileMenu'
import AdminSidebar from '../Components/AdminSidebar'
import AdminNavbar from '../Components/AdminNavbar'
import AdminEdit from '../Components/AdminEdit'

const AdminProductEdit = () => {
  return (
    <div>
        <AdminMobileMenu />
        <AdminSidebar />
        <AdminNavbar />
        <AdminEdit />
    </div>
  )
}

export default AdminProductEdit