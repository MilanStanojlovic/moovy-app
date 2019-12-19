import React from 'react';
import { Link } from 'react-router-dom';

const logo = props => {
  return (
    <div>
      <Link to="/">
        <h1>Moovy</h1>
      </Link>
    </div>
  );
}

export default logo;