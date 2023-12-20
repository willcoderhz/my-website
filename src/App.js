import React from 'react';
import Navbar from './components/Navbar';
import WelcomePage from './components/WelcomePage';
import AboutMe from './components/AboutMe';
import Projects from './components/Projects';
import Footer from './components/Footer';
import Education from './components/Education';
import './App.css';
import Certification from './components/Certification';

function App() {
  return (
    <div>
      <Navbar />
      <section id="home">
        <WelcomePage />
      </section>
      {/*<section id="about">
        <AboutMe />
      </section>*/}
      <section id="projects">
        <Projects />
      </section>
      <section id="education">
        <Education />
      </section>
      {/*<section id="certification">
        <Certification />
      </section>*/}
      <Footer />
    </div>
  );
}

export default App;

