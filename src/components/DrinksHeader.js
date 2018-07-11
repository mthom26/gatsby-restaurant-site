import React from 'react';
import Img from 'gatsby-image';

import styles from './DrinksHeader.module.css'; // 

const DrinksHeader = ({ data }) => {
  return (
    <div className={styles.section}>
      <div className={styles.content}>
        <h1>Drinks Selection</h1>
      </div>
      <Img
        outerWrapperClassName={styles.image}
        style={{height: '100%'}}
        sizes={data.childImageSharp.sizes}
      />
    </div>
  );
};

export default DrinksHeader;