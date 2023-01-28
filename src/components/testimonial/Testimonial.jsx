import React from 'react'
import Heading from '../heading/Heading'
import './testimonial.css'

import testCover1 from '../../assets/img/testimonial/testimonial-user-cover-1.png';
import testCover2 from '../../assets/img/testimonial/testimonial-user-cover-2.png';

import TestiItem from './TestiItem';

const Testimonial = () => {

  const tetimonial = [
    {
        name: "Regina Miles",
        designation: "Designer",
        photo: testCover1,
        description: "Slate helps you see how many more days you need to work to reach your financial goal for the month and year.",
        rating: 5
    },
    {
        name: "Regina Miles",
        designation: "Designer",
        photo: testCover2,
        description: "Slate helps you see how many more days you need to work to reach your financial goal for the month and year.",
        rating: 3
    },
  ]

  return (
    <section>
        <div className="container">
            <Heading first="Testimonials" second="Get Quality Education" third="Problems trying to resolve the conflict between the two major realms of Classical physics: Newtonian mechanics" centerMode={false} menuId="testimonial" />
        </div>
        <div className="container">
            <div className="row pb-5">
                {
                    tetimonial.map((item,i)=>(
                        <TestiItem key={i} item={item} />
                    ))
                }
                
            </div>
        </div>
    </section>
  )
}

export default Testimonial