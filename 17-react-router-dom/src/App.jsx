//import router and routes
import { Route } from "react-router-dom";
import { Routes } from "react-router-dom";

//import pages
import Contact from "./pages/Contact";
import Home from "./pages/Home";
import About from "./pages/About";
import Product from "./pages/Product";
import Navbar from "./components/Navbar";
import Women from "./pages/Women";
import Men from "./pages/Men";
import Navbar2 from "./components/Navbar2";
import NotFound from "./pages/NotFound";
import Courses from "./pages/Courses";
import CourseDetail from "./pages/CourseDetail";

const App = () => {
  return (
    <div className="container">
      <Navbar />
      <Navbar2 />

      {/* //Container of routes which wrap all the routes */}
      <Routes>
        //Basic routing
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />

        //Nested Routing
        <Route path="/product" element={<Product />}>
          <Route path="/product/men" element={<Men />} />
          <Route path="/product/women" element={<Women />} />
        </Route>

        //Dynamic Routing
        <Route path="/Courses" element={<Courses />} />
        <Route path="/courses/:id" element={<CourseDetail />} />

        //404 Routing
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
};

export default App;
