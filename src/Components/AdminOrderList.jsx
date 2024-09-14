import { React, useState } from "react";
import OrderData from "./OrderData";
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

const AdminOrderList = () => {
  const [productData, setProductData] = useState(OrderData);

  return (
    <div className=' className=" relative mt-2    md:ml-[18%]  h-screen border-b-gray-300 max-w-screen-xl"'>
       <div className="mt-[5rem] w-full flex bg-none justify-end md:hidden">
        <img className="w-auto h-[30px]  mt-2" src={picadm} alt="" />

        <div className="p-2 mr-4">
          <h1 className="text-[10px]">ADMIN</h1>
          <p className="text-gray-400 text-[10px]  ">
            admin@gmail.com
          </p>
        </div>
      </div>
      <hr className="md:hidden" />
      
     
      <div className=" w-full mt-[5rem]  h-[70px] bg-white">
        <p className="p-4 font-bold ml-2">ORDER LIST</p>
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
                      "&:hover": { backgroundColor: "darkred" },
                    }}
                  >
                    View
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default AdminOrderList;
