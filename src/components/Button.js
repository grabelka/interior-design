import React from 'react';
import arrow from "../images/arrow.png";

function Button(props) {
  return (
    <button className='App-button'>
    	<div className='App-row'>
				<p>{props.title}</p>
				<img className='App-icon' src={arrow} alt='arrow'></img>
			</div>
    </button>
  );
};

export default Button;
