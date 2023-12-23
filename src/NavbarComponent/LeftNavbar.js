import React from 'react'
import './navbarStyle.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub,faLinkedin,faInstagram ,faFacebook, faTwitter} from '@fortawesome/free-brands-svg-icons';

const LeftNavbar = () => {
  return (
    <div className='mediaLinks'>
        <span className='socialMediaLinks'><FontAwesomeIcon icon={faGithub} size="2xl" style={{color: "#2755a5",}} /></span>
        <span className='socialMediaLinks'><FontAwesomeIcon icon={faLinkedin} size="2xl" style={{color: "#273d63",}} /></span>
        <span className='socialMediaLinks'><FontAwesomeIcon icon={faFacebook} size="2xl" style={{color: "#22385d",}} /></span>
        <span className='socialMediaLinks'><FontAwesomeIcon icon={faTwitter} size="2xl" style={{color: "#273f68",}} /></span>
        <span className='socialMediaLinks'><FontAwesomeIcon icon={faInstagram} size="2xl" style={{color: "#1d60d3",}} /></span>
    </div>
  )
}

export default LeftNavbar;