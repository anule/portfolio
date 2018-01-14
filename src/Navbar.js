import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => (
  <nav className="navbar" role="navigation" aria-label="main navigation">
    <div className="navbar-brand">
      <div id="logo">
        <h1>Anule Ndukwu</h1>
      </div>

      <span className="navbar-item">
        <NavLink to="#about">About Me</NavLink>
      </span>
      <span className="navbar-item">
        <NavLink to="#projects">Projects</NavLink>
      </span>
      <span className="navbar-item">
        <NavLink to="#blog">Contact</NavLink>
      </span>
    </div>
  </nav>
);

export default Navbar;
