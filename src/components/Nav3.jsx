//this navbar is not responsive
import { BrowserRouter, Routes, Route, Link, NavLink } from "react-router-dom";
import Home from "../pages/Home";
import About from "../pages/About";
import Contact from "../pages/Contact";
const Nav3 = () => {
  return (
    <div className="">
      <BrowserRouter>
        <div className="navbar flex justify-between px-10 font-bold py-10">
          <div>
            <Link to="/">Brand Name</Link>
          </div>

          <div className="flex gap-10">
            <NavLink to="/">Home</NavLink>
            <NavLink to="/about">About</NavLink>
            <NavLink to="/contact">Contact</NavLink>
          </div>
        </div>
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

export default Nav3;
