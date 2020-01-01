import React from 'react';
import NavigationItem from '../NavigationItem/NavigationItem';
import styles from './NavigationItems.module.css';

const navigationItems = props => {
  return (
    <nav>
      <h2 className={styles.Heading}>Browse moovy</h2>
      <ul className={styles.List}>
        <NavigationItem search='now_playing'>Now Playing</NavigationItem>
        <NavigationItem search='popular'>Popular</NavigationItem>
        <NavigationItem search='top_rated'>Top Rated</NavigationItem>
      </ul>
    </nav>
  )
}

export default navigationItems;