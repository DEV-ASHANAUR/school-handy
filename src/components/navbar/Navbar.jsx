import React from 'react'
import styles from './navbar.module.css';
import {BsArrowRight} from 'react-icons/bs'

import { RiMenuAddFill } from 'react-icons/ri'

const Navbar = () => {
  return (
    <section className={styles.nav__wrapper}>
        <nav className={`container d-flex justify-content-between align-items-center`}>
            <div className={`${styles.nav__left} d-flex`}>
                <div className={styles.nav__brand}>
                    <a href="#">BrandName</a>
                </div>
                <ul className={`${styles.nav__links} align-items-center`}>
                    <li><a className={styles.nav__link} href="#">Home</a></li>
                    <li><a className={styles.nav__link} href="#">Product</a></li>
                    <li><a className={styles.nav__link} href="#">Pricing</a></li>
                    <li><a className={styles.nav__link} href="#">Contact</a></li>
                </ul>
            </div> 
            <div className={`${styles.nav__right}`}>
                <RiMenuAddFill className={styles.menu__add} />
                <ul className={`${styles.nav__links} d-flex align-items-center buttons-gap`}>
                    <li><a className={styles.login} href="#">Login</a></li>
                    <li><a className={styles.join__us} href="#">JOIN US <BsArrowRight className={styles.arrow} /></a></li>
                </ul>
            </div>
        </nav>
    </section>
  )
}

export default Navbar