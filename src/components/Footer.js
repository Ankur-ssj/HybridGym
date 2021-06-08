import React from 'react';
import '../scss/footer.css';
import { Button } from './Button';
import { Link } from 'react-router-dom';
import PNG_H360OverheadWhite from '../Logos/PNG_H360OverheadWhite.png'
import {
  FaFacebook,
  FaInstagram,
  FaYoutube,
} from 'react-icons/fa';

const Footer=()=> {
  return (
    <div className='footer-container'>
      <section className='footer-subscription'>
        <p className='footer-subscription-heading'>
          Join our exclusive membership to stay fit and healthy
        </p>
        <div className='input-areas'>
          <form>
{/*             <input
              className='footer-input'
              name='email'
              type='email'
              placeholder='Your Email'
            /> */}
            <Button buttonStyle='btn--primary'>SIGN UP</Button>
          </form>
        </div>
      </section>
      <div className='footer-links'>
        <div className='footer-link-wrapper'>
          <div className='footer-link-items'>
            <h2>About Us</h2>
            <Link to='/sign-up'>How it works</Link>
            <Link to='/'>Testimonials</Link>
            <Link to='/'>Careers</Link>
            <Link to='/'>Investors</Link>
            <Link to='/'>Terms of Service</Link>
          </div>
          <div className='footer-link-items'>
            <h2>Contact Us</h2>
            <Link to='/'>Contact</Link>
            <Link to='/'>Support</Link>
            <Link to='/'>Destinations</Link>
            <Link to='/'>Sponsorships</Link>
          </div>
        </div>
        <div className='footer-link-wrapper'>
          <div className='footer-link-items'>
            <h2>Videos</h2>
            <Link to='/'>Submit Video</Link>
            <Link to='/'>Ambassadors</Link>
            <Link to='/'>Agency</Link>
            <Link to='/'>Influencer</Link>
          </div>
          <div className='footer-link-items'>
            <h2>Social Media</h2>
            <Link to={'//www.instagram.com/hybrid360fit/'}>Instagram</Link>
            <Link to='/'>Facebook</Link>
            <Link to={'//www.youtube.com/channel/UCo2jr-McxvV9JL81Gr8IacQ?view_as=subscriber'}>Youtube</Link>
            <Link to='/'>Twitter</Link>
          </div>
        </div>
      </div>
      <section className='social-media'>
        <div className='social-media-wrap'>
          <div className='footer-logo'>
            <Link to='/' className='social-logo'>
                <img src={PNG_H360OverheadWhite} alt="footer logo"/>
            </Link>
          </div>
          <div className='website-rights'>©Hybrid360Fit 2021 | All Rights Reserved</div>
          <div className='social-icons'>
            <Link
              className='social-icon-link'
              to='/'
              target='_blank'
              aria-label='Facebook'
            >
              <FaFacebook />
            </Link>
            <Link
              className='social-icon-link'
              to={
                '//www.instagram.com/hybrid360fit/'
                }
              target='_blank'
              aria-label='Instagram'
            >
              <FaInstagram />
            </Link>
            <Link
              className='social-icon-link'
              to={
                '//www.youtube.com/channel/UCo2jr-McxvV9JL81Gr8IacQ?view_as=subscriber'
              }
              target='_blank'
              aria-label='Youtube'
            >
              <FaYoutube />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Footer;