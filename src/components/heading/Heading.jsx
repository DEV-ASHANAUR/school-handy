import React from 'react'
import './heading.css'
const Heading = ({first,second,third,centerMode}) => {
  return (
    <div className={`heading__wrapper ${centerMode && 'text-center'}`}>
        <h3>{first}</h3>
        <h1>{second}</h1>
        <p className={`${centerMode && 'm-auto'}`}>{third}</p>
    </div>
  )
}

export default Heading