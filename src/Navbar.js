import React from 'react';
import './Navbar.css';

const Navbar = () => (
  <nav className="navbar" role="navigation" aria-label="main navigation">
    <h1 className="navbar-item">Anule Ndukwu</h1>

    <div className="navbar-menu">
      <span className="navbar-item">
        <a href="#about">About Me</a>
      </span>
      <span className="navbar-item">
        <a href="#projects">Projects</a>
      </span>
      <span className="navbar-item">
        <a href="#blog">Contact</a>
      </span>
    </div>
  </nav>
);

export default Navbar;
