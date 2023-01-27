import React from 'react'

import { AiFillStar } from 'react-icons/ai'

const TestiItem = ({item}) => {
    const {name,designation,photo,description,rating} = item;
    return (
        <div className="col-md-6">
            <div className="test__wrapper">
                <div className="test__image">
                    <img src={photo} alt="" />
                </div>
                <p className='test_desc'>{description}</p>
                <div className="test__rating">
                    {Array(rating).fill().map(()=>(
                        <AiFillStar />
                    ))}
                    {/* <AiFillStar />
                    <AiFillStar />
                    <AiFillStar />
                    <AiFillStar />
                    <AiFillStar /> */}
                </div>
                <h2 className='test__name'>{name}</h2>
                <p className='test__desig'>{designation}</p>
            </div>
        </div>
    )
}

export default TestiItem