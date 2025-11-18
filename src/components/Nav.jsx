import React, { useState } from "react";
import styles from "../style/Nav.module.css";
import logo from "../assets/logo.jpg";

const Nav = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className={styles.navContainer}>
      <div className={styles.navInner}>

        {/* Logo */}
        <div className="logo">
            <img src={logo} alt="Logo" className={styles.logoImg} />
        </div>
        

        {/* Hamburger Button */}
        <div className={styles.hamburger} onClick={() => setOpen(!open)}>
          {open ? "✕" : "☰"}
        </div>

        {/* Menu */}
        <ul className={`${styles.menu} ${open ? styles.menuOpen : ""}`}>
          <li>Destinations</li>
          <li>Hotels</li>
          <li>Flights</li>
          <li>Bookings</li>
          <li>Login</li>
          <li>Sign up</li>
          <li className={styles.lang}>
            EN <span className={styles.arrow}>▼</span>
          </li>
        </ul>

      </div>
    </nav>
  );
};

export default Nav;
