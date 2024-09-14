
import {React, useState }   from "react";
import Cardata from "./Cardata";
import Cards from "./Cards";
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
   
    const updatedData = productData.filter(item => item.id !== id);
    setProductData(updatedData);
  };





  return (
    <div className="bg-white relative mt-10   md:ml-[18%]  h-auto border-b-gray-300 max-w-screen-xl">
      <div className=" w-full  h-[70px] bg-white">
        <p className="p-4 font-bold ml-2">LATEST ORDER</p>
      </div>
     
      <TableContainer component={Paper}>
        
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
                  <Button variant="contained" color="primary">
                    <Link to="/Adminproductedith"> Edit</Link>
                  </Button>
                </TableCell>
                <TableCell>
                  <Button
                  
                    variant="contained"
                    sx={{
                      backgroundColor: "red",
                      '&:hover': { backgroundColor: "darkred" },
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
  );
};

export default AdminTableList;
