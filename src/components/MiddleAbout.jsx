import React from "react";

const MiddleAbout = () => {
  return (
    <div id="section1" className="middleAboutSection container-fluid">
      <div className="row">
          <div className='col-2'></div>
        <div className="col-sm-12 col-md-12 col-lg-8 text-white">
          <p className="aboutZach mt-5">About Me</p>
          <p className="aboutParagraph">
            Ex-beverage professional turned full-stack developer with a focus on
            object-oriented programming
             and the user experience. An experienced
            manager and educator who values communication and is
             able to be both
            a leader and a productive team player. A creative problem-solver
            with the ability to 
            learn and adapt to new situations quickly. Goal
            oriented and always working with the end result in mind.
          </p>
          <p className="aboutZach">Contact Details <button type="button" class="resumeBtn btn btn-secondary"><i class="fas fa-download mr-1"></i>Download Resume</button>
</p> 
          <p className='listName'>Zachary Cohen</p>
          <p className='listStamford'>Stamford, CT</p>
          <p className='listPhone'> 914.804.6443</p>
          <p className='listEmail'>zcohen88@yahoo.com</p>
        </div>
        <div className='col-2'>

        </div>
      </div>
    </div>
  );
};

export default MiddleAbout;
