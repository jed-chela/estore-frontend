import React from "react";
import AdminSidebar from "../Components/AdminSidebar";
import AdminNavbar from "../Components/AdminNavbar";
import Dashbard from "../Components/Dashbard";
import DashboardItem from "../Components/DashboardItem";
import AdminMobileMenu from "../Components/AdminMobileMenu";

const AdminDashboard = () => {
  return (
    <div>
     <AdminMobileMenu />
      <AdminSidebar />
      <AdminNavbar />
      <Dashbard />
      <DashboardItem />
    </div>
  );
};

export default AdminDashboard;
