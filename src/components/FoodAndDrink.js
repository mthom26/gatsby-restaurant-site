import React from 'react';
import Img from 'gatsby-image';

import Divider from './Divider';
import Button from './Button';
import styles from './FoodAndDrink.module.css';

const FoodAndDrink = ({ foodImage, drinkImage }) => {
  return (
    <div className={styles.section}>
      <div className={styles.item}>
        <div className={`${styles.content} ${styles.brownBackground}`}>
          <h2>Food Menu</h2>
          <p>View our food menu.</p>
          <Divider />
          <Button linkLocation="/foodMenu">View Food Menu</Button>
        </div>
        <Img
          outerWrapperClassName={styles.image}
          style={{height: '100%'}}
          sizes={foodImage.childImageSharp.sizes}
        />
      </div>
      <div className={styles.item}>
        <div className={`${styles.content} ${styles.blackBackground}`}>
          <h2>Drinks Menu</h2>
          <p>View our drinks menu.</p>
          <Divider />
          <Button linkLocation="/drinks">View Drinks</Button>
        </div>
        <Img
          outerWrapperClassName={styles.image}
          style={{height: '100%'}}
          sizes={drinkImage.childImageSharp.sizes}
        />
      </div>
    </div>
  );
};

export default FoodAndDrink;

