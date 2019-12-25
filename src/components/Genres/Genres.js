import React, { Component } from 'react'
import axios from 'axios';
import styles from './Genres.modules.css';

import Genre from '../../components/Genre/Genre';

class Genres extends Component {

  state = {
    genres: [],

  }

  componentDidMount() {
    const apiKey = 'e826d7cae51a970759bd99a85655ac2f';
    const genreListUrl = `https://api.themoviedb.org/3/genre/movie/list?api_key=${apiKey}&language=en-US`;

    axios.get(genreListUrl).then(response => {
      this.setState({genres: response.data.genres});
      // console.log(response.data.genres);
    })
  }

  render() {
    const genres = this.state.genres.map(genre=> {
      return <Genre key={genre.id} location={genre.id} genreName={genre.name}/>
    });

    return (
      <div>
        <h2 className={styles.Heading}>Genres</h2>
        <nav>
          <ul className={styles.List}>
            {genres}
          </ul>
        </nav>
      </div>
    );
  }
}

export default Genres;