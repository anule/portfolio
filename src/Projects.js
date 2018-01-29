import React from 'react';
import './Projects.css';
import kitchen from './global-kitchen.png';
import h2store from './h2store.png';

const Projects = () => (
  <section id="projects">
    <h1 className="title">projects</h1>
    <div className="project-tiles">
      <div className="project" id="h2Store">
        <h1 className="project-title">h2Store</h1>
        <div className="project-img">
          <img src={h2store} alt="h2store homepage" />
        </div>
        <div className="buttons">
          <a href="http://h2store.herokuapp.com">
            <button className="button is-medium is-outlined demo" role="link">
              Demo
            </button>
          </a>
          <a href="https://github.com/anule/h2store">
            <button className="button is-medium is-outlined GitHub" role="link">
              Code
            </button>
          </a>
        </div>
        <div className="description">
          <span className="text">November 2017</span>
          <br />
          <p className="text">
            An e-commerce site which sells varieties of water.
          </p>
          <br />
          <p className="text">
            <b>Tech stack:</b> Express.js, React/Redux, Sass, PostgreSQL.
            Developed using Agile Development
          </p>
        </div>
      </div>

      <div className="project" id="global-kitchen">
        <h1 className="project-title">Global Kitchen</h1>
        <div className="project-img">
          <img src={kitchen} alt="Global Kitchen gameplay view" />
        </div>
        <div className="buttons">
          <a href="http://global-kitchen.herokuapp.com">
            <button className="button is-medium is-outlined demo" role="link">
              Demo
            </button>
          </a>
          <a href="https://github.com/GH-FoodNetwork/Global-Kitchen">
            <button className="button is-medium is-outlined GitHub" role="link">
              Code
            </button>
          </a>
        </div>
        <div className="description">
          <span className="text">November 2017 - December 2017</span>
          <br />
          <p className="text">
            A time-management simulation game designed to teach players about
            unique foods from around the world
          </p>
          <br />
          <p className="text">
            <b>Tech stack:</b> Redux, Pixi.js, JavaScript. <br /> Developed
            using Agile Development
          </p>
        </div>
      </div>
    </div>
  </section>
);

export default Projects;
