import React, { Component } from 'react';
import axios from 'axios';
import styles from './Movie.modules.css';

class Movie extends Component {
  state = {
    movie: null
  }

  componentDidMount() {
    const apiKey = 'e826d7cae51a970759bd99a85655ac2f'
    const movieUrl = `https://api.themoviedb.org/3/movie/${this.props.match.params.id}?api_key=${apiKey}&language=en-US`;
    axios.get(movieUrl).then(response => {
      // console.log(response.data);
      this.setState({ movie: response.data });
    })
  }

  componentDidUpdate(prevProps){
    console.log('[Did update]');
    console.log(this.props);
    const apiKey = 'e826d7cae51a970759bd99a85655ac2f'
    const movieUrl = `https://api.themoviedb.org/3/movie/${this.props.match.params.id}?api_key=${apiKey}&language=en-US`;
    if(this.props.match.params.id !== prevProps.match.params.id){
      axios.get(movieUrl).then(response => {
        this.setState({ movie: response.data });
      })
    }
  }

  render() {
    let movie = <h1 style={{ color: 'white' }}>Loading</h1>;
    if (this.state.movie) {
      movie = (
        <div className={styles.MovieContainer}>
          <div className={styles.ImageWrapper}>
            <img src={`https://image.tmdb.org/t/p/w500${this.state.movie.poster_path}`} alt={`poster for ${this.state.movie.title}`} />
          </div>
          <div className={styles.MovieDescription}>
            <h1 className={styles.Heading}>{this.state.movie.title}</h1>
            <h2 className={styles.Rating}>Rating: {this.state.movie.vote_average}/10</h2>
            <p>Release Date: {this.state.movie.release_date}</p>
            <p className={styles.Overview}>{this.state.movie.overview}</p>
          </div>
        </div>
      );
    }
    return movie;
  }

}

export default Movie;