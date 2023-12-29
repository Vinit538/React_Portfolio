import React from "react";
import "./ProjectsStyle.css";
import ProjectCards from "./ProjectCards";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFolder } from "@fortawesome/free-regular-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";
import ProjectData from "./ProjectData.js";
const Projects = () => {
  const pData = ProjectData;

  return (
    <div className="ProjectsPage project" id="project">
      <div>
        <p className="pageHeading">Some Things I’ve Built</p>
      </div>
      <div className="Project">
        <div className="projectContainer">
          <div className="ProjectOne">
            <img
              src="./Images/LearnGuruProject.png"
              className="projectImage"
              alt="LearnGuruProject"
            />
          </div>
          <div className="projectInfo">
            <span className="projectType">Full Stack Project</span>
            <span className="projectTitle">Learn Guru</span>
            <span className="projectCard">
              "In Learn Guru project, I served as a dedicated learner and
              Trainer, fostering a collaborative environment for seamless
              knowledge flow. Through curated learning experiences, empowered
              individuals to grow and excel in their pursuits."
            </span>
            <span className="projectSkills">
              <span>React JS,</span>
              <span>Java,</span>
              <span>Spring Boot,</span>
              <span>My Sql</span>
            </span>
            <span>
              <span className="projectLinks">
                <span>
                  <a
                    href="https://github.com/Vinit538/Learn-Guru"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FontAwesomeIcon
                      icon={faFolder}
                      size="2xl"
                      className="projectIcon"
                    />
                  </a>
                </span>
                <span>
                  <a
                    href="https://learn-guru.vercel.app/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FontAwesomeIcon
                      icon={faUpRightFromSquare}
                      size="2xl"
                      className="projectIcon"
                    />
                  </a>
                </span>
                <span>
                  <a
                    href="https://github.com/Vinit538/Learn-Guru"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FontAwesomeIcon
                      icon={faGithub}
                      size="2xl"
                      className="projectIcon"
                    />
                  </a>
                </span>
              </span>
            </span>
          </div>
        </div>
        <div className="projectContainer">
          <div className="projectInfo2">
            <span className="projectType">Front-End Project</span>
            <span className="projectTitle">Iconography</span>
            <span className="projectCard2">
              "Iconography it is web application clone and Showcase is a curated
              collection of stunning images, each telling its own story with
              locations, captivating descriptions."
            </span>
            <span className="projectSkills">
              <span>React JS,</span>
              <span>Java Script,</span>
              <span>ES6,</span>
              <span>CSS</span>
            </span>
            <span>
              <span className="projectLinks">
                <span>
                  <a
                    href="https://github.com/Vinit538/Iconography"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FontAwesomeIcon
                      icon={faFolder}
                      size="2xl"
                      className="projectIcon"
                    />
                  </a>
                </span>
                <span>
                  <a
                    href="https://iconography.vercel.app/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FontAwesomeIcon
                      icon={faUpRightFromSquare}
                      size="2xl"
                      className="projectIcon"
                    />
                  </a>
                </span>
                <span>
                  <a
                    href="https://github.com/Vinit538/Iconography"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FontAwesomeIcon
                      icon={faGithub}
                      size="2xl"
                      className="projectIcon"
                    />
                  </a>
                </span>
              </span>
            </span>
          </div>

          <div className="ProjectOne">
            <img
              src="./Images/IconographyProject.png"
              className="projectImage2"
            />
          </div>
        </div>
        <div className="projectContainer">
          <div className="ProjectOne">
            <img src="./Images/DSProject.png" className="projectImage" />
          </div>
          <div className="projectInfo">
            <span className="projectType">
              Linear data structures
            </span>
            <span className="projectTitle" style={{fontSize:'25px'}}>STAND ALONE APPLICATION</span>
            <span className="projectCard">
              " The Main agenda of the project is to showcase the operations and
              working of different linear data structures ."
            </span>
            <span className="projectSkills">
              <span>Java,</span>
              <span>OOPS,</span>
              <span>Swing,</span>
              <span>DS</span>
            </span>
            <span>
              <span className="projectLinks">
                <span>
                  <a
                    href="https://github.com/Vinit538/Data-Structure-Stand-Alone-Application"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FontAwesomeIcon
                      icon={faFolder}
                      size="2xl"
                      className="projectIcon"
                    />
                  </a>
                </span>
                {/* <span>
                  <a
                    href="https://twitter.com/Vinit_Karatagi"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FontAwesomeIcon
                      icon={faUpRightFromSquare}
                      size="2xl"
                    className="projectIcon"
                    />
                  </a>
                </span> */}
                <span>
                  <a
                    href="https://github.com/Vinit538/Data-Structure-Stand-Alone-Application"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FontAwesomeIcon
                      icon={faGithub}
                      size="2xl"
                      className="projectIcon"
                    />
                  </a>
                </span>
              </span>
            </span>
          </div>
        </div>
      </div>
      <ProjectCards />
    </div>
  );
};

export default Projects;
