import React from 'react';
import NavigationItem from '../NavigationItem/NavigationItem';
import styles from './NavigationItems.modules.css';

const navigationItems = props => {
  return (
    <nav>
      <h2 className={styles.Heading}>Browse moovy</h2>
      <ul className={styles.List}>
        <NavigationItem>Movies</NavigationItem>
        <NavigationItem>Series</NavigationItem>
        <NavigationItem>Discover</NavigationItem>
      </ul>
    </nav>
  )
}

export default navigationItems;