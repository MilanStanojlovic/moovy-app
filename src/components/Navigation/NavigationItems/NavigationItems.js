import React from 'react';
import NavigationItem from '../NavigationItem/NavigationItem';

const navigationItems = props => {
  return (
    <nav>
      <h2>Browse moovy</h2>
      <ul>
        <NavigationItem>Movies</NavigationItem>
        <NavigationItem>Series</NavigationItem>
        <NavigationItem>Discover</NavigationItem>
      </ul>
    </nav>
  )
}

export default navigationItems;