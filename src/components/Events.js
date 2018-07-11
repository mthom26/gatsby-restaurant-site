import React from 'react';
import Img from 'gatsby-image';
import Link from 'gatsby-link';

import Divider from './Divider';
import Button from './Button';
import styles from './Events.module.css';

const Events = ({ eventsImage }) => {
  return (
    <div className={styles.section}>
      <div className={styles.content}>
        <h2>Events & Functions</h2>
        <Divider />
        <p>We offer multiple private areas for events & functions.</p>
        <Button linkLocation="/contact">Get In Touch</Button>
      </div>
      <Img
        outerWrapperClassName={styles.image}
        style={{height: '100%'}}
        sizes={eventsImage.childImageSharp.sizes}
      />
    </div>
  );
};

export default Events;
