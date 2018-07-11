import React from 'react';
import Link from 'gatsby-link';

import logo from '../images/logo.svg';
import menuIcon from '../images/menuIcon.svg';
import styles from './Header.module.css';

class Header extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      hideNav: true
    }

    this.toggleNav = this.toggleNav.bind(this);
    this.dismissNav = this.dismissNav.bind(this);
  }

  toggleNav() {
    const hideNav = this.state.hideNav;
    this.setState({ hideNav: !hideNav });
  }

  dismissNav() {
    this.setState({ hideNav: true });
  }

  render() {
    const { hideNav } = this.state;
    const navStyle = hideNav ? `${styles.headerNav} ${styles.headerNavHidden}` : `${styles.headerNav}`;

    return (
      <div className={styles.header}>
        <div className={styles.headerMain}>
          <Link to="/"><img className={styles.logo} src={logo} /></Link>
          <img onClick={this.toggleNav} className={styles.menuIcon} src={menuIcon} />
        </div>
        <nav className={navStyle}>
          <Link
            onClick={this.dismissNav}
            to="/foodMenu">
            Food
          </Link>
          <Link
            onClick={this.dismissNav}
            to="/drinks">
            Drinks
          </Link>
          <Link
            onClick={this.dismissNav}
            to="/about">
            About
          </Link>
          <Link
            onClick={this.dismissNav}
            to="/contact">
            Contact
          </Link>
        </nav>
      </div>
    );
  }
};

export default Header;