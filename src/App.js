import { BrowserRouter, Routes, Route } from "react-router-dom";
import Collection from "./Pages/Collection";
import Home from "./Pages/Home";
import Verification from "./Pages/Verification"
import Payment from "./Pages/Payment"
import Productpage from "./Pages/Productpage";
import Checkout from "./Pages/Checkout";






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
          
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
