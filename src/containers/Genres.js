import React from 'react';

import Genre from '../components/Genre/Genre';

const genres = props => {
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

export default genres;