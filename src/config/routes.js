import React from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Signup from "../pages/Signup";
import ProductUpload from "../pages/ProductUpload";
import Navbar from "../components/Navbar";

const AppRoutes = () => {
  const location = useLocation();
  const currentPath = location.pathname;

  return (
    <>
      <Navbar currentPath={currentPath} />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/login' element={<Login />} />
        <Route path='/signup' element={<Signup />} />
        <Route path='/product-upload' element={<ProductUpload />} />
      </Routes>
    </>
  );
};

export default AppRoutes;
