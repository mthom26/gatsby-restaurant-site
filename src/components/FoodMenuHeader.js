import React from 'react';
import Img from 'gatsby-image';

import styles from './FoodMenuHeader.module.css';

const FoodMenuHeader = ({ data }) => {
  return (
    <div className={styles.section}>
      <div className={styles.content}>
        <h1>Food Menu</h1>
      </div>
      <Img
        outerWrapperClassName={styles.image}
        style={{height: '100%'}}
        sizes={data.childImageSharp.sizes}
      />
    </div>
  );
};

export default FoodMenuHeader;
