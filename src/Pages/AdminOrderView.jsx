import React from 'react'
import AdminMobileMenu from '../Components/AdminMobileMenu'
import AdminSidebar from '../Components/AdminSidebar'
import AdminNavbar from '../Components/AdminNavbar'
import AdminView from '../Components/AdminView'

const AdminOrderView = () => {
  return (
    <div>
        <AdminMobileMenu />
        <AdminSidebar />
        <AdminNavbar />
        <AdminView />
    </div>
  )
}

export default AdminOrderView