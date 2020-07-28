import React from "react";
import "./style.css";
import Navigation from "./components/Navigation";
import AboutMe from './components/AboutMe';
import MiddleAbout from './components/MiddleAbout';

const App = () => {
  return (
    <div className="app">
        
        <Navigation />
        <AboutMe />
        <MiddleAbout />
    </div>
  );
};

export default App;
