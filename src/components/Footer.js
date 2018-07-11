import React from 'react';

import logo from '../images/logo.svg';
import email from '../images/emailWhite.svg';
import phone from '../images/phoneWhite.svg';
import styles from './Footer.module.css';

class Footer extends React.Component {
  render() {
    return (
      <div className={styles.footer}>
        <div className={styles.footerCol}>
          <div className={styles.bits}><img src={phone}/><p>012 345678</p></div>
          <div className={styles.bits}><img src={email} /><p>email@email.com</p></div>
        </div>
        <div className={styles.footerCol}>
          <img className={styles.logo} src={logo} />
        </div>
        <div className={styles.footerCol}>
          {/* Intentionally empty col */}
        </div>
      </div>
    );
  }
}

export default Footer;