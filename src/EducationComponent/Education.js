import React from "react";
import "./EducationStyle.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFolder} from '@fortawesome/free-regular-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faGraduationCap,faAddressCard,faCertificate} from '@fortawesome/free-solid-svg-icons';

const Education = () => {
  return (
    <div className="educationPage">
      <div>
        <p className="pageHeading">Some Things I’ve Learnt</p>
      </div>
      <div className="testBox">
        <h1 className="text-center">Test</h1>
      </div>
      <div className="eduactionDiv Education">
        <div className="educationHeading">
          <h1 className="CardHeading">Education</h1>
        </div>
        <div className="educationCard">
          <span>
            <FontAwesomeIcon icon={faGraduationCap}  className="icon" />
            Bachelor's degree | <span>Computer Science Engineering</span> | VTU
            Rao Bahadur Y Mahabaleshwarappa Engineering College
            <span>2022 | 7.42</span>
          </span><br/>
          <span>
            <FontAwesomeIcon icon={faGraduationCap}  className="icon" />
              Diploma degree | <span>Computer Science Engineering</span> | DTE
              Government Polytechnic Kampli College
              <span>61.08 %</span>
            </span>
        </div>
      </div>

      <div className="eduactionDiv Education">
      <div className="educationHeading">
          <h1 className="CardHeading">InternShip</h1>
        </div>
        <div className="educationCard">
          <span><FontAwesomeIcon icon={faAddressCard} className="icon" /> </span>
          <span><FontAwesomeIcon icon={faAddressCard} className="icon" /> </span>
        </div>
        
      </div>
      <div className="eduactionDiv Education">
        <div className="educationHeading">
          <h1 className="CardHeading">Certificate</h1>
        </div>
        <div className="educationCard">
          <span><FontAwesomeIcon icon={faCertificate} className="icon" /> Kodnest</span><br/>
          <span><FontAwesomeIcon icon={faCertificate} className="icon" /> Coursera</span><br/>
          <span><FontAwesomeIcon icon={faCertificate} className="icon" /> Coursera</span><br/>
        </div>
      </div>
    </div>
  );
};
export default Education;
