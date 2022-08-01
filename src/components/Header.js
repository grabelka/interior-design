import React from 'react';
import logo from "../images/logo.png";

function Header() {
  return (
    <header className='App-header'>
      <div className='App-row'>  
        <img className='App-icon' src={logo} alt='logo'/>
        <h1>Interno</h1>
      </div> 
      <div className='App-row'>
        <a className='App-link' href='#App-header'>Home</a>
        <a className='App-link' href='#App-about'>About</a>
        <a className='App-link' href='#App-services'>Services</a>
        <a className='App-link' href='#App-contacts'>Contacts</a>
      </div>
    </header>
  );
};

export default Header;
