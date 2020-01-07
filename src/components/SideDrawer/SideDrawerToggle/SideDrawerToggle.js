import React from 'react';
import styles from './SideDrawerToggle.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEllipsisH } from '@fortawesome/free-solid-svg-icons';

const DrawerToggle = (props) => {
  return (
    <span className={styles.DrawerToggle} onClick={props.onMenuClick}>
      <FontAwesomeIcon icon={faEllipsisH} size="2x" className={styles.Icon} />
    </span>
  )
}

export default DrawerToggle;