import React from 'react';

const navigationItem = props => {
  return (
    <li>
      <a href="#">{props.children}</a>
    </li>
  );
}

export default navigationItem;
