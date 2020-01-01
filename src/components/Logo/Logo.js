import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Logo.module.css';

const logo = props => {
  return (
    <div className={styles.LogoContainer}>
      <Link className={styles.Logo} to="/movies/now_playing">
        moovy
      </Link>
    </div>
  );
}

export default logo;