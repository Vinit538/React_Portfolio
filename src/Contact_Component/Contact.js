import React from "react";
import "./ContactStyle.css";

const Contact = () => {
  const handleHelloClick = () => {
    const emailAddress ="vinitkaratagi538@gmail.com"
    const mailtoLink = `mailto:${emailAddress}?subject=Portfolio Inquiry&body=Hi, Hello`;
    window.location.href = mailtoLink;
  };
  return (
    <div className="ContactPage">
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "5px",
        }}
      >
        <div className="ContactHeading text center">Let's Get in Touch</div>
        <div className="ContactCardMessage">
          <span>
            Although I'am actively looking for opportunities my inbox is always
            open. Whether you have a question or just want to say hi, feel free
            to reach out. I'll do my best to get back to you promptly.
            {/* <span>Contact Me</span> */}
          </span>
        </div>
        <button className="helloButton" onClick={handleHelloClick}>
          Say Hello
        </button>
      </div>
    </div>
  );
};

export default Contact;
