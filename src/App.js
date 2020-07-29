import React from "react";
import "./style.css";
import Navigation from "./components/Navigation";
import AboutMe from './components/AboutMe';
import MiddleAbout from './components/MiddleAbout';
import SkillSet from './components/SkillSet';
import Projects from './components/Projects';
import Footer from './components/Footer';

const App = () => {
  return (
    <div className="app">
        
        <Navigation />
        <AboutMe />
        <MiddleAbout />
        <SkillSet />
        <Projects />
        <Footer />
    </div>
  );
};

export default App;
