import React, { Component } from 'react';
import axios from 'axios';
import styles from './MovieList.modules.css';
import { Link } from 'react-router-dom';

import MovieCard from '../../components/MovieCard/MovieCard';


class MovieList extends Component {

  state = {
    movieList: [],
  }

  componentDidMount() {
    const apiKey = 'e826d7cae51a970759bd99a85655ac2f';
    const nowPlayingMovieList = `https://api.themoviedb.org/3/movie/now_playing?api_key=${apiKey}&language=en-US&page=1`;

    axios.get(nowPlayingMovieList).then(response => {

      // console.log(response.data.results);
      const movies = response.data.results.slice(0, 12);
      console.log(movies);
      this.setState({ movieList: movies })
    })

  }

  render() {

    const movies = this.state.movieList.map(movie => {
      return (
        <Link to={`/movie/${movie.id}`} key={movie.id}>
          <MovieCard
            image={movie.poster_path}
            title={movie.title}
            rating={movie.vote_average}
            description={movie.overview.slice(0, 75)} />
        </Link>)
    })
    return (
      <div className={styles.Container}>
        <h2 className={styles.PageHeading}>Movies</h2>
        <div className={styles.MovieList}>
          {movies}
        </div>
      </div>

    )
  }
}

export default MovieList;
