import React from "react";
import "../Projects/projects.css";

const Projects = () => {
  return (
    <>
      <div className="container-fluid" id="projects">
        <h2 className="text-center p-2" id="projectsHead">PROJECTS</h2>
        <div id="project1" className="row d-flex justify-content-around">
          <div className="col-md-5" id="project1-desc">
            <h2>EXPENSE TRACKER</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Repudiandae, doloribus nihil alias dolorem nulla ipsum veniam ut
              autem, magnam quisquam aut consequuntur ex vitae tenetur optio
              culpa iusto enim? Quia?
            </p>
          </div>
          <div className="col-md-5" id="project1-link">
            <b>link to project</b>
          </div>
        </div>
        <div id="project2" className="row d-flex justify-content-around">
        <div className="col-md-5" id="project2-link">
            <b>link to project</b>
        </div>
          <div className="col-md-5" id="project2-desc">
            <h2>WEATHER APPLICATION</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Repudiandae, doloribus nihil alias dolorem nulla ipsum veniam ut
              autem, magnam quisquam aut consequuntur ex vitae tenetur optio
              culpa iusto enim? Quia?
            </p>
          </div>
        </div>
        <div id="project3" className="row d-flex justify-content-around">
          <div className="col-md-5" id="project3-desc">
            <h2>E-COMMERCE WEBSITE</h2>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Enim
              dolorem laudantium pariatur ducimus quis dolor nihil ea, ipsa,
              nobis nemo quasi quo corporis. Magni illo beatae praesentium
              voluptates nostrum tempora.
            </p>
          </div>
          <div className="col-md-5" id="project3-link">
            <b>link to the project</b>
          </div>
        </div>
      </div>
     </> 
    
  );
};

export default Projects;
