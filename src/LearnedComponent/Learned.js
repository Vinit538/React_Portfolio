import React from "react";
import "./LearnedStyle.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGraduationCap,
  faAddressCard,
  faCertificate,
} from "@fortawesome/free-solid-svg-icons";

const Learned = () => {
  return (
    <div className="LearnedPage">
      <div>
        <p className="LpageHeading">Some Things I’ve Learnt</p>
      </div>
      <div className="ThingsLearned">
        <div className="CardSection">
          <div className="LHeadingCard">
            <h1 className="LHeadingCardText">
                Education
            </h1>
          </div>
          <div className="LContentCard">
            <span>
            <span><FontAwesomeIcon icon={faGraduationCap} className="icon" />{" "}</span>
                Bachelor's degree | <span className="ilightText">Computer Science Engineering</span> |
              VTU Rao Bahadur Y Mahabaleshwarappa Engineering College
              <span className="ilightText">{" "}2022 | 7.42</span>
            </span>
            <br />
            <span>
              <FontAwesomeIcon icon={faGraduationCap} className="icon" />{" "}
              Diploma degree | <span className="ilightText">Computer Science Engineering</span> | DTE
              Government Polytechnic Kampli College{" "}
              <span className="ilightText">61.08 %</span>
            </span>
          </div>
        </div>
        <div className="CardSection">
          <div className="LContentCard internCard">
            <span>
                <FontAwesomeIcon icon={faAddressCard} className="icon" />
                <span><span className="ilightText">{" "}Pantech Solution : <br/></span>
                Trained in <span className="ilightText">IOT, Thing Speak Cloud, Arduino & GSM Module & Sensors</span>
                Executed Projects named <span className="ilightText">Temprature Finding Stand alone Project .</span>
                </span>
            </span>
            <br/>
            <span>
                <FontAwesomeIcon icon={faAddressCard} className="icon" />
                <span className="ilightText">  Aptech : </span><br/>
                Trained in <span className="ilightText">Java, Data Bases, Data structures</span>
                {" "}Executed Projects named <span className="ilightText"> Scientific Calculator .</span>
            </span>
          </div>

          <div className="LHeadingCard internHeading">
          <h1 className="LHeadingCardText">               
                InternShip
            </h1>
          </div>
        </div>
        <div className="CardSection">
          <div className="LHeadingCard">
            <h1 className="LHeadingCardText">
                Certificate
            </h1>
          </div>
          <div className="LContentCard">
          <span><FontAwesomeIcon icon={faCertificate} className="icon" /> Certified <span className="ilightText">Full Stack Developer</span> from Kodnest.</span><br/>
          <span><FontAwesomeIcon icon={faCertificate} className="icon" />  Certified in <span className="ilightText">Website Basics and Web Design </span> from Coursera.</span><br/>
          <span><FontAwesomeIcon icon={faCertificate} className="icon" /> Certified in <span className="ilightText">Core Java from Learn</span> Quest University - Coursera.</span><br/>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Learned;
