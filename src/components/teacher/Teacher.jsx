import React from 'react'
import Heading from '../heading/Heading';
import './teacher.css';
import hat from '../../assets/img/icon/001-graduation-hat.png';
import bag from '../../assets/img/icon/icon cool-icon-n11.svg';
import TCard from './TCard';
const Teacher = () => {
  const Teachers = [
    {
        icon: hat,
        title:"Training Courses",
        description:"The gradual accumulation of information about"
    },
    {
        icon: bag,
        title:"Training Courses",
        description:"The gradual accumulation of information about"
    },
    {
        icon: hat,
        title:"Training Courses",
        description:"The gradual accumulation of information about"
    },
    {
        icon: bag,
        title:"Training Courses",
        description:"The gradual accumulation of information about"
    }
  ]
  return (
    <section>
        <div className="container">
            <Heading first="Practice Advice" second="Our Experts Teacher" third="Problems trying to resolve the conflict between the two major realms of Classical physics: Newtonian mechanics" menuId="expert" />
            
            <div className="row teacher__wrapper">
                {
                    Teachers.map((item,i)=>(
                        <TCard item={item} key={i} />
                    ))
                }
                
            </div>

        </div>
    </section>
  )
}

export default Teacher