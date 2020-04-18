import React, { useState } from "react";
import { FaAlignRight } from "react-icons/fa";
import { Link } from "react-router-dom";
import Logo from "../../images/logo.svg";
import "./Navbar.styles.css";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const handleToggle = () => setIsOpen(!isOpen);

  return (
    <nav className="navbar">
      <div className="nav-center">
        <div className="nav-header">
          <Link to="/beach-resort/">
            <img className="image" src={Logo} alt="Beach Resort" />
          </Link>
          <button type="button" className="nav-btn" onClick={handleToggle}>
            <FaAlignRight className="nav-icon" />
          </button>
        </div>
        <ul
          className={
            isOpen ? "nav-links show-nav link-text" : "nav-links link-text"
          }
        >
          <li onClick={handleToggle}>
            <Link to="/beach-resort/">Home</Link>
          </li>
          <li onClick={handleToggle}>
            <Link to="/beach-resort/rooms">Rooms</Link>
          </li>
        </ul>
      </div>
      <div className="curved-shape"></div>
    </nav>
  );
};

export default Navbar;
