// import React from 'react';
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import { useMediaQuery } from 'react-responsive';
// import { Row, Col } from 'reactstrap';
// import VKNavbar from './NavbarComponent/VTNavbar';
// import TitlePage from './TitleComponent/TitlePage';
// import About_Me from './About_MeComponent/About_Me';
// import Projects from './ProjectsComponent/Projects';
// import Education from './EducationComponent/Education';
// import LeftNavbar from './NavbarComponent/LeftNavbar';
// import RightNavbar from './NavbarComponent/RightNavbar';
// import './App.css';
// import Home from './Home';
// import Learned from './LearnedComponent/Learned';

// function App() {
//   const isMobile = useMediaQuery({ maxWidth: 1050 });

//   return (
//     <Router>
//       <div className="appBody">
//         <VKNavbar />
//         <Row>
//           {!isMobile && (
//             <>
//               <Col md={1}>
//                 <LeftNavbar />
//               </Col>
//               <Col>
//                 <Routes>
//                   <Route path="/" element={<Home />} />
//                   <Route path="/about_me" element={<About_Me />} />
//                   <Route path="/project" element={<Projects />} />
//                   <Route path='/learned' element={<Learned />} />
//                   <Route path="/education" element={<Education />} />
//                 </Routes>
//               </Col>
//               <Col md={1}>
//                 <RightNavbar />
//               </Col>
//             </>
//           )}
//           {isMobile && (
//             <Col>
//               <Routes>
//                 <Route path="/" element={<Home />} />
//                 <Route path="/about_me" element={<About_Me />} />
//                 <Route path="/project" element={<Projects />} />
//                 <Route path='/learned' element={<Learned />} />
//                 <Route path="/education" element={<Education />} />
//               </Routes>
//             </Col>
//           )}
//         </Row>
//         <RightNavbar />
//         <LeftNavbar />

//       </div>
//     </Router>
//   );
// }


// export default App;


import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useNavigate } from 'react-router-dom';
import { useMediaQuery } from 'react-responsive';
import { Row, Col } from 'reactstrap';
import VKNavbar from './NavbarComponent/VTNavbar';
import TitlePage from './TitleComponent/TitlePage';
import About_Me from './About_MeComponent/About_Me';
import Projects from './ProjectsComponent/Projects';
import Education from './EducationComponent/Education';
import LeftNavbar from './NavbarComponent/LeftNavbar';
import RightNavbar from './NavbarComponent/RightNavbar';
import './App.css';
import Home from './Home';
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
    <Router>
      <div className="appBody">
        <VKNavbar />
        <Row>
          {!isMobile && (
            <>
              <Col md={1}>
                <LeftNavbar />
              </Col>
              <Col>
                <Routes>
                  <Route
                    path="/"
                    element={
                      <>
                        <ScrollToTopOnMount />
                        <Home />
                      </>
                    }
                  />
                  <Route path="/about_me" element={<About_Me />} />
                  <Route path="/project" element={<Projects />} />
                  <Route path="/learned" element={<Learned />} />
                  <Route path="/education" element={<Education />} />
                  <Route path='/contact' element={<Contact />} />

                </Routes>
              </Col>
              <Col md={1}>
                <RightNavbar />
              </Col>
            </>
          )}
          {isMobile && (
            <Col>
              <Routes>
                <Route
                  path="/"
                  element={
                    <>
                      <ScrollToTopOnMount />
                      <Home />
                    </>
                  }
                />
                <Route path="/about_me" element={<About_Me />} />
                <Route path="/project" element={<Projects />} />
                <Route path="/learned" element={<Learned />} />
                <Route path="/education" element={<Education />} />
                <Route path='/contact' element={<Contact />} />
              </Routes>
            </Col>
          )}
        </Row>
        <RightNavbar />
        <LeftNavbar />
      </div>
    </Router>
  );
}

export default App;
