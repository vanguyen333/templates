//This navbar works react router dom, not have hamburger responsive
import Home from "../pages/Home";
import About from "../pages/About";
import Contact from "../pages/Contact";

import { BrowserRouter, Routes, Route, Link, NavLink } from "react-router-dom";

const Navbar1 = () => {
  return (
    <BrowserRouter>
      <header>
        <nav className="flex justify-between px-10 bg-pink-400 py-4">
          <h1>Brand Name</h1>
          <div className="gap-10 flex">
            <Link to="/">Home</Link>

            <NavLink to="/about">About</NavLink>
            <NavLink to="/contact">Contact</NavLink>
          </div>
        </nav>
      </header>
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>
    </BrowserRouter>
  );
};

export default Navbar1;
