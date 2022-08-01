import React from 'react';

function Projects(props) {
  return (
    <div className='App-project'>
			<img className='App-interior-photo' src={props.photo} alt='interior design'/>
      <p><b>{props.name}</b></p>
      <p>{props.stylename}</p>
    </div>
  );
};

export default Projects;
