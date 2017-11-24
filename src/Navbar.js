import React, { Component } from "react";

class Navbar extends Component {
  render() {
    return (
      <header>
        <div id="logo">
          <h1>
            <a href="index.html">Anule Ndukwu</a>
          </h1>
        </div>
        <nav>
          <ul>
          {/* Add NavLinks */}
            <li className="button">About Me</li>
            <li className="button">Projects</li>
            <li className="button">Blog</li>
          </ul>
        </nav>
      </header>
    );
  }
}


export default Navbar;
