import React from 'react';
import style from './NavigationItem.module.css';
import { NavLink } from 'react-router-dom';

const navigationItem = props => {
  return (
    <li className={style.ListItem}>
      <NavLink className={style.Link} to={`/movies/${props.search}`}>
        {props.children}
      </NavLink>
    </li>
  );
}

export default navigationItem;
