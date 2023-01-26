import React from 'react'
import styles from './hero.module.css';
import heroimg from '../../assets/img/hero-img.svg';
const Hero = () => {
  return (
    <section className={`${styles.hero__wrapper}`}>
        <div className="container">
            <div className="row">
                <div className={`${styles.hero__left} col-md-6`}>
                    <h4>For Better Future</h4>
                    <h1>25K+ STUDENTS <br /> TRUST US</h1>
                    <p>Find the right instructor for you <br /> from over 10,000 teachers</p>

                    <div className={styles.hero__buttons}>
                        <a href="#" className={styles.get_quota}>Get Quote Now</a>
                        <a className={styles.learn__more} href="#">Learn More</a>
                    </div>
                </div>
                <div className="col-md-6">
                    <img className={styles.hero__img} src={heroimg} alt="" />
                </div>
            </div>
        </div>
    </section>
  )
}

export default Hero