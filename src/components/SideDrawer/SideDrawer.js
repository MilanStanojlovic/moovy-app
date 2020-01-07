import React from 'react';
import NavigationItems from '../Navigation/NavigationItems/NavigationItems';
import Genres from '../Genres/Genres';
import styles from './SideDrawer.module.css';

const SideDrawer = () => {
  return (
    <div className={styles.SideDrawer}>
      <NavigationItems />
      <Genres />
    </div>
  )
}

export default SideDrawer
