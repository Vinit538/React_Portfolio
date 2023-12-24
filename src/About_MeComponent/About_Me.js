import React from "react";
import './About_Me_Style.css';

const About_Me = () => {
  return (
    <div className="about_Me" id="about_me">
    <div >
      <div><span className="aboutPageHeading">
        About Me
        </span>
        </div>
    <div className="about_Me_page">
      <div className="about_info">
      <div className="about_me_img">
        <img src="../VinitProfile.jpg" className="profile_img" alt="Profile" />
      </div>
      <div className="self_heading">
        <span className="selfName"><>Vinit{"  "}Karatagi</></span><br/>
        <span style={{fontSize:'20px',color:'aqua'}}>Full Stack Developer</span>
      </div>
      </div>
      <div className="about_my_self">
        <p className="animated-paragraph">
          <span className="paragraphText" style={{'--d': '0s'}}>
            Hello! My Name is<span className="ilightText"> Vinit Karatagi</span> <br/>a dynamic and detail-oriented individual
            driven by a passion for technology. With a robust commitment to
            delivering effective solutions, I bring a unique blend of technical
            skills and a positive attitude to the role for <span className="ilightText">Developer.</span>
            
          </span>
        </p>
        <p className="animated-paragraph">
          <span className="paragraphText" style={{'--d': '.1s'}}>
            I Graduated from <span className="ilightText">Rao Bahadur Y Mahabaleshwarappa Engineering College </span>in
            2022 with a degree in <span className="ilightText"> Computer Science and Engineering, </span>in  Bellary, 
           <span className="ilightText" >
            Karnataka.</span>
          </span>
        </p>
        <p className="animated-paragraph">
        <span  className="paragraphText" style={{'--d': '.2s'}}>
        I have successfully undertaken diverse initiatives such as developing a <span className="ilightText"> Learn Guru </span> e-learning web application Full Stack and  
       <span className="ilightText"> Iconography clone </span> and crafting a <span className="ilightText">Standalone Application</span> dedicated to implementing 
      <span className="ilightText">Linear Data Structures </span>. 
      {/* These projects showcase my adeptness in creating applications that span various domains
          and effectively implementing fundamental data structures. */}
          </span>
        </p>
        <p className="animated-paragraph">
        <span className="paragraphText" style={{'--d': '.3s'}}>
            {/* Equipped with proficiency in  Java, HTML, CSS, JavaScript, SQL, Data
            Structures, and Manual Testing, I am a well-rounded and versatile
            developer poised to contribute effectively to any challenging project. */}
            Here are few technologies I’ve been Equipped with proficiency :
          </span>
          <>
           <div style={{marginLeft:'10px' ,display:'flex',flexDirection:'row',gap:'30px'}}>
           <div>
              <span className="listHeading">Front End</span>
              <ul>
                <li>Html,CSS</li>
                <li>JavaScript</li>
                <li>React JS</li>
              </ul>
            </div>
            <div>
            <span className="listHeading">Back End</span>
              <ul>
                <li>Java </li>
                <li>Python</li>
              </ul>
            </div>
           </div>
            <div>
            <span className="listHeading">Other technical Skills </span>
              <ul>
                <li>SQL</li>
                <li>Data Structure</li>
              </ul>
            </div>
          </>
        </p>
      </div>
    </div>
    </div>
    </div>
  );
};

export default About_Me;
