import React from "react";
import Navbar from "./componenets/Navbar";
import Footer from "./componenets/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import { Routes, Route } from "react-router-dom";
import Product from "./pages/Product";
import Men from "./pages/Men";
import Women from "./pages/Women";
import Errorpage from "./pages/Errorpage";
import Coursedetail from "./pages/Coursedetail";
import Course from "./pages/Course";

const App = () => {
  return (
    <div className="bg-[#0a0908] h-screen text-[#fefcfb]">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/course" element={<Course />} />
        <Route path="/course/:id" element={<Coursedetail />} />

        <Route path="/product" element={<Product />}>
          <Route path="men" element={<Men />} />
          <Route path="women" element={<Women />} />
        </Route>

        <Route path="*" element={<Errorpage />} />
      </Routes>

      <Footer />
    </div>
  );
};

export default App;
