import { useState } from "react";
import logo from "../images/logo.png";
import { FaBars, FaTimes } from "react-icons/fa";
import "./Navbar.css";

function Navbar() {
  const [nav, setNav] = useState(false);

  const handleNav = () => setNav(!nav);

  return (
    <div className="navbar">
      <div className="logo">
        <img src={logo} alt="brand-logo" />
      </div>
      <ul className={nav ? "nav-menu active" : "nav-menu"}>
        <li className="nav-items">
          <a href="/">Home</a>
        </li>
        <li className="nav-items">
          <a href="/">About</a>
        </li>
        <li className="nav-items">
          <a href="/">FAQ</a>
        </li>
        <li className="nav-items">
          <a href="/">Contact</a>
        </li>
      </ul>

      {/* Hamburger Menu */}
      <div className="hamburger" onClick={handleNav}>
        {nav ? (
          <FaTimes size={25} style={{ color: "#fff" }} />
        ) : (
          <FaBars size={25} style={{ color: "#fff" }} />
        )}
      </div>
    </div>
  );
}

export default Navbar;
