import React from "react";
import styles from "../style/Steps.module.css";
import { FaMapMarkerAlt, FaHeart, FaPaperPlane, FaBuilding } from "react-icons/fa";


import chooseIcon from "../assets/Steps/choose.jpg";
import paymentIcon from "../assets/Steps/payment.jpg";
import airportIcon from "../assets/Steps/airport.jpg";
import tripImg from "../assets/Steps/trip.jpg";
import profileImg from "../assets/Steps/profile.jpg";

const Steps = () => {
    return (
        <section className={styles.stepsSection}>
            <div className={styles.stepsInner}>

                {/* LEFT SIDE */}
                <div className={styles.left}>
                    <p className={styles.smallTitle}>Easy and Fast</p>
                    <h2 className={styles.heading}>
                        Book Your Next Trip <br /> In 3 Easy Steps
                    </h2>

                    <div className={styles.stepList}>
                        <div className={styles.stepItem}>
                            <img src={chooseIcon} className={styles.stepIcon} />
                            <div>
                                <h4 className={styles.stepTitle}>Choose Destination</h4>
                                <p className={styles.stepDesc}>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                </p>
                            </div>
                        </div>

                        <div className={styles.stepItem}>
                            <img src={paymentIcon} className={styles.stepIcon} />
                            <div>
                                <h4 className={styles.stepTitle}>Make Payment</h4>
                                <p className={styles.stepDesc}>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                </p>
                            </div>
                        </div>

                        <div className={styles.stepItem}>
                            <img src={airportIcon} className={styles.stepIcon} />
                            <div>
                                <h4 className={styles.stepTitle}>Reach Airport on Selected Date</h4>
                                <p className={styles.stepDesc}>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* RIGHT SIDE CARD */}
                <div className={styles.right}>

                    {/* Main Trip Card */}
                    <div className={styles.tripCard}>
                        <img src={tripImg} className={styles.tripImg} />

                        <h3 className={styles.tripTitle}>Trip To Greece</h3>
                        <p className={styles.tripMeta}>14–29 June | by Robbin</p>

                        <div className={styles.tripIcons}>
                            <FaMapMarkerAlt className={styles.iconReact} />
                            <FaHeart className={styles.iconReact} />
                            <FaPaperPlane className={styles.iconReact} />
                        </div>


                        <p className={styles.people}> <FaBuilding/> 24 people going</p>
                    </div>

                    {/* Floating Ongoing Card */}
                    <div className={styles.floatCard}>
                        <img src={profileImg} className={styles.floatImg} />
                        <div>
                            <p className={styles.floatStatus}>Ongoing</p>
                            <h4 className={styles.floatTitle}>Trip to Rome</h4>
                            <p className={styles.progressText}><span className={styles.status}>40%</span> completed</p>

                            <div className={styles.progressBar}>
                                <div className={styles.progress}></div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default Steps;
