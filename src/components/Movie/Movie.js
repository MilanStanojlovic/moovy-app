import React, { Component } from 'react';
import axios from 'axios';
import styles from './Movie.modules.css';
import Loader from '../Loader/Loader';

class Movie extends Component {
  state = {
    movie: null,
    loading: false
  }

  getMovie = (id) => {
    this.setState({ loading: true });
    const apiKey = 'e826d7cae51a970759bd99a85655ac2f'
    const movieUrl = `https://api.themoviedb.org/3/movie/${id}?api_key=${apiKey}&language=en-US`;
    axios.get(movieUrl).then(response => {
      // console.log(response.data);
      this.setState({ movie: response.data, loading: false });
      document.title = `Moovy - ${response.data.title}`;
    }).catch(error=>{
      console.log(error);
    })
  }

  componentDidMount() {
    this.getMovie(this.props.match.params.id)
  }

  componentDidUpdate(prevProps) {
    if (this.props.match.params.id !== prevProps.match.params.id) {
      this.getMovie(this.props.match.params.id);
    }
  }

  componentWillUnmount(){
    document.title = `Moovy - Browse Movies`;
  }

  render() {
    let movie = <Loader/>
    if (this.state.movie) {
      movie = (
        <div className={styles.MovieContainer}>
          <div className={styles.ImageWrapper}>
            <img src={`https://image.tmdb.org/t/p/w500${this.state.movie.poster_path}`} alt={`poster for ${this.state.movie.title}`} />
          </div>
          <div className={styles.MovieDescription}>
            <h1 className={styles.Heading}>{this.state.movie.title}</h1>
            <h2 className={styles.Rating}>Rating: {this.state.movie.vote_average}/10</h2>
            <p className={styles.ReleaseDate}>Release Date: {this.state.movie.release_date}</p>
            <p className={styles.Overview}>{this.state.movie.overview}</p>
          </div>
        </div>
      );
    }
    return movie;
  }

}

export default Movie;