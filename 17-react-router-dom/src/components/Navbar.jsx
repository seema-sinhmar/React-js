// Import link from router dom
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="navCont">
      <h2>shreyians</h2>
      <div className="tags">
        
        {/* //Like as anchor tag but they not render the page */}
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
