import React from 'react';

function Review(props) {
  return (
    <div className='App-review'>
			<img className='App-portrait' src={props.photo} alt='photo'/>
			<p><b>{props.name}</b></p>
			<p>{props.location}</p>
			<p>{props.text}</p>
		</div>
  );
};

export default Review;
