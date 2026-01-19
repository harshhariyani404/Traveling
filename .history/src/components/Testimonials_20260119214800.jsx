import React, { useEffect, useState } from "react";
import styles from "../style/Testimonials.module.css";
import axios from "axios";

import rp1 from "../assets/testimonials/rp1.jpg";
import rp2 from "../assets/testimonials/rp2.jpg";

const Testimonials = () => {

    const logos = [
        rp1,
        rp2,
        "https://www.software.travel/wp-content/uploads/2020/03/expedia.png",
        "https://alternativeairlines.com/images/global/airlinelogos/qf_logo.gif",
        "https://download.logo.wine/logo/Alitalia/Alitalia-Logo.wine.png"
    ];

    const [testimonials, setTestimonials] = useState([]);
    const [index, setIndex] = useState(0);
    const [fade, setFade] = useState(true);   // 🔥 fade animation state

    useEffect(() => {
        axios.get("https://travel-json-api.onrender.com/testimonials")
            .then(res => setTestimonials(res.data))
            .catch(err => console.log("Error:", err));
    }, []);

    const next = () => {
        setFade(false);               // fade out
        setTimeout(() => {
            setIndex(prev => (prev === testimonials.length - 1 ? 0 : prev + 1));
            setFade(true);            // fade in
        }, 250);
    };

    const prev = () => {
        setFade(false);
        setTimeout(() => {
            setIndex(prev => (prev === 0 ? testimonials.length - 1 : prev - 1));
            setFade(true);
        }, 250);
    };

    if (testimonials.length === 0) return null;

    const t = testimonials[index];
    const nextCard = testimonials[(index + 1) % testimonials.length];

    return (
        <section className={styles.section}>
            <div className={styles.container}>

                {/* LEFT SIDE */}
                <div className={styles.left}>
                    <p className={styles.topText}>TESTIMONIALS</p>
                    <h2 className={styles.title}>
                        What People Say<br />About Us.
                    </h2>

                    {/* DOTS */}
                    <div className={styles.dots}>
                        {testimonials.map((_, i) => (
                            <span
                                key={i}
                                className={`${styles.dot} ${i === index ? styles.activeDot : ""}`}
                            />
                        ))}
                    </div>
                </div>

                {/* RIGHT SIDE */}
                <div className={styles.right}>

                    {/* BACK CARD */}
                    <div className={styles.backCard}>
                        <p className={styles.nameSmall}>{nextCard.name}</p>
                        <p className={styles.roleSmall}>{nextCard.role}</p>
                    </div>

                    {/* MAIN CARD WITH FADE */}
                    <div className={`${styles.card} ${fade ? styles.fadeIn : styles.fadeOut}`}>
                        <img src={t.avatar} className={styles.avatar} alt="avatar" />

                        <p className={styles.message}>{t.message}</p>
                        <p className={styles.name}>{t.name}</p>
                        <p className={styles.role}>{t.role}</p>
                    </div>

                    {/* ARROWS */}
                    <div className={styles.arrowsWrapper}>
                        <button className={styles.arrowUp} onClick={prev}>^</button>
                        <button className={styles.arrowDown} onClick={next}>˅</button>
                    </div>

                </div>
            </div>

            {/* BRAND LOGOS */}
            <div className={styles.brandsSection}>
                <div className={styles.brandsCard}>
                    {logos.map((logo, index) => (
                        <div key={index} className={styles.logoBox}>
                            <img src={logo} alt="brand" className={styles.logo} />
                        </div>
                    ))}
                </div>
            </div>

        </section>
    );
};

export default Testimonials;
