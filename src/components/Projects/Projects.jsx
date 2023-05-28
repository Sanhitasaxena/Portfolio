import React from "react";
import "../Projects/projects.css";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { Image } from "@mui/icons-material";
import {ProjectsData} from "../../data/projects/projects"
// import weatherImg from "../../assets/img/projects/weather-app.png"

const Projects = () => {
  return (
    <>
    
      <div className="container-fluid" id="projects">
        <h2 className="text-center p-2" id="projectsHead">
        PROJECTS
        </h2>
        <VerticalTimeline>
          {ProjectsData.map(item => {
              return(
                <>
                <VerticalTimelineElement date={item.techStack}>
              <div id="project1">
                <div className="col-md-5" id="project1-desc">
                  <h2 className="text-center">{item.name}</h2>
                  {/* <p>
                    An app based on DOM manipulation. 
                    A basic javascript implementation!
                  </p> */}
                  <Image
                    src={
                      require("../../assets/img/projects/weather-app.png").default
                    }
                    height="80px"
                    width="80px"
                  />
                </div>
                <div id="project1-link" className="row">
                  <a href={item.live}>
                    VISIT WEBSITE
                  </a>
                  <a href={item.sourceCode}>
                     SOURCE CODE
                  </a>
                </div>
              </div>
            </VerticalTimelineElement>
                </>
              )
          })}
          
          {/* <VerticalTimelineElement 
          date="HTML & CSS">
            <div id="project2" className="row d-flex justify-content-around">
              <div className="col-md-5" id="project2-link">
                <a href="#">VISIT WEBSITE</a>
              </div>
              <div className="col-md-5" id="project2-desc">
                <h2>WEBSITE CLONE</h2>
                <p>
                  An implementation of HTML and CSS to make the replica of a reknowned 
                  website named "AnyDesk"
                </p>
              </div>
            </div>
          </VerticalTimelineElement> */}
          {/* <VerticalTimelineElement 
          date="MERN STACK">
            <div id="project3" className="row d-flex justify-content-around">
              <div className="col-md-5" id="project3-desc">
                <h2>CREATE POST APPLICATION</h2>
                <p>
                  Created a MERN Stack application and performed 
                  basic CRYD operations. 
                </p>
              </div>
              <div className="col-md-5" id="project3-link">
                <a href="#">VISIT WEBSITE</a>
              </div>
            </div>
          </VerticalTimelineElement> */}
          {/* <VerticalTimelineElement 
          date="REACTJS">
            <div id="project3" className="row d-flex justify-content-around">
            <div className="col-md-5" id="project3-link">
                <a href="#">VISIT WEBSITE</a>
              </div>
              <div className="col-md-5" id="project3-desc">
                <h2>PORTOFLIO</h2>
                <p>
                  Implemented concepts and libraries of npm and created a career profile based portfolio
                  website showing my skills and experiences and content.  
                </p>
              </div>
             
            </div>
          </VerticalTimelineElement> */}
          {/* <VerticalTimelineElement 
          date="DOM Manipulation">
            <div id="project3" className="row d-flex justify-content-around">
            <div className="col-md-5" id="project3-desc">
                <h2>Add Friends App</h2>
                <p>
                  A DOM Application to add friends names. 
                  Used events and callbacks to implement. 
                </p>
              </div>
            <div className="col-md-5" id="project3-link">
                {/* Do visit the project<br/> */}
          {/* <a href="https://sanhitasaxena.github.io/add-friends-app/">VISIT WEBSITE</a>
              </div> */}

          {/* </div> */}
          {/* </VerticalTimelineElement> */}
        </VerticalTimeline>
      </div>
    </>
  );
};

export default Projects;
