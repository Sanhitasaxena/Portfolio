import React from "react";
import "../Projects/projects.css";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
// import { Image } from "@mui/icons-material";
import { ProjectsData } from "../../data/projects/projects";

const Projects = () => {
  return (
    <>
      <div className="container-fluid" id="projects">
        <h2 className="text-center p-2" id="projectsHead">
          PROJECTS
        </h2>
        <VerticalTimeline>
          {ProjectsData.map((item) => {
            return (
              <>
                <VerticalTimelineElement
                  date={item.techStack}
                  className="timeline"
                >
                  <div id="project1" className="row">
                    <h2 className="text-center">{item.name}</h2>
                    <div className="col-md-8 col-sm-12 mt-2" id="project1-desc">
                      {item.img ? (
                        <img
                          src={item.img}
                          height="100%"
                          width="100%"
                          alt="project thumbnail"
                        />
                      ) : (
                        <>
                          <p className="display-1 text-black text-center mt-5">
                            Thumbnail coming soon...
                          </p>
                          <i className="text-black visit-project">Do visit the project!</i>
                        </>
                      )}
                    </div>
                    <div id="project1-link" className="col-md-4 col-sm-12 mt-4">
                      <a href={item.live} 
                      target="_blank"
                      className="btn btn-primary mt-4">
                        VISIT WEBSITE
                      </a>
                      <br />
                      <a
                        href={item.sourceCode}
                        className="btn btn-primary mt-4"
                      >
                        SOURCE CODE
                      </a>
                    </div>
                  </div>
                </VerticalTimelineElement>
              </>
            );
          })}
        </VerticalTimeline>
      </div>
    </>
  );
};

export default Projects;
