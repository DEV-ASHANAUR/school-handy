import React, { useState } from 'react'
import styles from './navbar.module.css';

import {BsArrowRight} from 'react-icons/bs'
import { AiOutlineMenuFold } from 'react-icons/ai'
import { AiOutlineMenuUnfold } from 'react-icons/ai'

const Navbar = () => {
  const [trigger,setTirgger] = useState(false);
  return (
    <section className={styles.nav__wrapper}>
        <nav className={`container d-flex justify-content-between align-items-center`}>
            {/* desktop menu */}
            <div className={`${styles.nav__left} d-flex`}>
                <div className={styles.nav__brand}>
                    <a href="#">BrandName</a>
                </div>
                <ul className={`${styles.nav__links} align-items-center`}>
                    <li><a className={styles.nav__link} href="#">Home</a></li>
                    <li><a className={styles.nav__link} href="#quality">Quality</a></li>
                    <li><a className={styles.nav__link} href="#expert">Expert</a></li>
                    <li><a className={styles.nav__link} href="#course">Courses</a></li>
                    <li><a className={styles.nav__link} href="#testimonial">Tesimonial</a></li>
                </ul>
            </div> 
            <div className={`${styles.nav__right}`}>
                {/* open and close mobile menu trigger */}
                {
                    trigger ? (<AiOutlineMenuUnfold onClick={()=>setTirgger(false)} className={styles.menu__add} />) : 
                    (<AiOutlineMenuFold onClick={()=>setTirgger(true)} className={styles.menu__add} />)
                }
                <ul className={`${styles.nav__links} d-flex align-items-center buttons-gap`}>
                    <li><a className={styles.login} href="#">Login</a></li>
                    <li><a className={styles.join__us} href="#">JOIN US <BsArrowRight className={styles.arrow} /></a></li>
                </ul>
            </div>
            {/* desktop menu */}

            {/* mobile__menu */}
            <div className={`${styles.mobile__menu} ${trigger && 'mobile__triggger'}`}>
                <ul className={`${styles.mobile__nav__links} align-items-center`}>
                    <li><a onClick={()=>setTirgger(false)} className={styles.mobile__nav__link} href="#">Home</a></li>
                    <li><a onClick={()=>setTirgger(false)} className={styles.mobile__nav__link} href="#quality">Quality</a></li>
                    <li><a onClick={()=>setTirgger(false)} className={styles.mobile__nav__link} href="#expert">Expert</a></li>
                    <li><a onClick={()=>setTirgger(false)} className={styles.mobile__nav__link} href="#course">Courses</a></li>
                    <li><a onClick={()=>setTirgger(false)} className={styles.mobile__nav__link} href="#testimonial">Tesimonial</a></li>
                </ul>
                <ul className={`${styles.mobile__nav__links} d-flex align-items-center buttons-gap`}>
                    <li><a onClick={()=>setTirgger(false)} className={styles.mobile__nav__link} href="#">Login</a></li>
                    <li><a onClick={()=>setTirgger(false)} className={styles.join__us} href="#">JOIN US <BsArrowRight className={styles.arrow} /></a></li>
                </ul>
            </div>
            {/* mobile__menu */}

        </nav>
    </section>
  )
}

export default Navbar