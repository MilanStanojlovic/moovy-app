import React from 'react';
import styles from './Genre.module.css';

const genre = props => {
  return (
    <li className={styles.ListItem}>
      <a href="/" className={styles.Link}>{props.genreName}</a>
    </li>
  )
}

export default genre;