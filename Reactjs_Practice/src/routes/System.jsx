import { Route, Routes } from "react-router-dom";
import Navbar from "../container/Nav/Navbar";
import HomePage from "../view/HomePage";
import Product from "../view/Product";


function System() {
  return (
   <Navbar>
    <Routes>
    <Route path="/" element={<HomePage />} />
          <Route path="/product" element={<Product />} />
          {/* <Route path="/login" element={<Login />} /> */}
    </Routes>
   </Navbar>
  );
}

export default System;
