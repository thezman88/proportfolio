import React, { useState } from "react";

const Projects = () => {
  return (
    <div className="projects container-fluid text-center">
      <div className="container">
        <p className="projectsP pt-5 pb-5">PROJECTS</p>
        <div className="row pb-5 ">
          <div className="pic1 col-sm-12 col-md-6 col-lg-4">
            <div className="bamBack">
              <a class="bamBtn" href="/jane/">
                <p className="text-white">Bamazon Shopper</p>
                <p className="nodeP small">Node Project</p>
                <i class="fas fa-plus fa-2x mt-3"></i>
              </a>
            </div>
          </div>
          
          <div className="pic1 col-sm-12 col-md-6 col-lg-4">
            <div className="bamBack">
              <button
                type="button"
                class="btn btn-primary"
                data-toggle="modal"
                data-target="#exampleModal"
              >
                Launch demo modal
              </button>
            </div>
          </div>
        </div>
      </div>
      <div class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLabel">Modal title</h5>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body">
        ...
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
        <button type="button" class="btn btn-primary">Save changes</button>
      </div>
    </div>
  </div>
</div>
    </div>
  );
};

export default Projects;
