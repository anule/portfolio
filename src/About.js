import React from 'react';
import './About.css';
import headshot from './profile-pic.jpg';

const About = () => (
  <section id="about">
    <div id="self-portrait">
      <img src={headshot} alt="profile pic" />
    </div>
    <div className="info">
      <div id="bio">
        <h1 className="title">bio</h1>
        <p className="text">Hi, I'm Anule!</p>
        <br />
        <p className="text">
          I'm a former marketing professional, now a software engineer. In my
          free time, I'm an amateur documentary filmmaker/photographer.
        </p>
        <br />
        <p className="text">
          I love developing applications that are easy to use, accessible for
          everyone, and advance social progress.
        </p>
        <br />
        <p className="text">
          I graduated from the University of Chicago in 2016 and completed The
          Grace Hopper Program at Fullstack Academy in December 2017.
        </p>
      </div>
      <div id="skills">
        <h1 className="title">skills</h1>
        <p className="text">
          JavaScript, Node.js, Neo4j Databases, CypherQL, PostgreSQL, SQL,
          MySQL, PHP, Express.js, Webpack, React/Redux, Git, Heroku, Agile
          Development
        </p>
      </div>
    </div>
  </section>
);

export default About;
