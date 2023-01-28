import React from 'react'
import './footer.css'
import { GoLocation } from 'react-icons/go'
import { BiPhoneCall } from 'react-icons/bi'
import { BsEnvelopeFill } from 'react-icons/bs'

const Footer = () => {
    return (
        <>
            <section className='footer__wrapper'>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-4 col-md-6 py-5">
                            <div className="row">
                                <div className="col-md-6">
                                    <div className="footer__list">
                                        <a href="#">Company Info</a>
                                        <a href="#">About Us</a>
                                        <a href="#">Carrier</a>
                                        <a href="#">We are hiring</a>
                                        <a href="#">Blog</a>
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="footer__list">
                                        <a href="#">Legal</a>
                                        <a href="#">About Us</a>
                                        <a href="#">Carrier</a>
                                        <a href="#">We are hiring</a>
                                        <a href="#">Blog</a>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-5 col-md-6 py-5">
                            <div className="row">
                                <div className="col-md-7">
                                    <div className="footer__list">
                                        <a href="#">Features</a>
                                        <a href="#">Business Marketing</a>
                                        <a href="#">User Analytic</a>
                                        <a href="#">Live Chat</a>
                                        <a href="#">Unlimited Support</a>
                                    </div>
                                </div>
                                <div className="col-md-5">
                                    <div className="footer__list">
                                        <a href="#">Resources</a>
                                        <a href="#">IOS & Android</a>
                                        <a href="#">Watch a Demo</a>
                                        <a href="#">Customers</a>
                                        <a href="#">API</a>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-3 col-md-12 py-5">
                            <div className="footer__list">
                                <a href="#">Get In Touch</a>
                                <a href="#"><BiPhoneCall className='footer__icon1' /> (480) 555-0103</a>
                                <a href="#"><GoLocation className='footer__icon1' /> 4517 Washington Ave. Manchester</a>
                                <a href="#"><BsEnvelopeFill className='footer__icon1' /> debra.holt@example.com</a>
                            </div>
                        </div>

                    </div>
                </div>
            </section>
            <section className='container copyright__footer'>
                <p>Made With Love By Figmaland All Right Reserved</p>
            </section>
        </>
    )
}

export default Footer