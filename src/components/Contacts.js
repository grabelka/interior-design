import React from 'react';
import logo from "../images/logo.png";
import twitter from "../images/twitter.png";
import telegram from "../images/telegram.png";
import instagram from "../images/instagram.png";

function Contacts() {
  return (
    <div id='App-contacts'>
    	<div>
        <div className='App-row'>  
          <img className='App-icon' src={logo} alt='logo'/>
          <p><b>Interno</b></p>
        </div> 
        <p>We are the laeding architect and interior design firm in the world</p>
        <div>
          <a target="_blank" rel="noreferrer" href='http://instagram.com'><img className='App-small-icon' src={instagram} alt='twitter'/></a>
          <a target="_blank" rel="noreferrer" href='http://twitter.com'><img className='App-small-icon' src={twitter} alt='twitter'/></a>
          <a target="_blank" rel="noreferrer" href='http://telegram.com'><img className='App-small-icon' src={telegram} alt='twitter'/></a>
        </div>
      </div>
    	<div>
        <p><b>Contacts</b></p>
        <p>Bankova St, 10</p>
        <p>Kyiv 02000, Ukraine</p>
        <p>internodesign@gmail.com</p>
        <p>+38(099)-77-24-573</p>
      </div>
    </div>
  );
};

export default Contacts;
