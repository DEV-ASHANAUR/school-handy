import React from 'react'
import './client.css'
import clientImg from '../../assets/img/client.png';
import { MdOutlineArrowForwardIos } from 'react-icons/md'
const Client = () => {
  return (
    <section className='client__wrapper'>
        <div className='container'>
            <div className="row client__area">
                <div className="col-md-7">
                    <img src={clientImg} className="img-fluid" alt="" />
                </div>
                <div className="col-md-5">
                    <div className="client__content">
                        <hr className='hr__tag' />
                        <h1>Every Client Matters</h1>
                        <p>Problems trying to resolve the conflict between the two major realms of Classical physics: Newtonian mechanics </p>
                        <a href="#">Learn More <MdOutlineArrowForwardIos /></a>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Client