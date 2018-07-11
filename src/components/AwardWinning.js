import React from 'react';
import Img from 'gatsby-image';

import Container from './Container';
import Divider from './Divider';
import styles from './AwardWinning.module.css';

const AwardWinning = ({ data }) => {
  return (
    <div className={styles.section}>
      <Container>
        <h2>Award Winning Food & Service</h2>
        <Divider />
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris gravida tortor eu libero egestas, id dapibus ante ultricies. Donec ligula nulla, egestas vel tristique sodales, vestibulum a lacus.</p>
        <div className={styles.awards}>
        
        </div>
      </Container>
    </div>
  );
};

export default AwardWinning;