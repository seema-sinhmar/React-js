import React from "react";
import Women from "./Women";
import Men from "./Men";
import { Link, Outlet } from "react-router-dom";
const Product = () => {
  return (
    <div>
      <div style={{display:'flex', gap:'10px'}}>
        <Link to="/product/men">Men</Link>
        <Link to="/product/women">Women</Link>
      </div>
      //To See the content inside the Link tag pages
      <Outlet/>
    </div>
  );
};

export default Product;
