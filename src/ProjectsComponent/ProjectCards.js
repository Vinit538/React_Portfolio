

import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFolder } from "@fortawesome/free-regular-svg-icons";
import { faGithub, faExternalLinkAlt } from "@fortawesome/free-brands-svg-icons";
import { faUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";
import { Tooltip as ReactTooltip } from "react-tooltip";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";
import AllProjects from "./AllProjects.js";

const ProjectCards = () => {
  const [pData, setPData] = useState(AllProjects);
  const [modal, setModal] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);

  const toggle = (project) => {
    setSelectedProject(project);
    setModal(!modal);
  };

  return (
    <div className="projectCardGrid">
      {pData.map((project) => (
        <div className="projectsCard" key={project.id}>
          <div className="projectCardLinks">
           
              <span className="projectModal projectIcon">
              <FontAwesomeIcon
                icon={faFolder}
                size="2xl"
                onClick={() => toggle(project)}
                data-tooltip-id="my-tooltip-2"
              />
              {}
            </span>
           
          {
            project.projectWebLink &&(
              <span className="projectLink projectIcon">
              <FontAwesomeIcon icon={faUpRightFromSquare} size="2xl" />
            </span>
            )
          }
            {project.projectGitLink && (
              <span className="projectGit projectIcon">
                {" "}
                <a
                  href={project.projectGitLink}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FontAwesomeIcon
                    icon={faGithub}
                    size="2xl"
                    className="projectIcon"
                    data-tooltip-id="my-tooltip-1"
                  />
                </a>
              </span>
            )}
          </div>
          <div className="projectContent">
            <span className="projectCardTitle">{project.projectTitle}</span>
            <br />
            <span className="projectCardDescription">
              {project.projectDescription}
            </span>
          </div>
          <div className="projectSkills">{project.projectSkills}</div>
        </div>
      ))}
      {selectedProject && (
        <Modal isOpen={modal} toggle={() => toggle(null)} centered={true} className="modalClass">
          <ModalHeader toggle={() => toggle(null)} className="projectCardTitle">
            {selectedProject.projectTitle}
          </ModalHeader>
          <ModalBody className="modalBody"> 
              <p className="projectCardDescription"> {selectedProject.projectDescription}</p>
              <p className="projectCardDescription">{selectedProject.projectContent}</p>
              <p className="projectSkills">{selectedProject.projectSkills}</p>
            </ModalBody>

          <ModalFooter>
            <Button color="secondary" onClick={() => toggle(null)}>
              Cancel
            </Button>
          </ModalFooter>
        </Modal>
      )}
      <ReactTooltip id="my-tooltip-1" place="bottom" content="Git Link" variant="info" />
      <ReactTooltip id="my-tooltip-2" place="bottom" variant="info" content="Modal View" />
    </div>
  );
};

export default ProjectCards;
