import React from 'react';
import styles from './GenreButton.module.css';
import {Link} from 'react-router-dom';

const GenreButton = props => {
  return (
      <Link to={`/movies/genre/${props.location}`} className={styles.LinkButton} >{props.genreName}</Link>
  )
}

export default GenreButton;