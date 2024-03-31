import React, { useState } from 'react';
import '../styles/contact.css';

const Contactus = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [formMessage, setFormMessage] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();

    // Basic validation
    if (!name.trim() || !email.trim() || !message.trim()) {
      setFormMessage('Please fill out all fields.');
      return;
    }

    // Simulate form submission (replace with your actual logic)
    console.log(`Name: ${name}, Email: ${email}, Message: ${message}`);
    setFormMessage('Message sent successfully!');
    setName('');
    setEmail('');
    setMessage('');
  };

  return (
    <div className="container">
      <h1>Contact Us</h1>
      <p>We'd love to hear from you!</p>

      <form id="contact-form" onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="message">Message:</label>
          <textarea
            id="message"
            name="message"
            rows="5"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            required
          />
        </div>

        <button type="submit">Send Message</button>
      </form>

      {formMessage && <div id="form-message">{formMessage}</div>}
    </div>
  );
};

export default Contactus;
