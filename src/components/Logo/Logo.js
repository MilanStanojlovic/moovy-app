import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Logo.modules.css';

const logo = props => {
  return (
    <div className={styles.LogoContainer}>
      <Link className={styles.Logo} to="/movies">
        moovy
      </Link>
    </div>
  );
}

export default logo;