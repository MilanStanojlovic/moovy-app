import React from 'react';
import style from './NavigationItem.modules.css';

const navigationItem = props => {
  return (
    <li className={style.ListItem}>
      <a href="/" className={style.Link}>{props.children}</a>
    </li>
  );
}

export default navigationItem;
