import React, { useState, useEffect } from "react";
import {
  Collapse,
  Navbar,
  NavbarBrand,
  NavbarToggler,
  Nav,
  NavItem,
} from "reactstrap";
// import { Link } from "react-router-dom";
import { Link } from "react-scroll";

import "./navbarStyle.css";
const VKNavbar = () => {
  //const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => setIsOpen(!isOpen);

  const handleScroll = () => {
    const navbar = document.getElementById("vkNavbar");
    if (navbar) {
      const currentScrollPos = window.scrollY;
      if (currentScrollPos === 0) {
        // Scroll to top, open the navbar
        navbar.style.top = "0";
        // setIsOpen(true);
      } else if (isOpen) {
        // Scrolled down, close the navbar if it's open

        setIsOpen(!isOpen);
      } else if (
        currentScrollPos > 0 &&
        currentScrollPos < window.innerHeight
      ) {
        // Scrolling down or at the bottom of the page, hide the navbar
        navbar.style.top = "-100px";
        navbar.backgroundColor = "transparent";
      }
    }
  };

  useEffect(() => {
    // Attach the event listener for scroll events
    window.addEventListener("scroll", handleScroll);

    // Cleanup the event listener on component unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [isOpen]); // Re-run the effect when the isOpen state changes

  const handleResize = () => {
    // Close the navbar on screen size change
    setIsOpen(false);
  };

  useEffect(() => {
    // Attach the event listener for resize events
    window.addEventListener("resize", handleResize);

    // Cleanup the event listener on component unmount
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);


  const Resume ='./Resume/VINIT K _BE.pdf';
  const handelResume =()=>{
    window.open(Resume,'_blank');
  }

  return (
    <div>
      <Navbar fixed="top" expand="md" className="vkNavbar" id="vkNavbar">
        <NavbarBrand className="navbarBrand">
          <NavItem className="navItemsHead">
            <Link to="/" style={{textDecoration:'none'}}>
              <span className="navHead">
                <span className="NavHeadingText">Vinit K</span>
              </span>
            </Link>
          </NavItem>
        </NavbarBrand>
        <NavbarToggler className="navbarToggler" onClick={toggleNavbar}>
          <span>
            <img src="../logos/vlogo20.png" className="navToggler" />
          </span>
        </NavbarToggler>
        <Collapse isOpen={isOpen} navbar>
          <Nav
            style={{ backgroundColor: isOpen ? "transparent" : "transparent" }}
            className="ms-auto navMenu"
            navbar
          >
            <NavItem className="navItems">
              <Link to="about_me" className="navLinkID"
              smooth={true} duration={800}
              >
                <span className="navSubHeading">About Me</span>
              </Link>
            </NavItem>
            <NavItem className="navItems">
              <Link  to="learned" className="navLinkID"
              smooth={true} duration={800}
              >
                <span className="navSubHeading">Education</span>
              </Link>
            </NavItem>
            <NavItem className="navItems">
              <Link to="project"   className="navLinkID" 
                smooth={true} duration={800}

              >
                <span className="navSubHeading">Project</span>
              </Link>
            </NavItem>
             <NavItem className="navItems">
              <Link  to="contact" className="navLinkID"
              smooth={true} duration={800}
              >
                <span className="navSubHeading">Contact</span>
              </Link>
            </NavItem>
            <button className="ResumeButton" onClick={handelResume}>Resume</button>
           
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
};

export default VKNavbar;
