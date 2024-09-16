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
      title: "LEATHER COLLAR TRENCH COAT",
      quantity: 43,
      category: "Coat",
    },
    {
      id: 2,
      date: "August 2024",
      amount: "450,000",
      status: "Paid",
      title: "LIGHTWEIGHT DENIM SHIRT",
      quantity: 43,
      category: "Shirt",
    },
    {
      id: 3,
      date: "September 2024",
      amount: "650,000",
      status: "Pending",
      title: "WOOL BLENDED SUIT SET",
      quantity: 43,
      category: "Suit",
    },
  ];

  return (
    <div className="grid md:ml-[18%] gap-4  lg:flex">
      {" "}
      <TableContainer
        component={Paper}
        sx={{ maxWidth: 600 }}
        className="bg-white mt-10 p-10 border-2 justify-center  border-gray-500   "
      >
        <div className="text-gray-700 font-medium w-fit">Latest Orders</div>
        <Table sx={{ minWidth: 400 }} aria-label="simple table">
          <TableHead>
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
      <TableContainer
        component={Paper}
        sx={{ maxWidth: 600 }}
        className="bg-white mt-10 p-10 border-2 border-gray-500   "
        
      >
        <div className="text-gray-700 font-medium w-fit">Trending Products</div>
        <Table sx={{ minWidth: 400 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell className="">Order ID</TableCell>
              <TableCell className="">Product Name</TableCell>
              <TableCell className="">Quantity</TableCell>
              <TableCell className="">Category</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <TableRow key={row.id}>
                <TableCell>{row.id}</TableCell>
                <TableCell className="">{row.title}</TableCell>
                <TableCell className="">{row.quantity}</TableCell>
                <TableCell className="">{row.category}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default AdminTable;
