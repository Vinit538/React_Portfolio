import React from "react";
import "./ProjectsStyle.css";
import ProjectCards from "./ProjectCards";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFolder } from "@fortawesome/free-regular-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";

const Projects = () => {
  return (
    <div className="ProjectsPage project">
      <div>
        <p className="pageHeading">Some Things I’ve Built</p>
      </div>
      <div className="Project">
        <div className="projectContainer">
          <div className="ProjectOne">
            <img src="./Images/LearnGuruProject.png" className="projectImage" />
          </div>
          <div className="projectInfo">
            <span className="projectType">Full Stack Project</span>
            <span className="projectTitle">Learn Guru</span>
            {/* <span  className='projectSubTitle'>SubTitle</span> */}
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
                  <FontAwesomeIcon
                    className="projectIcon"
                    icon={faFolder}
                    size="2xl"
                    // style={{ color: "#5eafc9" }}
                  />
                </span>
                  <span>
                    <FontAwesomeIcon
                      className="projectIcon"
                      icon={faUpRightFromSquare}
                      size="2xl"
                    //   style={{ color: "#1f51a8" }}
                    />
                  </span>
                  <span>
                    <FontAwesomeIcon
                    className="projectIcon"
                      icon={faGithub}
                      size="2xl"
                    //   style={{ color: "#2755a5" }}
                    />
                  </span>
              </span>
            </span>
          </div>
        </div>
        <div className="projectContainer">
          <div className="projectInfo2">
            <span className="projectTitle">Project Title</span>
            <span className="projectSubTitle">SubTitle</span>
            <span className="projectCard2">Project Card</span>
            <span className="projectSkills">Skills</span>
          </div>

          <div className="ProjectOne">
            <img src="./Images/LearnGuruProject.png" className="projectImage2" />
          </div>
        </div>
        <div className="projectContainer">
          <div className="ProjectOne">
            <img src="./Images/LearnGuruProject.png" className="projectImage" />
          </div>
          <div className="projectInfo">
            <span className="projectType">Full Stack Project</span>
            <span className="projectTitle">Learn Guru</span>
            {/* <span  className='projectSubTitle'>SubTitle</span> */}
            <span className="projectCard">Project Card</span>
            <span className="projectSkills">React JS, Java,Spring Boot </span>
          </div>
        </div>
      </div>
      <ProjectCards />
    </div>
  );
};

export default Projects;
