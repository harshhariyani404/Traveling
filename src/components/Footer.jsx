import React from "react";
import styles from "../style/Footer.module.css";

import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";
import { SiGoogleplay, SiAppstore } from "react-icons/si"; // Icons for Google Play & App Store

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        {/* brand */}
        <div className={styles.brandBox}>
          <h2 className={styles.logo}>Jadoo.</h2>
          <p className={styles.tagline}>
            Book your trip in minute, get full
            <br />
            control for much longer.
          </p>
        </div>

        {/* links */}
        <div className={styles.linksWrapper}>
          <div>
            <h4 className={styles.linkTitle}>Company</h4>
            <p className={styles.link}>About</p>
            <p className={styles.link}>Careers</p>
            <p className={styles.link}>Mobile</p>
          </div>

          <div>
            <h4 className={styles.linkTitle}>Contact</h4>
            <p className={styles.link}>Help/FAQ</p>
            <p className={styles.link}>Press</p>
            <p className={styles.link}>Affiliates</p>
          </div>

          <div>
            <h4 className={styles.linkTitle}>More</h4>
            <p className={styles.link}>Airlinefees</p>
            <p className={styles.link}>Airline</p>
            <p className={styles.link}>Low fare tips</p>
          </div>
        </div>

        {/* social + store buttons */}
        <div className={styles.rightBox}>
          <div className={styles.socials}>
            <div className={styles.circle}>
              <FaFacebookF />
            </div>
            <div className={styles.circle}>
              <FaInstagram />
            </div>
            <div className={styles.circle}>
              <FaTwitter />
            </div>
          </div>

          <p className={styles.discover}>Discover our app</p>

          <div className={styles.stores}>
            <a
              href="https://play.google.com/store"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.storeBtn}
              aria-label="Get it on Google Play"
            >
              <SiGoogleplay className={styles.storeIcon} />
              <div className={styles.textGroup}>
                <span className={styles.smallText}>GET IT ON</span>
                <span className={styles.bigText}>Google Play</span>
              </div>
            </a>

            <a
              href="https://www.apple.com/app-store/"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.storeBtn}
              aria-label="Available on the Apple Store"
            >
              <SiAppstore className={styles.storeIcon} />
              <div className={styles.textGroup}>
                <span className={styles.smallText}>Available on the</span>
                <span className={styles.bigText}>Apple Store</span>
              </div>
            </a>
          </div>
        </div>
      </div>

      <p className={styles.bottomText}>All rights reserved @jadoo.co</p>
    </footer>
  );
};

export default Footer;