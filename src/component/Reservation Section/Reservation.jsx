 import React from 'react';
 import {FaRegBookmark} from 'react-icons/fa';
 import shapeTwo from '../../assets/shape-2.png';
 import shapeThree from '../../assets/shape-3.png';
 import './Reservation.css';
 
 const Reservation = () => {
   return (
     <div className='reservation container' id='reservation'>
        <h2 className="section__title" data-title='Reservation'>
            Book Your Table
        </h2>

        <form action="" className="reservation__from  grid">
            <div className="form__input-div">
                <input type="text" placeholder='Your Name' required className="from__input" />
            </div>
 
            <div className="form__input-div">
                <input type="Email" placeholder='Enter Your Email' required className="from__input" />
            </div>

            <div className="form__input-div">
                <input type="text" placeholder='Enter Phone Number' required className="from__input" />
            </div>

            <div className="form__input-div">
                <input type="text" placeholder='Date Ex: DD/MM/YY' required className="from__input" />
            </div>
             
            <div className="form__input-div">
                <input type="text" placeholder='Time Ex: 12:30PM' required className="from__input" />
            </div>

            <div className="form__input-div">
                <input type="text" placeholder='Number of Person' required className="from__input" />
            </div>

            <div className="form__input-div from__input-textarea">
               <textarea name="" placeholder='Write Your Message' id="" cols="30" rows="10" className='from__input'></textarea>
            </div>


            <button className='btn btn-flex reservation__btn '>
                <FaRegBookmark/> Book Your Table 
                </button> 
             
        </form>
        <img src={shapeTwo} alt="" className="shape__two" />
             <img src={shapeThree} alt="" className="shape__three" />
     </div>
   )
 }
 
 export default Reservation