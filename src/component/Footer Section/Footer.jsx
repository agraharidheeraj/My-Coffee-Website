import React from 'react'
import logo from "../../assets/mylogo.png";
import { FaRegEnvelope,FaCaretLeft, FaFacebookF, FaTwitter, FaLinkedinIn, FaGithub, FaCaretRight, FaYoutube } from 'react-icons/fa';

import {AiOutlinePhone} from 'react-icons/ai';
import {MdOutlineLocationOn} from 'react-icons/md';
import './Footer.css';

const Footer = () => {
  return (
    <footer className='footer ' id='footer'>
          <div className="footer__grid container grid">
            <div className="footer__content">
                <a href="/" className="footer__logo"> 
                    <img src={logo} alt="" className="footer__logo-img" />
                </a>
                <p className="footer__description">
                Welcome to My Coffee! Explore a curated selection of 
                premium coffee beans from around the world,Your perfect cup of coffee awaits – 
                embrace the pleasure of My Coffee."
                </p>

                <ul className="footer_-contact">
                    <li className="footer__contact-item">
                        <AiOutlinePhone className='icon'/> +91 7007263566
                    </li>
                    <li className="footer__contact-item">
                        <MdOutlineLocationOn className='icon'/> 35/B Near Thomas Park Vasliganj / City  Mirzapur
                    </li>
                    <li className="footer__contact-item">
                        <FaRegEnvelope className='icon'/> dheeraj700agrahari@gmail.com
                    </li>
                
                </ul>

            </div>

            <div className="footer__content">
                <h3 className="footer__title">Reach Out !</h3>
                <ul className="footer__links">
                    <li>
                        <a href="#about" className="footer__link">
                            <FaCaretRight className='icon'/> About Us
                        </a>
                    </li>

                    <li>
                        <a href="#menu" className="footer__link">
                            <FaCaretRight className='icon'/> Our Menu
                        </a>
                    </li>

                    <li>
                        <a href="#features" className="footer__link">
                            <FaCaretRight className='icon'/> Features
                        </a>
                    </li>

                    <li>
                        <a href="#gallery" className="footer__link">
                            <FaCaretRight className='icon'/> Gallery
                        </a>
                    </li>

                    <li>
                        <a href="#team" className="footer__link">
                            <FaCaretRight className='icon'/> Team
                        </a>
                    </li>
 
                    <li>
                        <a href="#reservation" className="footer__link">
                            <FaCaretRight className='icon'/> Reservation
                        </a>

                        
                    </li>

                    <li>
                        <a href="#testimonials" className="footer__link">
                            <FaCaretRight className='icon'/> Testimonial
                        </a>

                        
                    </li>
                </ul>
            </div>

            <div className="footer__content">
                <h3 className="footer__title">Opening Time</h3>

                <div className="footer__opening-hour">
                    <ul className="opening__hour-list">
                        <li className="opening__hour-item">
                            <span>Monday:</span>
                            <span>09AM - 06Pm</span>
                        </li>

                        <li className="opening__hour-item">
                            <span>Tuesday:</span> 
                            <span>09AM - 06Pm</span>
                        </li>

                        <li className="opening__hour-item">
                            <span>Wednesday:</span>
                            <span>09AM - 06Pm</span>
                        </li>

                        <li className="opening__hour-item">
                            <span>Thrusday:</span>
                            <span>09AM - 06Pm</span>
                        </li>

                        <li className="opening__hour-item">
                            <span>Friday:</span>
                            <span>09AM - 06Pm</span>
                        </li>

                        <li className="opening__hour-item">
                            <span>Saturaday:</span>
                            <span>09AM - 06Pm</span>
                        </li>

                        <li className="opening__hour-item">
                            <span>Sunday:</span>
                            <span>Close</span>
                        </li>
                    </ul>
                </div>
            </div>

            <div className="footer__content">
                <h3 className="footer__title">Newsletter</h3>
                <p className="footer__description">
                    Subscribe Our NewsLetter To Get Latest Update and News !
                </p>

                <form  className="subscribe__form">
                <div className="form__input-div">
                <input type="Email" placeholder='Your Email' className="from__input" />
            </div>
 
                     <button className="btn btn--flex subscribe__btn">
                        <FaRegEnvelope/> Subscribe Now
                     </button>
                </form>

                <div className="footer__socials">
                    <h3 className="footer__social-follow">Follow Here:</h3>

                    <div className="footer__social-links">
                        <a href="https://www.facebook.com/profile.php?id=100005129806234" target='_blank' className="footer__social-link">
                            <FaFacebookF/>
                        </a>

                        <a href="https://twitter.com/Dheeraj58775389" target='_blank' className="footer__social-link">
                            <FaTwitter/>
                        </a>

                        <a href="https://www.linkedin.com/in/dheeraj-agrahari-/" target='_blank' className="footer__social-link">
                            <FaLinkedinIn/>
                        </a>

                        <a href="https://github.com/agraharidheeraj" target='_blank' className="footer__social-link">
                            <FaGithub/>
                        </a>

                        <a href="https://www.youtube.com/channel/UCanIdjk1MCCERfJk7AdMoYA" target='_blank' className="footer__social-link">
                            <FaYoutube/>
                        </a>
                    </div>
                </div>
            </div>

          </div>

          <p className="copyright__text">&copy; Copyright 2023 <span>MyCoffee by Dheeraj Agrahari </span>All Rights Reserved. </p>
    </footer>
  )
}

export default Footer