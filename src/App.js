import { BrowserRouter, Routes, Route } from "react-router-dom";
import Collection from "./Pages/Collection";
import Home from "./Pages/Home";
import Verification from "./Pages/Verification"



function App() {

  



  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route index element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/collection" element={<Collection />} />
          <Route path="/verification" element={<Verification />} />
          
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
