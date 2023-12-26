import React from 'react'
import TitlePage from './TitleComponent/TitlePage';
import About_Me from './About_MeComponent/About_Me';
import Education from './EducationComponent/Education';
import Projects from './ProjectsComponent/Projects';
import ProjectCards from './ProjectsComponent/ProjectCards';
import Learned from './LearnedComponent/Learned';
import Contact from './Contact_Component/Contact';

const Home = () => {
  return (
    <div style={{display:'flex',flexDirection:'column',justifyContent:'space-between'}}>
        <TitlePage />
        <About_Me />
        <Learned />
        <Projects />
        <Contact/>
    </div>
  )
}
export default Home;