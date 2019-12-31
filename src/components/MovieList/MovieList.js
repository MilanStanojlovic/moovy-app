import React, { Component } from 'react';
import axios from 'axios';
import styles from './MovieList.modules.css';
import { Link } from 'react-router-dom';

import MovieCard from '../../components/MovieCard/MovieCard';
import Loader from '../Loader/Loader';


class MovieList extends Component {

  state = {
    movieList: [],
    loading: false
  }


  getMovies = () => {
    this.setState({loading: true});
    const apiKey = 'e826d7cae51a970759bd99a85655ac2f';
    const nowPlayingMovieList = `https://api.themoviedb.org/3/movie/now_playing?api_key=${apiKey}&language=en-US&page=1`;
    axios.get(nowPlayingMovieList).then(response => {
      // console.log(response.data.results);
      const movies = response.data.results.slice(0, 12);
      //console.log(movies);
      this.setState({ movieList: movies, loading: false })
    }).catch(error=>{
      console.log(error);
    })
  }

  getMoviesByGenre = (apiKey, genreId) => {
    this.setState({loading: true});
    let url = `https://api.themoviedb.org/3/discover/movie?api_key=${apiKey}&language=en-US&sort_by=popularity.desc&with_genres=${genreId}`;
    axios.get(url).then(response => {
      const movies = response.data.results.slice(0, 12);
      //console.log(movies);
      this.setState({ movieList: movies, loading: false });
    });
  }

  getMoviesByPopularity = (apiKey, popularity) => {
    this.setState({loading: true})
    let url = `https://api.themoviedb.org/3/movie/${popularity}?api_key=${apiKey}&language=en-US&page=1`;
    //console.log(this.props.match.params.search);
    axios.get(url).then(response => {
      const movies = response.data.results.slice(0, 12);
      //console.log(movies);
      this.setState({ movieList: movies, loading:false });
    });
  }

  componentDidMount() {
    //console.log('[DidMount]', this.props);
    const apiKey = 'e826d7cae51a970759bd99a85655ac2f';
    this.getMovies();

    if (this.props.match.params.id) {
      this.getMoviesByGenre(apiKey, this.props.match.params.id);
    }

    if(this.props.match.params.search){
      this.getMoviesByPopularity(apiKey, this.props.match.params.search);
    }
  }


  componentDidUpdate(prevProps) {
    //console.log('[DidUpdate]', this.props);
    const apiKey = 'e826d7cae51a970759bd99a85655ac2f';

    if (this.props.match.params.id !== prevProps.match.params.id) {
      //console.log(this.props.match.params.id);
      this.getMoviesByGenre(apiKey, this.props.match.params.id);
    }

    if (this.props.match.params.search) {
      if (this.props.match.params.search !== prevProps.match.params.search) {
        this.getMoviesByPopularity(apiKey, this.props.match.params.search);
      }
    }
  }

  render() {
    let movies = <Loader/>
    if (!this.state.loading) {
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
