import React from 'react';

const AboutMe = () =>{
    return (
        <div className="info-section container-fluid">
      <div className="container-fluid">
        <div className="row ">
          <div className="col text-center">
            <p className="hey">Zach Cohen</p>
            <p className="aboutMe">
              I am a developer, who is passionate about community and
              technology. Let's start creating together.
            </p>
            <hr></hr>
            <div className='row text-center'>
              <div className='col-12 text-center'>
              <a href='#'><i class="github fab fa-github fa-3x mr-4"></i></a>
              <a href='#'><i class="linkedin fab fa-linkedin-in fa-2x mr-4"></i></a>
              <a href='#'><i class="linkedin fab fa-gitlab fa-2x mr-4"></i></a>

              </div>
            </div>
            <div className='aarowRow row'>
              <div className='col'>
              <a href='#'><i class="downAarow fas fa-chevron-circle-down fa-3x mb-4"></i></a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    )
}

export default AboutMe;