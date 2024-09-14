import { BrowserRouter, Routes, Route } from "react-router-dom";
import Collection from "./Pages/Collection";
import Home from "./Pages/Home";
import Verification from "./Pages/Verification"
import Payment from "./Pages/Payment"
import Productpage from "./Pages/Productpage";
import Checkout from "./Pages/Checkout";
import AdminDashboard from "./Pages/AdminDashboard";
import AdminProductPage from "./Pages/AdminProductPage";
import AdminProductEdit from "./Pages/AdminProductEdit";
import AdminOrderPage from "./Pages/AdminOrderPage";







function App() {



  return (
    <div>
     
      <BrowserRouter>
      
        <Routes>
          <Route index element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path='Collection' element={<Collection />} />
          <Route path="/verification" element={<Verification />} />
          <Route path="/payment" element={<Payment />} />
          <Route path="/Productpage" element={<Productpage />} />
          <Route path="/Checkout" element={<Checkout/>} />
          <Route path="/Admindashboard" element={<AdminDashboard/>} />
          <Route path="/AdminproductList" element={<AdminProductPage />} />
          <Route path="/Adminproductedith" element={<AdminProductEdit />} />
          <Route path="/Adminorderpage" element={<AdminOrderPage />} />
          
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
