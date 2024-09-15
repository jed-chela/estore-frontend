import React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

const AdminTable = () => {
    
  const rows = [
    {
      id: 1,
      date: "july 2024",
      amount: "550,000",
      status: "Pending",
    },
    {
      id: 2,
      date: "August 2024",
      amount: "450,000",
      status: "Paid",
    },
    {
      id: 3,
      date: "September 2024",
      amount: "650,000",
      status: "Pending",
    },
  ];
  

  return ( 
    <TableContainer component={Paper} sx={{ maxWidth: 650 }} className="bg-white relative mt-10 p-10 border-2 border-gray-500   md:ml-[18%]  h-auto border-b-gray-300 overflow-x-auto w-full md:w-3/4 lg:w-1/2">
        <div className="text-gray-700 font-medium w-fit">Latest Orders</div>
      <Table sx={{ maxWidth: 650 }} aria-label="simple table">
        <TableHead >
          <TableRow>
            <TableCell className="">S/N</TableCell>
            <TableCell className="">Payment Date</TableCell>
            <TableCell className="">Amount</TableCell>
            <TableCell className="">Order status</TableCell>
            
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.id}>
              <TableCell>{row.id}</TableCell>
              <TableCell className="">{row.date}</TableCell>
              <TableCell className="">{row.amount}</TableCell>
              <TableCell className="">{row.status}</TableCell>
              
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default AdminTable;
