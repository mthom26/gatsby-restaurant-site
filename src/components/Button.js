import React from 'react';
import Link from 'gatsby-link';

import styles from './Button.module.css';

const Button = ({ linkLocation, children }) => {
  return (
    <Link to={linkLocation}>
      <div className={styles.button}>{children}</div>
    </Link>
  );
};

export default Button;