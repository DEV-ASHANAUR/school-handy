import React from 'react'
import Heading from '../heading/Heading';
import './teacher.css';
import hat from '../../assets/img/icon/001-graduation-hat.png';
import bag from '../../assets/img/icon/icon cool-icon-n11.svg';
const Teacher = () => {
    
  return (
    <section>
        <div className="container">
            <Heading first="Practice Advice" second="Our Experts Teacher" third="Problems trying to resolve the conflict between the two major realms of Classical physics: Newtonian mechanics" />
            
            <div className="row teacher__wrapper">
                {/* item */}
                <div className="col-md-3 box">
                    <div className="box__wrapper">
                        <div className="box__icon">
                            <img src={hat} alt="" height="32" width="32" />
                        </div>
                        <h2>Training Courses</h2>
                        <hr className='box__hr' />
                        <p>The gradual accumulation of information about </p>
                    </div>
                </div>
                {/* item */}
                {/* item */}
                <div className="col-md-3 box">
                    <div className="box__wrapper">
                        <div className="box__icon">
                            <img src={bag} alt="" height="32" width="32" />
                        </div>
                        <h2>Training Courses</h2>
                        <hr className='box__hr' />
                        <p>The gradual accumulation of information about </p>
                    </div>
                </div>
                {/* item */}
                {/* item */}
                <div className="col-md-3 box">
                    <div className="box__wrapper">
                        <div className="box__icon">
                            <img src={hat} alt="" height="32" width="32" />
                        </div>
                        <h2>Training Courses</h2>
                        <hr className='box__hr' />
                        <p>The gradual accumulation of information about </p>
                    </div>
                </div>
                {/* item */}
                {/* item */}
                <div className="col-md-3 box">
                    <div className="box__wrapper">
                        <div className="box__icon">
                            <img src={hat} alt="" height="32" width="32" />
                        </div>
                        <h2>Training Courses</h2>
                        <hr className='box__hr' />
                        <p>The gradual accumulation of information about </p>
                    </div>
                </div>
                {/* item */}
            </div>

        </div>
    </section>
  )
}

export default Teacher