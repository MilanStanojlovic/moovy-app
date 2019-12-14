import React, { Component } from 'react'

import Genre from '../components/Genre/Genre';

class Genres extends Component {

  render(){
    return (
      <div>
        <h2>Genres</h2>
        <nav>
          <ul>
            <Genre>Action</Genre>
            <Genre>Comedy</Genre>
            <Genre>Drama</Genre>
          </ul>
        </nav>
      </div>
    );
  }
}

export default Genres;