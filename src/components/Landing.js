import React from 'react';
import Img from 'gatsby-image';

import styles from './Landing.module.css';
import logo from '../images/logo.svg';
import address from '../images/addressWhite.svg';
import email from '../images/emailWhite.svg';
import phone from '../images/phoneWhite.svg';

const HomeMain = ({ data }) => {
  return (
    <div className={styles.landing}>
      <div className={styles.landingContent}>
        <img className={styles.logo} src={logo} />
        <h1>Welcome</h1>
        <h2>Restaurant Site!</h2>
        <div className={styles.bits}><img src={address}/><p>123 Anystreet, Anytown</p></div>
        <div className={styles.bits}><img src={phone}/><p>012 345678</p></div>
        <div className={styles.bits}><img src={email} /><p>email@email.com</p></div>
      </div>
      <Img
        outerWrapperClassName={styles.landingImage}
        style={{height: '100%'}}
        sizes={data.childImageSharp.sizes}
      />
    </div>
  );
};

export default HomeMain;