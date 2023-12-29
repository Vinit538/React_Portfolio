import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useNavigate } from 'react-router-dom';
import { useMediaQuery } from 'react-responsive';
import { Row, Col } from 'reactstrap';
import VKNavbar from './NavbarComponent/VTNavbar';
import TitlePage from './TitleComponent/TitlePage';
import About_Me from './About_MeComponent/About_Me';
import Projects from './ProjectsComponent/Projects';
import LeftNavbar from './NavbarComponent/LeftNavbar';
import RightNavbar from './NavbarComponent/RightNavbar';
import './App.css';
import Learned from './LearnedComponent/Learned';
import Contact from './Contact_Component/Contact';

function ScrollToTopOnMount() {
  const navigate = useNavigate();

  useEffect(() => {
    // Scroll to the top when the component mounts
    window.scrollTo(0, 0);
  }, [navigate]);

  return null;
}

function App() {
  const isMobile = useMediaQuery({ maxWidth: 1050 });

  return (
      <div className="appBody">
        <VKNavbar />
        <Row>
          {!isMobile && (
            <>
              <Col md={1}>
                <LeftNavbar />
              </Col>
              <Col>
              <TitlePage />
              <About_Me />
              <Learned />
              <Projects />
              <Contact />
              </Col>
              <Col md={1}>
                <RightNavbar />
              </Col>
            </>
          )}
          {isMobile && (
            <Col>
              <TitlePage />
              <About_Me />
              <Learned />
              <Projects />
              <Contact />
            </Col>
          )}
        </Row>
        <RightNavbar />
        <LeftNavbar />
      </div>
  );
}

export default App;
