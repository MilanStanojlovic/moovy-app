import React from 'react';
import styles from './MovieCard.modules.css'

const MovieCard = (props) => {
  
  let rating = props.rating;
  if(!rating || rating === 0){
    rating = '-'
  }

  return (
    <div className={styles.Card}>
      <div className={styles.ImageContainer}>
        <img src={`https://image.tmdb.org/t/p/w500${props.image}`} alt={`movie poster for ${props.title}`}></img>
      </div>
      <div className={styles.CardDescription}>
        <h2 className={styles.Heading}>{props.title}</h2>
        <h3 className={styles.Rating}>Rating: {rating}/10</h3>
        <p className={styles.Description}>{props.description}...</p>
      </div>
    </div>
  )
}

export default MovieCard;
