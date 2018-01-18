import React from 'react';
import './Projects.css';
import kitchen from './global-kitchen.png';

const Projects = () => (
  <section id="projects">
    <div className="project-tiles">
      <div className="project" id="h2Store">
        <h1 className="project-title">h2Store</h1>
        <div className="project-img">
          <img src="#" />
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
      </div>
    </div>
  </section>
);

export default Projects;
