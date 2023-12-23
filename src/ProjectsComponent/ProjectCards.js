import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFolder} from '@fortawesome/free-regular-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faUpRightFromSquare} from '@fortawesome/free-solid-svg-icons';

const ProjectCards = () => {
  return (
    <div className='projectCardGrid'>
        <div className='projectsCard'>
           <div className='projectCardLinks'>
              <span className='projectModal projectIcon'><FontAwesomeIcon icon={faFolder} size="2xl"  /></span>
              <span className='projectLink projectIcon'><FontAwesomeIcon icon={faUpRightFromSquare} size="2xl"/></span>
              <span className='projectGit projectIcon'><FontAwesomeIcon icon={faGithub} size="2xl" /></span>
           </div>
           <div className='projectContent'>
            <span className='projectCardTitle'>
                Smart Health Monitoring System
            </span><br/>
            <span className='projectCardDescription'>
                It is IOT based project Which contain energy Hervisting System, run on solor power and also battery 
                where doctor can also monitor the patient helath condition from online in remotely.
            </span>
           </div>
            <div className='projectSkills'>
                    IOT, C++, Ardunio, GSM Module
            </div>
        </div>
        <div className='projectsCard'>
           <div className='projectCardLinks'>
              <span className='projectModal projectIcon'><FontAwesomeIcon icon={faFolder} size="2xl"  /></span>
              <span className='projectLink projectIcon'><FontAwesomeIcon icon={faUpRightFromSquare} size="2xl"/></span>
              <span className='projectGit projectIcon'><FontAwesomeIcon icon={faGithub} size="2xl" /></span>
           </div>
           <div className='projectContent'>
            <span className='projectCardTitle'>
                Smart Health Monitoring System
            </span><br/>
            <span className='projectCardDescription'>
                It is IOT based project Which contain energy Hervisting System, run on solor power and also battery 
                where doctor can also monitor the patient helath condition from online in remotely.
            </span>
           </div>
            <div className='projectSkills'>
                    IOT, C++, Ardunio, GSM Module
            </div>
        </div>
        <div className='projectsCard'>
           <div className='projectCardLinks'>
              <span className='projectModal projectIcon'><FontAwesomeIcon icon={faFolder} size="2xl"  /></span>
              <span className='projectLink projectIcon'><FontAwesomeIcon icon={faUpRightFromSquare} size="2xl"/></span>
              <span className='projectGit projectIcon'><FontAwesomeIcon icon={faGithub} size="2xl" /></span>
           </div>
           <div className='projectContent'>
            <span className='projectCardTitle'>
                Smart Health Monitoring System
            </span><br/>
            <span className='projectCardDescription'>
                It is IOT based project Which contain energy Hervisting System, run on solor power and also battery 
                where doctor can also monitor the patient helath condition from online in remotely.
            </span>
           </div>
            <div className='projectSkills'>
                    IOT, C++, Ardunio, GSM Module
            </div>
        </div>
    </div>
  )
}
export default ProjectCards;