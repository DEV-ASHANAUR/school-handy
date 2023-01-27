import React from 'react'
import Heading from '../heading/Heading'
import styles from './quality.module.css';
import pori from '../../assets/img/pori.png';
const Quality = () => {
  return (
    <section>
        <div className="container">
            <Heading first="Practice Advice" second="Get Quality Education" third="Problems trying to resolve the conflict between the two major realms of Classical physics: Newtonian mechanics" />
            <div className={`${styles.quality__main} row`}>
                <div className="col-md-7">
                    <img className="img-fluid" src={pori} alt="" />
                </div>
                <div className="col-md-5">
                    <div className={styles.quality__right}>
                        <h2>Most trusted in our field</h2>
                        <p>Most calendars are designed for teams. Slate s designed for freelancers </p>
                        <div className={styles.quality__items}>
                            {/* item */}
                            <div className={styles.item__wrapper}>
                                <div className={styles.item__num}>01</div>
                                <div className={styles.item}>
                                    <h2>Training Courses</h2>
                                    <p>Things on a very small that you have any direct</p>
                                </div>
                            </div>
                            {/* item */}
                            <div className={styles.item__wrapper}>
                                <div className={styles.item__num}>02</div>
                                <div className={styles.item}>
                                    <h2>Expert instruction</h2>
                                    <p>Things on a very small that you have any direct</p>
                                </div>
                            </div>
                            {/* item */}
                            <div className={styles.item__wrapper}>
                                <div className={styles.item__num}>03</div>
                                <div className={styles.item}>
                                    <h2>Expert instruction</h2>
                                    <p>Things on a very small that you have any direct</p>
                                </div>
                            </div>
                            {/* item */}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Quality