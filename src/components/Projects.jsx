import React, { useState } from "react";

const Projects = () => {
  return (
    <div className="projects container-fluid text-center">
        <div className='container'>
        <p className="projectsP pt-5 pb-5">PROJECTS</p>
        <div className="row pb-5 ">
          <div className="pic1 col-sm-12 col-md-6 col-lg-3">
            <div className="bamBack">
              <a class="bamBtn" href="/zach/">
                <p className="text-white">Bamazon Shopper</p>
                <p className="nodeP small">Node Project</p>
                <i class="fas fa-plus fa-2x mt-3"></i>
              </a>
            </div>
          </div>
          <div className="pic1 col-sm-12 col-md-6 col-lg-3">
            <div className="liriBack">
              <a class="bamBtn" href="/zach/">
                <p className="text-white">Liri Bot</p>
                <p className="nodeP small">Node/Axios</p>
                <i class="fas fa-plus fa-2x mt-3"></i>
              </a>
            </div>
          </div>
          <div className="pic1 col-sm-12 col-md-6 col-lg-3">
            <div className="groundzBack">
              <a class="bamBtn" href="/zach/">
                <p className="text-white">Groundz</p>
                <p className="nodeP small">MERN Project</p>
                <i class="fas fa-plus fa-2x mt-3"></i>
              </a>
            </div>
          </div>
          <div className="pic1 col-sm-12 col-md-6 col-lg-3">
            <div className="gruberBack">
              <a class="bamBtn" href="/zach/">
                <p className="text-white">Gruber</p>
                <p className="nodeP small">MERN Project</p>
                <i class="fas fa-plus fa-2x mt-3"></i>
              </a>
            </div>
          </div>
        </div>
        </div>
      </div>
  );
};

export default Projects;
