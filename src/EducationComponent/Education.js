import React from "react";
import "./EducationStyle.css";

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
          <p>Bachelor Engineering</p>
          <p>Diploma Degree</p>
        </div>
      </div>

      <div className="eduactionDiv Education">
      <div className="educationHeading">
          <h1 className="CardHeading">InternShip</h1>
        </div>
        <div className="educationCard">
          <p>Aptech</p>
          <p>Pantech</p>
        </div>
        
      </div>
      <div className="eduactionDiv Education">
        <div className="educationHeading">
          <h1 className="CardHeading">Certificate</h1>
        </div>
        <div className="educationCard">
          <p>Bachelor Engineering</p>
          <p>Diploma Degree</p>
        </div>
      </div>
    </div>
  );
};
export default Education;
