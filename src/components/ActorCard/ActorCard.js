import React from 'react';
import styles from './ActorCard.modules.css';

const ActorCard = (props) => {
  return(
    <div className={styles.Card}>
      <div className={styles.ImageContainer}>
        <img src={`https://image.tmdb.org/t/p/w500${props.image}`} alt={`movie poster for ${props.title}`}></img>
      </div>
      <div className={styles.CardDescription}>
        <h2 className={styles.Heading}>{props.name}</h2>
        <p className={styles.Role}>{props.role}</p>
      </div>
    </div>
  )
};

export default ActorCard;
