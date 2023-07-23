import React from 'react';
import './home.css';

const Home = () => {
  return (
    <div className='home' id='home'>
        <div className="home__container container">
            <div className="home__content">
                <span className="home__subtitle">Welcome to MyCoffee!</span>
                <h1 className="home__title">Discover Amazing Coffee House & Get Full Energy</h1>
                <p className="home__description">
                Welcome to our coffee website, where the art of coffee meets the joy of life! 
                Discover the diverse and rich flavors of our coffee collection, carefully crafted to cater to different taste preferences. 
                </p>
                <div className="home__btns">
                    <a href="#menu" className="btn">
                        Check Menu
                    </a>

                    <a href="#reservation" className="btn home__btn">
                        Book Table
                    </a>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Home