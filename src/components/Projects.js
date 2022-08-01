import React from 'react';
import Project from './Project';
import interior1 from "../images/interior1.jpg";
import interior2 from "../images/interior2.jpg";
import interior3 from "../images/interior3.jpg";
import interior4 from "../images/interior4.jpg";

function Projects() {
  return (
    <section>
      <p className='App-title'>Recent Projects</p>
			<p className='App-projects-description'>With tools to make every part of your process more human and support team excited to help you, getting started with us never been easier.</p>
      <div id='App-services'>
        <Project photo={interior1} name='Traditional elegance with contemporary lines living room' stylename='Transitional'/>
        <Project photo={interior2} name='Traditional style living room' stylename='Traditional'/>
        <Project photo={interior3} name='Minimalistic home design' stylename='Modern'/>
        <Project photo={interior4} name='Modern farmhouse interior design' stylename='Farmhouse'/>
      </div>
    </section>
  );
};

export default Projects;
