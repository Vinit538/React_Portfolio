import React from "react";
import './navbarStyle.css'

const RightNavbar = () => {
    const emailAddress ="vinit.cse.rymec@gmail.com"
  return (
    <div className="maildiv">
      <a 
        href={`mailto:${emailAddress}?subject=Portfolio Inquiry&body=Hi, I'm interested in your portfolio.`}
        target='_blank' rel='noopener noreferrer'
        className="mailLink"
      >
        vinitkaratagi538@gmail.com
      </a>
    </div>
  );
};
export default RightNavbar;
