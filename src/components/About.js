import React from 'react';
import Button from './Button';
import about from "../images/about.jpg";

function About() {
  return (
    <div className='App-about-block'>
    	<div>
        <p className='App-title'>We Tackle The Most Challenging Designs</p>
        <p>The world needs innovators and problem solvers who turn challenges into greater opportunities. We have an insatiable curiosity about transformative trends challenging the status.</p>
        <Button title='Get Free Estimate' />
      </div>
			<img className='App-about-photo' src={about} alt='interior design'/>
    </div>
  );
};

export default About;
