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
          <div className="container">
          {/* TODO: Add NavLinks */}
            <span className="button">About Me</span>
            <span className="button">Projects</span>
            <span className="button">Blog</span>
          </div>
        </nav>
      </header>
    );
  }
}


export default Navbar;
