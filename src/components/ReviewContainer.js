import React from 'react';
import Review from './Review';
import portrait1 from "../images/portrait1.jpg";
import portrait2 from "../images/portrait2.jpg";
import portrait3 from "../images/portrait3.jpg";

function ReviewContainer() {
  return (
    <div className='App-join'>
    	<p><b>What the People Think About Interno</b></p>
			<div className='App-review-container'>
        <Review photo={portrait1} name='Anna Melnyk' location='Kyiv, Ukraine' text="We selected interno inferior because of rigorous design background & education." />
        <Review photo={portrait2} name='Maria Ivanova' location='Lviv, Ukraine' text="The team exceeded our expectations and emerged as leaders of our project's" />
        <Review photo={portrait3} name='Andriy Makarov' location='Kyiv, Ukraine' text="They balanced the architectural vision and the project realities beautifully."/>
      </div>
    </div>
  );
};

export default ReviewContainer;
