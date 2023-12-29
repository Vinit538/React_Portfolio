import React ,{useState} from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFolder} from '@fortawesome/free-regular-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faUpRightFromSquare} from '@fortawesome/free-solid-svg-icons';
import AllProjects from './AllProjects.js'
const ProjectCards = () => {

    const [pData, setPData] = useState(AllProjects);
    console.log(pData);

    return (
    <div className='projectCardGrid'>
       {pData.map((project)=> (
                <div className='projectsCard' key={project.id}>
                <div className='projectCardLinks'>
                   <span className='projectModal projectIcon'><FontAwesomeIcon icon={faFolder} size="2xl"  />{}</span>
                   <span className='projectLink projectIcon'><FontAwesomeIcon icon={faUpRightFromSquare} size="2xl"/></span>
                  {project.projectGitLink &&(
                     <span className='projectGit projectIcon'>  <a
                     href={project.projectGitLink} target="_blank"rel="noopener noreferrer"
                   >
                     <FontAwesomeIcon
                       icon={faGithub}
                       size="2xl"
                       className="projectIcon"
                     />
                   </a></span> 
                  )}
                </div>
                <div className='projectContent'>
                 <span className='projectCardTitle'>
                    {project.projectTitle}
                 </span><br/>
                 <span className='projectCardDescription'>
                    {project.projectDescription}
                 </span>
                </div>
                 <div className='projectSkills'>
                         {project.projectSkills}
                 </div>
             </div>

            ))}
    </div>
  )
}
export default ProjectCards;