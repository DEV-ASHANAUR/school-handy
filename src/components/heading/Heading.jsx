import React from 'react'
import './heading.css'
const Heading = ({first,second,third}) => {
  return (
    <div className='heading__wrapper'>
        <h3>{first}</h3>
        <h1>{second}</h1>
        <p>{third}</p>
    </div>
  )
}

export default Heading