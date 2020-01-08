import React from 'react';
import styles from './Tmdb.module.css';

const Tmdb = () => {
  return(
  <div className={styles.Tmdb}>
    <img className={styles.Image} src="https://www.themoviedb.org/assets/2/v4/logos/408x161-powered-by-rectangle-green-bb4301c10ddc749b4e79463811a68afebeae66ef43d17bcfd8ff0e60ded7ce99.png" alt="tmdbLogo"/>
  </div>)
}
export default Tmdb;