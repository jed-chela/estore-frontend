import React from "react";
import AdminSidebar from "../Components/AdminSidebar";
import AdminNavbar from "../Components/AdminNavbar";
import Dashbard from "../Components/Dashbard";
import DashboardItem from "../Components/DashboardItem";

const AdminDashboard = () => {
  return (
    <div>
     
      <AdminSidebar />
      <AdminNavbar />
      <Dashbard />
      <DashboardItem />
    </div>
  );
};

export default AdminDashboard;
