// src/config/routes.js
import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Signup from "../pages/Signup"; // Ensure this matches the file name
import ProductUpload from "../pages/ProductUpload";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/login' element={<Login />} />
      <Route path='/signup' element={<Signup />} />
      <Route path='/product-upload' element={<ProductUpload />} />
    </Routes>
  );
};

export default AppRoutes;
