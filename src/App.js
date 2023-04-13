import {Routes, Route} from "react-router-dom"
import Home from "./Components/Pages/Home";
import Product from "./Components/Pages/Product";
import Technology from "./Components/Pages/Technology";
import Navbar from "./Components/Navbar";
import Html from "./Components/Pages/Html";
import Css from "./Components/Pages/Css";
import Javascript from "./Components/Pages/Javascript";
import React from "./Components/Pages/React";
import "./index.css"
function App() {
  return (
    <>
      <Navbar />
     <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/product" element={<Product />} />
      <Route path="/tech" element={<Technology />}>
      <Route path = "html" element={<Html />} />
      <Route path = "css" element={<Css />}/>
      <Route path = "react" element={<React />}/>
      <Route path = "javascript" element={<Javascript />}/>

      </Route>
     
     </Routes>
    </>
  );
}

export default App;
