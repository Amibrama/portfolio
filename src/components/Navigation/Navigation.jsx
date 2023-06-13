import React, { useState } from "react";
import hamburger from "../../assets/hamburger.png";
import close from "../../assets/close.png";
import "./Navigation.css";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <div className="navigation">
      <div className="nav-bar">
        <button className="cti">
          <div className="CTI">Ibrahim.Dev</div>
        </button>
        <button
          className={`menu-icon ${isOpen ? "open" : ""}`}
          onClick={toggleMenu}
        >
          <img src={isOpen ? close : hamburger} alt="Menu" />
        </button>
      </div>
      <div className={`links ${isOpen ? "open" : ""}`}>
        <a href="#home" className="link" onClick={closeMenu}>
          Home
        </a>
        <a href="#about" className="link" onClick={closeMenu}>
          About
        </a>
        <a href="#project" className="link" onClick={closeMenu}>
          Project
        </a>
        <a href="#contact" className="link" onClick={closeMenu}>
          Contact
        </a>
      </div>
    </div>
  );
};

export default Navigation;
