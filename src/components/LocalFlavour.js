import React from 'react';
import Img from 'gatsby-image';

import Divider from './Divider';
import styles from './LocalFlavour.module.css';

const LocalFlavour = ({ data }) => {
  return (
    <div className={styles.section}>
      <div className={styles.content}>
        <h2>Locally Sourced Flavours</h2>
        <Divider />
        <p>We create our menus using the freshest, local seasonal ingredients.</p>
      </div>
      <Img
        outerWrapperClassName={styles.image}
        style={{height: '100%'}}
        sizes={data.childImageSharp.sizes}
      />
    </div>
  );
};

export default LocalFlavour;

