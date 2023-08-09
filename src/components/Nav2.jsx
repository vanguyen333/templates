import Home from "../pages/Home";
import About from "../pages/About";
import Contact from "../pages/Contact";
import React, { useState } from "react";

import { BrowserRouter, Routes, Route, Link, NavLink } from "react-router-dom";
const Nav2 = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };
  return (
    <div>
      {" "}
      <BrowserRouter>
        <header>
          <nav className="flex justify-between px-10 bg-blue-400 py-4">
            <h1>Brand Name</h1>
            <button
              className="md:hidden text-white"
              onClick={toggleMobileMenu}
              aria-label="Toggle Menu"
            >
              ☰
            </button>
            <div
              className={`md:flex md:space-x-10 ${
                isMobileMenuOpen ? "block" : "hidden"
              }`}
            >
              <Link to="/">Home</Link>

              <NavLink
                to="/about"
                onClick={toggleMobileMenu}
                className="block mt-4 md:inline-block md:mt-0 text-blue-900 hover:text-blue-600"
              >
                About
              </NavLink>
              <NavLink
                to="/contact"
                onClick={toggleMobileMenu}
                className="block mt-4 md:inline-block md:mt-0 text-blue-900 hover:text-blue-600"
              >
                Contact
              </NavLink>
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
    </div>
  );
};

export default Nav2;
