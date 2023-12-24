import React from 'react'
import './titleStyle.css';
import { TypeAnimation } from 'react-type-animation';

const TitlePage = () => {
  return (
  <div>
    <div className='titlePage container'>
        <span className='hiText'>Hi, My name is </span><br/>
        <span className='TitleText'>Vinit Karatagi</span>
        <div className='subTitle'>
        <TypeAnimation 
            sequence={[
                'I am Full Stack Developer',
                5000,
                'I am Front-end Developer',
                1000,
                'I am Back-end Developer',
                1000,
                'I am Java Developer',
                1000,
                'I am React Developer',
                1000,
            ]}
            speed={5}
            repeat={Infinity}
            />
        </div>
        <p className='introText'>
          I'm a passionate and detail-oriented Developer.  With a background 
          in computer science engineering and a creative mindset, 
          I excel in building robust and user-friendly digital experiences.
        </p>
    </div>
  </div>
  )
}
export default TitlePage;