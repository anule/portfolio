import React from 'react';

const Navbar = () => {
  return (
    <header>
      <div id="logo">
        <h1>
          <a href="#">Anule Ndukwu</a>
        </h1>
      </div>
      <nav>
        <div className="container">
          <span className="button is-large">
            About Me
          </span>
          <span className="button is-large">
            Projects
          </span>
          <span className="button is-large">
            Blog
          </span>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
