import React from 'react';
import '../App.css';
import { Button } from './Button';
import'./HeroSection.css';
import './Button.css';

function HeroSection() {
  return (
    <div className='hero-container' >  
      <video src="/travel-intro.mp4" autoPlay loop muted />    
      <h1>EXPLORE THE WORLD</h1>
      <p>SO WHAT IS HOLDING YOU BACK?</p>
      <div className='hero-btns'> 
        <Button className='btns' buttonStyle= 'btn--outline'  buttonSize='btn--large'>GET STARTED</Button>
         <Button className='btns' buttonStyle= 'btn--primary'  buttonSize='btn--large'>WATCH TRAILER <i className='fas fa-play-circle' style={{ marginLeft: '10px' }}></i></Button>  
       </div>
    </div>
  )
}

export default HeroSection;
