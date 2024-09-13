import React from 'react'
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";









const AdminTableList = () => {
     
  const rows = [
    {
      id: 1,
      date: "july 2024",
      quantity: "550,000",
      status: "Pending",
    },
    {
      id: 2,
      date: "August 2024",
      quantity: "450,000",
      status: "Paid",
    },
    {
      id: 3,
      date: "September 2024",
      quantity: "650,000",
      status: "Pending",
    },
    {
      id: 3,
      date: "September 2024",
      quantity: "650,000",
      status: "Pending",
    },
    {
      id: 3,
      date: "September 2024",
      quantity: "650,000",
      status: "Pending",
    },
    {
      id: 3,
      date: "September 2024",
      quantity: "650,000",
      status: "Pending",
    },
    {
      id: 3,
      date: "September 2024",
      quantity: "650,000",
      status: "Pending",
    },
    {
      id: 3,
      date: "September 2024",
      quantity: "650,000",
      status: "Pending",
    },
  ];








  return (
    <div  className="bg-white relative mt-10 p-10 border-2 border-gray-500   md:ml-[18%]  h-auto border-b-gray-300 max-w-screen-xl">
      <TableContainer component={Paper} >
        <div className="text-gray-700 font-medium w-fit">Latest Orders</div>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead >
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
          {rows.map((row) => (
            <TableRow key={row.id}>
              <TableCell>{row.id}</TableCell>
              <TableCell className="">{row.date}</TableCell>
              <TableCell className="">{row.quantity}</TableCell>
              <TableCell className="">{row.status}</TableCell>
              
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    </div>
  )
}

export default AdminTableList