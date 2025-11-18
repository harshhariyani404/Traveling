import React from "react";
import styles from "../style/Category.module.css";

import weatherIcon from "../assets/wether.jpg";
import flightsIcon from "../assets/flight.jpg";
import eventsIcon from "../assets/mic.jpg";
import gearIcon from "../assets/setting.jpg";

const Category = () => {
  const data = [
    {
      icon: weatherIcon,
      title: "Calculated Weather",
      desc: "Built Wicket longer admire do barton vanity itself do in it.",
    },
    {
      icon: flightsIcon,
      title: "Best Flights",
      desc: "Engrossed listening. Park gate sell they west hard for the.",
    },
    {
      icon: eventsIcon,
      title: "Local Events",
      desc: "Barton vanity itself do in it. Preferd to men it engrossed listening.",
    },
    {
      icon: gearIcon,
      title: "Customization",
      desc: "We deliver outsourced aviation services for military customers.",
    },
  ];

  return (
    <section className={styles.categorySection}>
      <p className={styles.categoryTop}>CATEGORY</p>
      <h2 className={styles.title}>We Offer Best Services</h2>

      <div className={styles.cardWrapper}>
        {data.map((item, index) => (
          <div key={index} className={styles.card}>

            {/* Card Content */}
            <div className={styles.cardContent}>
              <img src={item.icon} alt={item.title} className={styles.icon} />
              <h3 className={styles.cardTitle}>{item.title}</h3>
              <p className={styles.cardDesc}>{item.desc}</p>
            </div>

          </div>
        ))}
      </div>
    </section>
  );
};

export default Category;
