import React from "react";
import AdminMobileMenu from "../Components/AdminMobileMenu";
import AdminSidebar from "../Components/AdminSidebar";
import AdminNavbar from "../Components/AdminNavbar";
import ProductAdd from "../Components/ProductAdd";

const AdminNewProduct = () => {
  return (
    <div>
      <AdminMobileMenu />
      <AdminSidebar />
      <AdminNavbar />
      <ProductAdd />
    </div>
  );
};

export default AdminNewProduct;
