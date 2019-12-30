import React, { Component } from 'react';
import axios from 'axios';
import styles from './Search.modules.css';
import { Link } from 'react-router-dom';

import SearchResult from '../SearchResult/SearchResult';

class Search extends Component {
  state = {
    query: '',
    movieList: [],
    visible: false,
  }

  handleQueryChange = (event) => {
    this.setState({ query: event.target.value });
  }

  searchResultsInvisible = () => {
    window.addEventListener('click', event=>{
      if(!this.node.contains(event.target)){
        this.setState({visible: false})
      }
    })
  }

  componentDidMount(){
    this.searchResultsInvisible();
  }

  handleButtonClick = () => {
    //console.log('clicked');
    const { query } = this.state;
    this.setState({ visible: true });
    //console.log(query);

    this.getMovies(query);

    this.setState({ query: '' });
  }

  handleLinkClick = (event) => {
    this.setState({ visible: false });
  }

  getMovies = (query) => {
    const apiKey = 'e826d7cae51a970759bd99a85655ac2f';
    const url = `https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&language=en-US&query=${query}&page=1&include_adult=false`;

    axios.get(url).then(response => {
      //console.log(response);
      const movies = response.data.results.slice(0, 3);
      this.setState({ movieList: movies });
    }).catch(error => {
      console.log(error);
    })
  }

  render() {
    const result = this.state.movieList.map(movie => {
      return <Link key={movie.id} 
          to={`/movie/${movie.id}`} 
          onClick={this.handleLinkClick}>
        <SearchResult
        title={movie.title}
        image={movie.poster_path}
        rating={movie.vote_average} />
        </Link>
    })
    return (

      <div className={styles.SearchWrapper} ref={node => (this.node = node)}>

        <div className={styles.Search}>
          <input className={styles.Input}
            type="text"
            onChange={this.handleQueryChange}
            value={this.state.query}
            placeholder="Enter moovy title..." />
          <button className={styles.SearchButton}
            onClick={this.handleButtonClick} >Search</button>
        </div>
        <div className={styles.SearchResults}>
          {this.state.visible ? result : null}
        </div>
      </div>

    )
  }
}

export default Search;
