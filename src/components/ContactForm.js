import React from 'react';

import Divider from './Divider';
import styles from './ContactForm.module.css';

const ContactForm = () => {
  return (
    <div className={styles.formContainer}>
      <h1>Get In Touch</h1>
      <Divider />
      <form
        data-netlify="true"
        netlify-honeypot="bot-field"
        className={styles.form}
        name="contact"
        method="post"
        action="#"
      >
        <p style={{display: 'none'}}><label>
          Bot Field: <br/>
          <input name="bot-field"/>
        </label></p>

        <p><label>
          Name: <br/>
          <input type="text" name="name" placeholder="Enter your name here"/>
        </label></p>

        <p><label>
          Email: <br/>
          <input type="text" name="email" placeholder="Enter your email here"/>
        </label></p>

        <p><label>
          Message: <br/>
          <textarea name="message" rows="4" placeholder="Leave your message here"></textarea>
        </label></p>

        <button type="submit">Send Form</button>
      </form>
    </div>
  );
};

export default ContactForm;