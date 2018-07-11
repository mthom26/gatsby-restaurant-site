import React from 'react';

import Container from './Container';
import Divider from './Divider';
import styles from './FoodMenuItems.module.css';

const FoodMenuItems = () => {
  return (
    <Container>
      <div className={styles.section}>
        <div className={styles.menu}>
          <h3>Starters</h3>
          <Divider />
          <p>Homemade soup of the day with bread £5.95</p>
          <p>Spicy chicken wings with cheese dip £5.65</p>
          <p>Battered prawns, sweet chilli sauce £6.95</p>
        </div>

        <div className={styles.menu}>
          <h3>Main Courses</h3>
          <Divider />
          <p>Roast Sirloin of beef, roast potatoes & seasonal vegetables £14.95</p>
          <p>Roast Chicken supreme, roast potatoes & seasonal veg £12.95</p>
          <p>Cheese burger, lettuce, tomato, bacon & chunky chips £13.95</p>
        </div>

        <div className={styles.menu}>
          <h3>Desserts</h3>
          <Divider />
          <p>Black Forest Gateau & cream £6.95</p>
          <p>Sticky toffee pudding & vanilla ice cream £6.45</p>
          <p>Chocolate & coconut torte £6.75</p>
        </div>
      </div>
    </Container>
  );
};

export default FoodMenuItems;