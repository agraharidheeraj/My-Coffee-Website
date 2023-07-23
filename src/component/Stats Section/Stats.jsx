import React from 'react';
import './Stats.css';
import coffeeShop from '../../assets/coffee-shop.svg';
import coffeeCup from '../../assets/coffee-cup.svg';
import experience from '../../assets/experience.svg';
import chef from '../../assets/chef.svg';

const Stats = () => {
  return (
    <div className='stats section'>
        <div className="stats__grid container grid">
            <div className="stats__item">
                <div className="stats__img-wrapper">
                    <img src={coffeeShop} alt="" className="stats__img" />
                </div>
       
                <div>
                    <p className="stats__no">100+</p>
                    <h3 className="stats__title">Total Branches</h3>
                </div>
            </div>

            <div className="stats__item">
                <div className="stats__img-wrapper">
                    <img src={coffeeCup} alt="" className="stats__img" />
                </div>
       
                <div>
                    <p className="stats__no">250+</p>
                    <h3 className="stats__title">Happy Customer</h3>
                </div>
            </div>

            <div className="stats__item">
                <div className="stats__img-wrapper">
                    <img src={chef} alt="" className="stats__img" />
                </div>
       
                <div>
                    <p className="stats__no">100+</p>
                    <h3 className="stats__title">Professional Chefs</h3>
                </div>
            </div>

            <div className="stats__item">
                <div className="stats__img-wrapper">
                    <img src={experience} alt="" className="stats__img" />
                </div>
       
                <div>
                    <p className="stats__no">10+</p>
                    <h3 className="stats__title"> Year of Experience</h3>
                </div>
            </div>

       
        </div>
    </div>
  )
}

export default Stats