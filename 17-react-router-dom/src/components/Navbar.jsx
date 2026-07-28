import React from "react";
import { Link, useNavigate } from "react-router-dom";

const Navbar = () => {
  let Navigate = useNavigate();

  return (
    <div className="navCont">
      <h2>shreyians</h2>
      <div className="tags">
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/product">Product</Link>
        <Link to="/contact">Contact</Link>
        <Link to="/courses">Course</Link>
      </div>
    </div>
  );
};

export default Navbar;
