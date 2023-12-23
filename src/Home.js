import React from 'react'
import TitlePage from './TitleComponent/TitlePage';
import About_Me from './About_MeComponent/About_Me';
import Education from './EducationComponent/Education';
import Projects from './ProjectsComponent/Projects';
import ProjectCards from './ProjectsComponent/ProjectCards';

const Home = () => {
  return (
    <div>
        <TitlePage />
        <About_Me />
        <Education />
        <Projects />
        <ProjectCards />
    </div>
  )
}
export default Home;