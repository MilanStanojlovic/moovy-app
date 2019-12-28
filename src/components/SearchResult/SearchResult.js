import React from 'react';
import styles from './SearchResult.modules.css';

const SearchResult = (props) => {
  return (
    <div className={styles.ResultItem}>
      <div className={styles.ImageContainer}>
        <img src={`https://image.tmdb.org/t/p/w500${props.image}`} alt="movie poster" />
      </div>
      <div className={styles.MovieInfo}>
        <p className={styles.Title}>{props.title}</p>
        <p className={styles.Rating}>{props.rating}/10</p>
      </div>
    </div>
  );
}

export default SearchResult;
