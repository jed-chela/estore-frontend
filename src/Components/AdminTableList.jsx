import { React, useState } from "react";
import Cardata from "./Cardata";
import Cards from "./Cards";
import picadm from "../assets/productImage/Group.png";
import {
  TableContainer,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  Paper,
  Button,
} from "@mui/material";
import { Link } from "react-router-dom";

const AdminTableList = () => {
  const [productData, setProductData] = useState(Cardata);
  const handleDelete = (id) => {
    const updatedData = productData.filter((item) => item.id !== id);
    setProductData(updatedData);
  };

  return (
    <div className=" relative mt-2 ml-[18%]  bg-gray-300 w-full md:w-auto  h-full border-b-gray-300 max-w-screen-xl">
      <div className="mt-[5rem] w-full bg-white  flex justify-end md:hidden">
        <img className="w-auto h-[30px]  mt-2" src={picadm} alt="" />

        <div className="p-2 mr-4">
          <h1 className="text-[10px]">ADMIN</h1>
          <p className="text-gray-400 text-[10px]  ">admin@gmail.com</p>
        </div>
      </div>
      <hr className="md:hidden" />

      <div className="  w-full  ">
        <p className="p-2 font-bold  bg-white">PRODUCT LIST</p>
      </div>
      <div className=" relative  md:mt-2   p-2 md:p-4 h-auto border-b-gray-300 max-w-screen-xl">
        <TableContainer component={Paper}>
          <div className="flex justify-between items-center">
            <p className="p-4 font-bold">PRODUCTS</p>
            <div className="hidden md:block mr-2">
              <button className="border-2 bg-[#0B202E] rounded-md m-1 text-[10px] text-[#D6D8D8] p-2"> <Link to="/Adminproductadd">Add Product</Link></button>
              <button className="border-2 bg-[#0B202E] rounded-md m-1 text-[10px] text-[#D6D8D8] p-2">Filters</button>
              <button className="border-2 bg-[#0B202E] rounded-md m-1 text-[10px] text-[#D6D8D8] p-2">Download All</button>
            </div>
          </div>
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell className="">Product Name</TableCell>
                <TableCell className="">Price</TableCell>
                <TableCell className="">Quantity</TableCell>
                <TableCell className="">Category</TableCell>
                <TableCell className="">Edit Product</TableCell>
                <TableCell className="">Delete product</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {productData.map((item) => (
                <TableRow key={item.id}>
                  <TableCell>
                    <div className="flex items-center">
                      <img
                        src={item.img}
                        alt=""
                        className="w-[30px] h-[32px] rounded-[50%] mr-[10px] object-cover"
                      />
                      {item.title}
                    </div>
                  </TableCell>
                  <TableCell className="">{item.newPrice}</TableCell>
                  <TableCell className="">{item.quantity}</TableCell>
                  <TableCell className="">{item.category}</TableCell>
                  <TableCell>
                    <Button variant="contained"
                    
                    sx={{
                        backgroundColor: "#092c3f",
                        fontSize: "10px",
                        "&:hover": { backgroundColor: "#061f2d" },
                      }}>
                      <Link to="/Adminproductedit"> Edit</Link>
                    </Button>
                  </TableCell>
                  <TableCell>
                    <Button
                      variant="contained"
                      sx={{
                        backgroundColor: "red",
                        fontSize: "10px",
                        "&:hover": { backgroundColor: "darkred" },
                      }}
                      onClick={() => handleDelete(item.id)}
                    >
                      Delete
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </div>
    </div>
  );
};

export default AdminTableList;
