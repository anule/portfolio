import React from 'react';
import './App.css';
import Navbar from './Navbar';
import About from './About';
import Projects from './Projects';
import Contact from './Contact';

const App = () => (
  <div className="App container">
    <Navbar />

    {/* MAIN SECTION*/}
    <main>
      <About />
      <Projects />
      <Contact />
    </main>
  </div>
);

export default App;
