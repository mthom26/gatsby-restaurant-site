import React from 'react';
import Img from 'gatsby-image';
import Link from 'gatsby-link';

import Divider from './Divider';
import Button from './Button';
import styles from './OpeningTimes.module.css';

const OpeningTimes = ({ data }) => {
  return (
    <div className={styles.section}>
      <div className={styles.times}>
        <h2>Our serving times are:</h2>
        <span><strong>Monday - Thursday</strong></span> <br/>
        <span><em>food served 12pm - 9pm</em></span>
        <br/> <br/>
        <span><strong>Friday - Saturday</strong></span> <br/>
        <span><em>food served 12pm - 10pm</em></span>
        <br/><br/>
        <span><strong>Sunday</strong></span> <br/>
        <span><em>food served 12pm - 5pm</em></span>
        <br/><br/>
        <Divider />
        <h2>Get in touch to make a reservation:</h2>
        <Button linkLocation="/contact">Get In Touch</Button>
      </div>
      <Img
        outerWrapperClassName={styles.image}
        style={{height: '100%'}}
        sizes={data.childImageSharp.sizes}
      />
      
    </div>
  );
}

export default OpeningTimes;