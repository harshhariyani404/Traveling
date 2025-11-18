import React from 'react';
import { useState, useEffect } from 'react';
import axios from 'axios';
import styles from '../style/Destinations.module.css';


const Destinations = () => {
    const [destinations, setDestinations] = useState([]);
    useEffect(() => {
        axios.get("http://localhost:4000/destinations")
            .then(res => {
                console.log("API DATA:", res.data);
                setDestinations(res.data);
            })
            .catch(err => console.log(err));
    }, []);


    return (
        <section className={styles.destSection}>
            <p className={styles.topText}>Top Selling</p>
            <h2 className={styles.title}>Top Destinations</h2>

            <div className={styles.cardWrapper}>
                {destinations.map(item => (
                    <div key={item.id} className={styles.card}>
                        <img src={item.image} alt={item.city} className={styles.img} />

                        <div className={styles.info}>
                            <div className={styles.row}>
                                <h3>{item.city}</h3>
                                <span>{item.price}</span>
                            </div>

                            <p className={styles.duration}>
                                <i className="ri-navigation-line"></i>
                                {item.duration}
                            </p>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Destinations;    
