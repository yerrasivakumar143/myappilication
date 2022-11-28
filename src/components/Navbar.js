import React from "react";
import { useState } from "react";
import { NavLink } from "react-router-dom";
import { ReactComponent as Hamburger } from '../assets/menu-hamburger-svgrepo-com.svg'
import './navbar.css'
const Navbar = () => {
  const [showNavbar, setShowNavbar] = useState(false);

  const handleShowNavbar = () => {
    setShowNavbar(!showNavbar);
  };
return (
    <nav className="navbar">
      <div className="container">
        <div className="logo">{/* <Brand /> */} <b>TOURISM</b></div>
        <div className="menu-icon" onClick={handleShowNavbar}>
          < Hamburger />
        </div>
        <div className={`nav-elements  ${showNavbar && "active"}`}>
        <ul>
            <li>
              <NavLink to="/">Home</NavLink>
            </li>
            <li>
              <NavLink to="/blog">Blog</NavLink>
            </li>
            <li>
              <NavLink to="/services">Services</NavLink>
            </li>
            <li>
              <NavLink to="/about">About</NavLink>
            </li>
            <li>
              <NavLink to="/SignIn">SignIn</NavLink>
            </li>
         </ul>
        </div>
      </div>
    </nav>
  
  
   
  );
};

export default Navbar;
