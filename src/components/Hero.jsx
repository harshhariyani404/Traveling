import React from "react";
import styles from "../style/Hero.module.css";
import heroImg from "../assets/heroimg.jpg";
import plane from "../assets/flight.jpg";


const Hero = () => {
  return (
    <section className={styles.heroSection}>
      <div className={styles.heroInner}>

        {/* LEFT TEXT */}
        <div className={styles.left}>
          <p className={styles.topText}>BEST DESTINATIONS AROUND THE WORLD</p>

          <h1 className={styles.title}>
            Travel, <span className={styles.underline}>enjoy</span> <br />
            and live a new <br /> and full life
          </h1>

          <p className={styles.subtitle}>
            Built Wicket longer admire do barton vanity itself do in it. Preferred to
            sportsmen it engrossed listening. Park gate sell they west hard for the.
          </p>

          {/* BUTTONS */}
          <div className={styles.buttons}>
            <button className={styles.primaryBtn}>Find out more</button>

            <div className={styles.playWrapper}>
              <div className={styles.playCircle}>▶</div>
              <span className={styles.playText}>Play Demo</span>
            </div>
          </div>
        </div>

        {/* RIGHT IMAGE */}
        <div className={styles.right}>

          {/* Airplanes */}
          <img src={plane} className={styles.planeLeft} alt="plane" />
          <img src={plane} className={styles.planeRight} alt="plane" />

          <img src={heroImg} alt="Traveller" className={styles.heroImg} />
        </div>


      </div>
    </section>
  );
};

export default Hero;
