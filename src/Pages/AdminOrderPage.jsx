import React from 'react'
import AdminNavbar from '../Components/AdminNavbar'
import AdminSidebar from '../Components/AdminSidebar'
import AdminMobileMenu from '../Components/AdminMobileMenu'
import AdminOrderList from '../Components/AdminOrderList'

const AdminOrderPage = () => {
  return (
    <div>
        <AdminMobileMenu />
        <AdminSidebar />
        <AdminNavbar />
        <AdminOrderList />
    </div>
  )
}

export default AdminOrderPage