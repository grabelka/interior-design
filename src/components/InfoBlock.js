import React from 'react';

function InfoBlock(props) {
  return (
		<div>
			<p className='App-info-value'>{props.value}</p>
			<p>{props.text}</p>
		</div>
	);
};

export default InfoBlock;
