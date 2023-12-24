import React from 'react';
import './navbarStyle.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faGithub,
  faLinkedin,
  faInstagram,
  faFacebook,
  faTwitter
} from '@fortawesome/free-brands-svg-icons';

const LeftNavbar = () => {
  return (
    <div className='mediaLinks'>
      <span>
        <a href='https://github.com/Vinit538' target='_blank' rel='noopener noreferrer'>
          <FontAwesomeIcon icon={faGithub} size='xl' className='socialMediaLinks' />
        </a>
      </span>
      <span>
        <a href='https://linkedin.com/in/vinitk98' target='_blank' rel='noopener noreferrer'>
          <FontAwesomeIcon icon={faLinkedin} size='xl' className='socialMediaLinks' />
        </a>
      </span>
      {/* <span>
        <a href='https://facebook.com/your-link' target='_blank' rel='noopener noreferrer'>
          <FontAwesomeIcon icon={faFacebook} size='xl' className='socialMediaLinks' />
        </a>
      </span> */}
      <span>
        <a href='https://twitter.com/Vinit_Karatagi' target='_blank' rel='noopener noreferrer'>
          <FontAwesomeIcon icon={faTwitter} size='xl' className='socialMediaLinks' />
        </a>
      </span>
      <span>
        <a href='https://www.instagram.com/vinit_karatagi/' target='_blank' rel='noopener noreferrer'>
          <FontAwesomeIcon icon={faInstagram} size='xl' className='socialMediaLinks' />
        </a>
      </span>
    </div>
  );
};

export default LeftNavbar;
