import React, { useState } from 'react';
import styles from './App.module.css';
import { Switch, Route } from 'react-router-dom';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faEllipsisH } from '@fortawesome/free-solid-svg-icons';

import Logo from './components/Logo/Logo';
import NavigationItems from './components/Navigation/NavigationItems/NavigationItems';
import Genres from './components/Genres/Genres';
import MovieList from './components/MovieList/MovieList';
import Movie from './components/Movie/Movie';
import Search from './components/Search/Search'
import Backdrop from './components/Backdrop/Backdrop';
import SideDrawerToggle from './components/SideDrawer/SideDrawerToggle/SideDrawerToggle';
import SideDrawer from './components/SideDrawer/SideDrawer';

function App() {
  const [ShowMenu, setShowMenu] = useState(false);

  const handleMenuClick = () => {
    setShowMenu(prevShowMenu => !prevShowMenu);
  }

  const handleBackdropClick = () => {
    setShowMenu(false);
  }

  let sideDrawer;
  let backdrop;

  if(ShowMenu){
    sideDrawer = <SideDrawer/>;
    backdrop = <Backdrop onBackdropClick={handleBackdropClick}/>;
  }

  return (
    <div className={styles.Container}>
      <div className={styles.Logo}>
        <Logo />
        <SideDrawerToggle onMenuClick={handleMenuClick}/>
      </div>
      <div className={styles.Top}>
        <Search />
      </div>
      <aside className={styles.Sidebar}>
        <NavigationItems/>
        <Genres/>
      </aside>
      <aside className={styles.ResponsiveSide}>
        {sideDrawer}
        {backdrop}
      </aside>
      <main className={styles.Main}>
        <Switch>
          <Route path="/" exact component={MovieList} />
          <Route path="/movie/:id" component={Movie} />
          <Route path="/movies" exact component={MovieList} />
          <Route path="/movies/genre/:id" component={MovieList} />
          <Route path="/movies/:search" component={MovieList} />
        </Switch>
      </main>
    </div>
  );
}

export default App;
