import React from 'react'

const TCard = ({item}) => {
    const {icon,title,description} = item;
    return (
        <div className="col-lg-3 col-md-6 box">
            <div className="box__wrapper">
                <div className="box__icon">
                    <img src={icon} alt="" height="32" width="32" />
                </div>
                <h2>{title}</h2>
                <hr className='box__hr' />
                <p>{description}</p>
            </div>
        </div>
    )
}

export default TCard