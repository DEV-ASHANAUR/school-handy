import React from 'react'
import Heading from '../heading/Heading'
import './newsletter.css'

const Newsletter = () => {
    return (
        <section>
            <div className="container">
                <Heading first="Newsletter" second="Our Experts Teacher" third="Problems trying to resolve the conflict between the two major realms of Classical physics: Newtonian mechanics " centerMode={true} />

                <div className="newsletter__form">
                    <input type="text" />
                    <button>Subscribe</button>
                </div>
            </div>

        </section>
    )
}

export default Newsletter