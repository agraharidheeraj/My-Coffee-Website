import React from 'react';
import './Choosing.css';
import chooseImg from "../../assets/choose.jpg";
import coffeeMug from "../../assets/coffee-mug.svg";
import coffeeBeans2 from "../../assets/coffee-beans-2.svg";
import coffeeBeans3 from "../../assets/coffee-beans-3.svg";


const Choosing = () => {
  return (
    <div className='choose section'>
        <div className="choose__grid container grid">
            <div className="choose__content">
        <h2 className="section__title title-left" data-title='Why Choose Us'>
                My Coffee Shop Provide a Your Favorite & Tasty Coffee in India ☕
                </h2>
                <p className="choose__description">
                We select only the finest beans from renowned coffee-growing regions, ensuring a premium and satisfying cup every time.
                Experience the freshness and richness of small-batch roasting, delivering coffee at its peak flavor. And 
                Your satisfaction is our priority. 
                </p>

                <div className="choose__details grid">
                    <div className="choose__details-item">
                        <div className="choose__details-img-wrapper">
                            <img src={coffeeMug} alt="" className="choose__details-img" />
                        </div>

                        <div>
                            <h3 className="choose__details-title">Pure And Organic </h3>
                            <p className="choose__details-description">
                            Immerse in the richness of our premium, organic coffee sourced 
                            sustainably to protect the environment.
                            </p>
                        </div>
                    </div>

                    <div className="choose__details-item">
                        <div className="choose__details-img-wrapper">
                            <img src={coffeeBeans2} alt="" className="choose__details-img" />
                        </div>

                        <div>
                            <h3 className="choose__details-title">Awesome and Premium Taste</h3>
                            <p className="choose__details-description">
                            Expertly blended flavors offer a delightful taste adventure with every sip.
                            </p>
                        </div>
                    </div>

                    <div className="choose__details-item">
                        <div className="choose__details-img-wrapper">
                            <img src={coffeeBeans3} alt="" className="choose__details-img" />
                        </div>

                        <div>
                            <h3 className="choose__details-title">Good Relationship With Customer</h3>
                            <p className="choose__details-description">
                            Experience transparency and customer-focused service that ensures a satisfying coffee journey from start to finish.
                            </p>
                        </div>
                    </div>
                </div>
        </div>
        
        <img src={chooseImg} alt="" className="choose__img" />
        </div>
    </div>
  )
}

export default Choosing