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
      //console.log(movies);
      this.setState({ movieList: movies })
    })
    console.log('[DidMount]', this.props);
    let url = `https://api.themoviedb.org/3/discover/movie?api_key=${apiKey}&language=en-US&sort_by=popularity.desc&with_genres=${this.props.match.params.id}`;
    if(this.props.match.params.id){
      axios.get(url).then(response => {
        const movies = response.data.results.slice(0, 12);
        console.log(movies);
        this.setState({ movieList: movies });
      });
    }
  }

  // getMoviesByGenreId = (apiKey, genreId) => {
  //   let url = `https://api.themoviedb.org/3/discover/movie?api_key=${apiKey}&language=en-US&sort_by=popularity.desc&with_genres=${this.props.match.params.id}`;
  //   const movieList = [];
  //   axios.get(url).then(response => {
  //     const movies = response.data.results.slice(0, 12);
  //     for (let key in movies) {
  //       movieList.push({
  //         ...movies[key],
  //         id: key
  //       });
  //     }
  //     // console.log(movieList);
  //     return movieList;
  //   })
  // }

  componentDidUpdate(prevProps) {
    console.log('[DidUpdate]', this.props);
    const apiKey = 'e826d7cae51a970759bd99a85655ac2f';
    let url = `https://api.themoviedb.org/3/discover/movie?api_key=${apiKey}&language=en-US&sort_by=popularity.desc&with_genres=${this.props.match.params.id}`;
    
    if (this.props.match.params.id !== prevProps.match.params.id) {
      console.log(this.props.match.params.id);
      axios.get(url).then(response => {
        const movies = response.data.results.slice(0, 12);
        console.log(movies);
        this.setState({ movieList: movies });
      });
      // const moviesByGenre = this.getMoviesByGenreId(apiKey, this.props.match.params.id);
      // console.log(moviesByGenre);
    }
  }

  componentWillUnmount(){
    console.log('[WillUnmount]');
  }

  render() {
    let movies = <h1 style={{ color: 'white' }}>LOADING</h1>
    if (this.state.movieList) {
      movies = this.state.movieList.map(movie => {
        return (
          <Link to={`/movie/${movie.id}`} key={movie.id} className={styles.Link}>
            <MovieCard
              image={movie.poster_path}
              title={movie.title}
              rating={movie.vote_average}
              description={movie.overview.slice(0, 75)} />
          </Link>)
      })
    }

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
