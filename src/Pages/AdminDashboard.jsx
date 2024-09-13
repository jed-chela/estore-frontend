import React from "react";
import AdminSidebar from "../Components/AdminSidebar";
import AdminNavbar from "../Components/AdminNavbar";
import Dashbard from "../Components/Dashbard";
import DashboardItem from "../Components/DashboardItem";
import AdminMobileMenu from "../Components/AdminMobileMenu";
import AdminTable from "../Components/AdminTable";

const AdminDashboard = () => {
  return (
    <div>
     <AdminMobileMenu />
      <AdminSidebar />
      <AdminNavbar />
      <Dashbard />
      <DashboardItem />
      <AdminTable />
    </div>
  );
};

export default AdminDashboard;
