import React from 'react';
import {
  withScriptjs,
  withGoogleMap,
  GoogleMap,
  Marker
} from "react-google-maps";

import Divider from './Divider';
import styles from './ContactAndMap.module.css';
import address from '../images/address.svg';
import email from '../images/email.svg';
import phone from '../images/phone.svg';

// view docs here https://tomchentw.github.io/react-google-maps/ 
const MyMapComponent = withScriptjs(withGoogleMap(() => {
  return (
    <GoogleMap
      defaultZoom={16}
      defaultCenter={{ lat: 54.343, lng: -7.6315 }}
    >
      <Marker position={{ lat: 54.3433, lng: -7.6315 }}/>
    </GoogleMap>
  );
}));

const ContactAndMap = () => {
  return (
    <div className={styles.section}>
      <div className={styles.contact}>
        <h2>Contact Us</h2>
        <Divider />
        <div className={styles.bits}><img src={address}/><p>123 Anystreet, Anytown</p></div>
        <div className={styles.bits}><img src={phone}/><p>012 345678</p></div>
        <div className={styles.bits}><img src={email} /><p>email@email.com</p></div>
      </div>
      <div className={styles.googleMap}>
        <MyMapComponent
          googleMapURL={`https://maps.googleapis.com/maps/api/js?key=${process.env.GATSBY_GOOGLE_MAP_KEY}&v=3.exp&libraries=geometry,drawing,places`}
          loadingElement={<div style={{ height: `100%` }} />}
          containerElement={<div style={{ height: `400px` }} />}
          mapElement={<div style={{ height: `100%` }} />}
        />
      </div>
    </div>
  );
};

export default ContactAndMap;
