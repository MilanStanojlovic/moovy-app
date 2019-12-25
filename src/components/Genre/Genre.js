import React from 'react';
import styles from './Genre.module.css';
import {Link} from 'react-router-dom';

const genre = props => {
  return (
    <li className={styles.ListItem}>
      <Link to={`/genre/${props.location}`} className={styles.Link} >{props.genreName}</Link>
      {/* <a href="/" className={styles.Link}>{props.genreName}</a> */}
    </li>
  )
}

export default genre;