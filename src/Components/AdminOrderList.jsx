import { React, useState } from "react";
import OrderData from "./OrderData";
import picadm from "../assets/productImage/Group.png";
import { CiSearch } from "react-icons/ci";
import { IoChevronDown } from "react-icons/io5";
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

const AdminOrderList = () => {
  const [productData, setProductData] = useState(OrderData);

  return (
    <div className=" mt-2  md:ml-[16%] h-screen max-w-screen-xl">
      <div className="mt-[5rem] w-full flex  bg-none justify-end md:hidden">
        <img className="w-auto h-[30px]  mt-2" src={picadm} alt="" />

        <div className="p-2 mr-4  ">
          <h1 className="text-[10px]">ADMIN</h1>
          <p className="text-gray-400 text-[10px]  ">admin@gmail.com</p>
        </div>
      </div>
      <hr className="md:hidden" />
      <div className=" w-auto mt-[20px]  h-[70px] ">
        <p className="p-2  font-bold ml-2">ORDER LIST</p>
      </div>
      <div className=" relative  p-1  md:p-2  bg-[#D6D8D8] h-auto border-b-gray-300 max-w-screen-xl">
        <div className="grid md:flex md:p-2 mb-2">
          <div className="flex justify-between border-2 rounded-md  items-center md:m-1 bg-white">
            <input
              className="  h-[40px] outline-none"
              type="search"
              name=""
              id=""
              placeholder="Order ID"
            />
            <IoChevronDown className="m-2 text-gray-500 " />
          </div>
          <div className="flex justify-between  border-2 rounded-md items-center md:m-1 bg-white">
            <input
              className="  h-[40px] w-full outline-none"
              type="text"
              name=""
              id=""
              placeholder="Search"
            />
            <CiSearch className="m-2 text-gray-500" />
          </div>
          <div className="flex justify-between  border-2 rounded-md items-center md:m-1 bg-white">
            <input
              className="  h-[40px]  outline-none"
              type="text"
              name=""
              id=""
              placeholder="Status"
            />
            <IoChevronDown className="m-2 text-gray-500" />
          </div>
        </div>
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell className="">ORDER ID</TableCell>
                <TableCell className="">EMAIL</TableCell>
                <TableCell className="">CUSTOMER NAME</TableCell>
                <TableCell className="">PRODUCT NAME</TableCell>
                <TableCell className="">STATUS</TableCell>
                <TableCell className="">ACTION</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {productData.map((list) => (
                <TableRow key={list.id}>
                  <TableCell>{list.customerId}</TableCell>
                  <TableCell>{list.email}</TableCell>
                  <TableCell>{list.customerName}</TableCell>
                  <TableCell>{list.productName}</TableCell>
                  <TableCell>{list.status}</TableCell>
                  <TableCell>
                    <Button
                      variant="contained"
                      sx={{
                        backgroundColor: "red",
                        fontSize: "10px",
                        "&:hover": { backgroundColor: "darkred" },
                      }}
                    >
                      <Link to="/Adminorderview">View</Link>
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

export default AdminOrderList;
