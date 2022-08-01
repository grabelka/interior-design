import React from 'react';
import home from "../images/home.jpg";

function Home() {
	return (
		<section className='App-home'>
			<img className='App-home-background' src={home} alt='home interior'/>
			<p className='App-home-text'>Let's Create Your Dream Interior</p>
			<p className='App-home-description'>The world needs innovators and problem solvers who turn challenges into greater opportunities</p>
			<div id='App-about'>
				<div>
					<p><b>Interior design</b></p>
					<p>Enhancing the interior to achieve a healthier environment for the people using right space.</p>
				</div>
				<div>
					<p><b>Furniture</b></p>
					<p>Movable articles that are used to make a room or building suitable for living or working.</p>
				</div>
				<div>
					<p><b>Flooring</b></p>
					<p>Thin object any finished material applied over a floor structure to provice a walking surface.</p>
				</div>
			</div>
		</section>
	);
};

export default Home;
