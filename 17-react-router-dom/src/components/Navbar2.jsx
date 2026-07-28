import React from "react";
import { useNavigate } from "react-router-dom";

const Navbar2 = () => {
    let navigate = useNavigate();
  return (
    <div>
      <div style={{ display: "flex", backgroundColor: "cyan", gap: "30px" }}>
        <button
          onClick={() => {
            navigate("/");
          }}
        >
          Return Home Page
        </button>
        <button
          onClick={() => {
            navigate(-1);
          }}
        >
          Back
        </button>
        <button
          onClick={() => {
            navigate(+1);
          }}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default Navbar2;
