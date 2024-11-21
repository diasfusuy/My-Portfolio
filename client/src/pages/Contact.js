// src/pages/Contact.js
import React from 'react';
import '../components/Contact.css';

const Contact = () => {
  return (
    <div className="contact-container">
      <div className="contact-form">
        <h2 className="contact-title">
          <span className="contact-icon">💬</span> Get in touch
        </h2>
        <form>
          <div className="form-group">
            <div className="form-row">
              <label htmlFor="first-name">First name</label>
              <input type="text" id="first-name" placeholder="First name" />
            </div>
            <div className="form-row">
              <label htmlFor="last-name">Last name</label>
              <input type="text" id="last-name" placeholder="Last name" />
            </div>
          </div>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input type="email" id="email" placeholder="Email" />
          </div>
          <div className="form-group">
            <label htmlFor="message">Message</label>
            <textarea id="message" rows="5" placeholder="Message"></textarea>
          </div>
          <button type="submit" className="form-submit">
            Send Message
          </button>
        </form>
      </div>
      <div className="contact-info">
        <h2 className="contact-title">
          <span className="contact-icon">👤</span> Contact Information
        </h2>
        <p>
          <span className="contact-detail">📞</span> +1 312-513-7177
        </p>
        <p>
          <span className="contact-detail">📧</span> diasfusuy4@gmail.com
        </p>
        <p>
          <span className="contact-detail">📍</span> 216 Burton Dr. Bartlett, IL,
          USA
        </p>
      </div>
    </div>
  );
};

export default Contact;
