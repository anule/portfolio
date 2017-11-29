
import React from 'react';
import './App.css';
import Navbar from './Navbar';

const App = () => {
  return (
    <div className="App">
      <Navbar />

      {/* MAIN SECTION*/}
      <main>
      <section id="bio">
        <div id="self-portrait">
          <img src="#" />
        </div>
        <div id="pitch">
          <h3>
          This is my pitch.
            {/*<!-- INSERT PITHY TITLE HERE-->*/}
          </h3>
          <p>
          These are all the words that make up my pitch.
            {/*<!-- INSERT POLISHED PITCH HERE -->*/}
          </p>
        </div>
      </section>
      <section id="projects">
        <div className="project-div">

        </div>
        {/*<!-- Create flex-box tiles with:
          * a screenshot of app
          * title of project
          * link to project (deploy and github)
          * description of project
          * my contribution
          * dev stack -->*/}
      </section>
      <section id="blog">
        {/*<!-- Use Medium API to seed with my 3 most recent posts -->*/}
        {/*<!-- Include link to medium post -->*/}
      </section>
    </main>
    </div>
  );
};

export default App;
