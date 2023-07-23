import React from 'react'
import aboutimg from '../../assets/shop-owner.png'
import {FiCheck} from 'react-icons/fi'
import './About.css'

const About = () => {
  return (
    <div className='about section ' id='about'>
        <div className="about__grid container grid">
            <div className="about__img-wrapper">
                <img src={aboutimg} alt="" className="about__img" />
            </div>

            <div className="about__content">
                <h2 className="section__title title-left" data-title='About Us'>
                Discover Budget-Friendly Organic Coffee: Where Quality Meets Affordability! ☕🍃
                </h2>

                <p className="about__description">
                I Dheeraj Agrahari believe that everyone should have access to 
                premium-quality coffee without breaking the bank. 
                That's why we source our coffee beans from certified 
                organic farms that adhere to strict environmental 
                and ethical standards. 
                </p>

                <div className="about__details grid">

                <p className="about__details-description">
                     <FiCheck />
                     Pure Organic Coffee: Ethically sourced, premium quality .
                </p>

                <p className="about__details-description">
                     <FiCheck />
                     Ethical, transparent, educational, customer satisfaction.
                </p>

                <p className="about__details-description">
                     <FiCheck/>
                      Direct trade, expertly blended, fresh roasted, diverse flavors.
                </p>

                </div>
                 <a href="#team" className="btn">
                    Our Experts
                 </a>

            </div>

        </div>
    </div>
  )
}

export default About