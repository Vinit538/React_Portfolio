import React from "react";
import './navbarStyle.css'

const RightNavbar = () => {
  const emailAddress ="vinitkaratagi538@gmail.com"
  return (
    <div className="maildiv">
      <a 
        href={`mailto:${emailAddress}?subject=Portfolio Inquiry&body=Hi, Hello`}
        target='_blank' rel='noopener noreferrer'
        className="mailLink"
      >
        vinitkaratagi538@gmail.com
      </a>
    </div>
  );
};
export default RightNavbar;
