import React from 'react'
import Heading from '../heading/Heading';
import './course.css';
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper";
import product1 from '../../assets/img/course/product-04.png';
import product2 from '../../assets/img/course/product-03.png';
import product3 from '../../assets/img/course/product-02.png';
import product4 from '../../assets/img/course/product-01.png';


import { AiOutlineArrowLeft } from 'react-icons/ai'
import { AiOutlineArrowRight } from 'react-icons/ai'
import { AiOutlineShoppingCart } from 'react-icons/ai'
import { AiOutlineHeart } from 'react-icons/ai'
import { AiFillEye } from 'react-icons/ai'
import { AiFillStar } from 'react-icons/ai'
import { BsDownload } from 'react-icons/bs'
import { MdOutlineArrowForwardIos } from 'react-icons/md'



const Courses = () => {
    const products = [
        {
            course: "Training Courses",
            photo: product1,
            courseTitle: "Video in Live Action",
            description: "We focus on ergonomics and meeting you..",
            sales: 15,
            oldPrice: 16.48,
            newPrice: 6.48
        },
        {
            course: "Training Courses",
            photo: product2,
            courseTitle: "Our Experts Teacher",
            description: "We focus on ergonomics and meeting you..",
            sales: 15,
            oldPrice: 16.48,
            newPrice: 6.48
        },
        {
            course: "Training Courses",
            photo: product3,
            courseTitle: "Watch our Courses",
            description: "We focus on ergonomics and meeting you..",
            sales: 15,
            oldPrice: 16.48,
            newPrice: 6.48
        },
        {
            course: "Training Courses",
            photo: product4,
            courseTitle: "Every Client Matters",
            description: "We focus on ergonomics and meeting you..",
            sales: 15,
            oldPrice: 16.48,
            newPrice: 6.48
        },
        {
            course: "Training Courses",
            photo: product2,
            courseTitle: "Video in Live Action",
            description: "We focus on ergonomics and meeting you..",
            sales: 15,
            oldPrice: 16.48,
            newPrice: 6.48
        }
    ]
    return (
        <section>
            <div className='container'>
                <Heading first="Courses" second="Most Popular Courses" third="Problems trying to resolve the conflict between the two major realms of Classical physics: Newtonian mechanics" />
            </div>

            <div className="container pb-5">
                <div className="button__group">
                    <button className='blog-prev-button'><AiOutlineArrowLeft /></button>
                    <button className='blog-next-button'><AiOutlineArrowRight /></button>
                </div>
                <Swiper
                    slidesPerView={4}
                    centeredSlides={false}
                    spaceBetween={30}
                    breakpoints={{
                        0: {
                            slidesPerView: 1,
                            spaceBetween: 20,
                        },
                        576: {
                            slidesPerView: 2,
                            spaceBetween: 20,
                        },
                        768: {
                            slidesPerView: 3,
                            spaceBetween: 20,
                        },
                        992: {
                            slidesPerView: 4,
                            spaceBetween: 30,
                        },
                    }}
                    hashNavigation={{
                        watchState: true,
                    }}

                    modules={[Navigation]}
                    className="productSwipper"
                    loop={true}
                    navigation={{
                        nextEl: ".blog-next-button",
                        prevEl: ".blog-prev-button",
                        disabledClass: "swiper-button-disabled"
                    }}

                >
                    {
                        products.map((item, i) => (
                            <SwiperSlide key={i}>
                                <div className="product_container">
                                    {/* product image */}
                                    <div className="product__img">
                                        <img src={item.photo} alt="" />
                                        {/* sale__batch */}
                                        <div className="sale__batch">
                                            Sale
                                        </div>
                                        {/* fav,cart,eye buttton */}
                                        <div className='cart__wrapper'>
                                            <div className="cart__box">
                                                <AiOutlineHeart />
                                            </div>
                                            <div className="cart__box">
                                                <AiOutlineShoppingCart />
                                            </div>
                                            <div className='cart__box'>
                                                <AiFillEye />
                                            </div>
                                        </div>
                                    </div>
                                    {/* product body */}
                                    <div className="product__body">
                                        <div className="product__course">
                                            <h2>{item.course}</h2>
                                            <div className='product__rating'>
                                                <AiFillStar className='product__star' />
                                                <h2>4.9</h2>
                                            </div>
                                        </div>
                                        <h1 className='product__title'>{item.courseTitle}</h1>
                                        <p className='product__desc'>{item.description}</p>
                                        <div className="product__sale">
                                            <BsDownload className='download__icon' />
                                            <h2>{item.sales} Sales</h2>
                                        </div>
                                        <div className="product__price">
                                            <h2 className="old__price">${item.oldPrice}</h2>
                                            <h2 className="new__price">${item.newPrice}</h2>
                                        </div>
                                        <button className='show__button'>Learn More <MdOutlineArrowForwardIos /></button>
                                    </div>
                                </div>
                            </SwiperSlide>
                        ))
                    }

                </Swiper>
            </div>
        </section>
    )
}

export default Courses