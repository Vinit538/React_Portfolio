import React from "react";
import './navbarStyle.css'

const RightNavbar = () => {
    const emailAddress ="vinit.cse.rymec@gmail.com"
  return (
    <div>
      <a
        href={`mailto:${emailAddress}?subject=Portfolio Inquiry&body=Hi, I'm interested in your portfolio.`}
        className="mailLink"
      >
        Contact Me
      </a>
    </div>
  );
};
export default RightNavbar;
