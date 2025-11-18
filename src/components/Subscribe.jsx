import React, { useState } from 'react';
import styles from '../style/Subscribe.module.css';
import { FaPaperPlane, FaEnvelope } from 'react-icons/fa';
import axios from 'axios';

const Subscribe = () => {
  const [email, setEmail] = useState('');
  const [statusMessage, setStatusMessage] = useState('');
  const [loading, setLoading] = useState(false);

  
const handleSubmit = async (e) => {
  e.preventDefault();

  setLoading(true);
  setStatusMessage("");

  try {
    const response = await axios.post("http://localhost:4000/subscribers", {
      email: email,
    });

    setStatusMessage("Subscription successful! Thank you.");
    setEmail(""); // Clear input
  } catch (error) {
    setStatusMessage(
      error.response?.data?.message ||
      "Failed to subscribe. Please try again."
    );
  } finally {
    setLoading(false);
  }
};

  return (
    <section className={styles.subscribeSection}>
      <h2 className={styles.title}>
        Subscribe to get information, latest news and other <br /> interesting offers about Jadoo
      </h2>
      <form className={styles.form} onSubmit={handleSubmit}>
        <label htmlFor="email" className={styles.emailLabel}>
          <FaEnvelope className={styles.mailIcon} aria-hidden="true" />
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Your email"
            required
            className={styles.emailInput}
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            disabled={loading}
          />
        </label>
        <button type="submit" className={styles.subscribeButton} disabled={loading}>
          {loading ? 'Submitting...' : 'Subscribe'}
        </button>
      </form>
      {statusMessage && <p className={styles.statusMessage}>{statusMessage}</p>}
      <div className={styles.circleIcon}>
        <FaPaperPlane className={styles.icon} aria-hidden="true" />
      </div>
    </section>
  );
};

export default Subscribe;