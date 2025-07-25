import React from 'react';
import { Button } from './Button';
import './Footer.css';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <div className='footer-container'>
      <section  className ='footer-subscription'>  
          <p className='footer-subscription-heading'> 
            Join the adventure newsletter to receive our best vacation deals.</p>
            <p className='footer-subscription-text'> 
                You can unsubscribe at any time.
            </p>
            <div className='input-areas'> 
                <form > 
                    <input type='email' name='email' placeholder='Your Email' className='footer-input'/>
                    <Button buttonStyle ='btn--outline'>Subscribe</Button>
                </form>
            </div>
      </section>
      <div className='footer-links' > 
        <div className='footer-link-wrapper'> 
            <div className='footer-link-items'> 
                <h2>About Us</h2>
                <Link to='/sign-up'>  How it works  </Link>
                <Link to='/'>  Testimonials </Link>
                <Link to='/'>  careers </Link>
                <Link to='/'>  Investors </Link>
                <Link to='/'>  Terms of Services  </Link>
            </div>
             <div className='footer-link-items'> 
                <h2>Contact Us</h2>
                <Link to='/'>  Contact  </Link>
                <Link to='/'>  Support </Link>
                <Link to='/'>  Destination  </Link>
                <Link to='/'>  Sponsorship  </Link>               
            </div> 
              <div className='footer-link-items'> 
                <h2>Videos</h2>
                <Link to='/'>  Submit Videos  </Link>
                <Link to='/'>  Agency  </Link>
                <Link to='/'>  Influencers  </Link>
                <Link to='/'>  Ambassadors  </Link>               
            </div> 
            
             <div className='footer-link-items'> 
                <h2>Social Media</h2>              
                <Link to='/'>  Instagram  </Link>
                <Link to='/'>  X  </Link>
                <Link to='/'>  Youtube  </Link>
                <Link to='/'>  Facebook  </Link>
            </div>                     
        </div>            
                           
        
      </div>
      <section className='social-media'> 
        <div className='social-media-wrap'> 
            <div className='footer-logo'> 
                <Link to='/' className='social-logo'> 
                TRVL <i className='fab fa-typo3'></i>
                </Link>
            </div>
            <small className='web-rights'>© TRVL 2025  </small>
            <div className='social-icons'> 
                <Link className='social-icon-link instagram'
                to='/'
                target='_blank'
                aria-label='instagram'
                > 
                 <i className='fab fa-instagram'></i>
                </Link>

                   <Link className='social-icon-link '
                to='/'
                target='_blank'
                aria-label='twitter'
                > 
                 <i className='fab fa-twitter'></i>
                </Link>

                   <Link className='social-icon-link youtube'
                to='/'
                target='_blank'
                aria-label='youtube'
                > 
                 <i className='fab fa-youtube'></i>
                </Link>

                   <Link className='social-icon-link facebook'
                to='/'
                target='_blank'
                aria-label='Facebook'
                > 
                 <i className='fab fa-facebook'></i>
                </Link>
              
            </div>
        </div>
      </section>
    </div>
  )
}

export default Footer;

