import React, { Component } from 'react'
import axios from 'axios';

import Genre from '../components/Genre/Genre';

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
      return <Genre key={genre.id} genreName={genre.name}/>
    });

    return (
      <div>
        <h2>Genres</h2>
        <nav>
          <ul>
            {genres}
          </ul>
        </nav>
      </div>
    );
  }
}

export default Genres;