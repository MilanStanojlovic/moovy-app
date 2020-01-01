import React, { useState } from 'react';
import styles from './App.module.css';
import { Switch, Route } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEllipsisH } from '@fortawesome/free-solid-svg-icons';

import Logo from './components/Logo/Logo';
import NavigationItems from './components/Navigation/NavigationItems/NavigationItems';
import Genres from './components/Genres/Genres';
import MovieList from './components/MovieList/MovieList';
import Movie from './components/Movie/Movie';
import Search from './components/Search/Search'

function App() {
  const [ShowMenu, setShowMenu] = useState(true);

  const handleMenuClick = () => {
    setShowMenu(prevShowMenu => !prevShowMenu);
  }
  let attachedSidebarStyle = [styles.Sidebar];
  let attachedMainStyle = [styles.Main];
  if (!ShowMenu) {
    attachedSidebarStyle = [styles.Sidebar, styles.Invisible];
    attachedMainStyle = [styles.Main, styles.MainSpan]
  }


  return (
    <div className={styles.Container}>
      <div className={styles.Logo}>
        <Logo />
        <FontAwesomeIcon icon={faEllipsisH} onClick={handleMenuClick} size="2x" className={styles.Menu} />
      </div>
      <div className={styles.Top}>
        <Search />
      </div>
      <aside className={attachedSidebarStyle.join(' ')}>
        <NavigationItems />
        <Genres />
      </aside>
      <main className={attachedMainStyle.join(' ')}>
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
