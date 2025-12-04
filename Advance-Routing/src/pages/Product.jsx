import React from "react";
import { Outlet, Route, Routes } from "react-router-dom";
import { Link  } from "react-router-dom";
const Product = () => {
  return (
    <div>
      
      <div className="flex justify-center py-4 gap-5 text-2xl ">
        <Link to='/product/men'>Men</Link>
        <Link to='/product/women'>Women</Link>
      </div>

      <Outlet />
    </div>
  );
};

export default Product;
