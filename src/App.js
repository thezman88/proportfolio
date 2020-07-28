import React from "react";
import "./style.css";
import Navigation from "./components/Navigation";
import AboutMe from './components/AboutMe';
import MiddleAbout from './components/MiddleAbout';
import SkillSet from './components/SkillSet';

const App = () => {
  return (
    <div className="app">
        
        <Navigation />
        <AboutMe />
        <MiddleAbout />
        <SkillSet />
    </div>
  );
};

export default App;
