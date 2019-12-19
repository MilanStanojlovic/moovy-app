import React from 'react';
import styles from './App.modules.css';
import { Switch, Route } from 'react-router-dom';

import Logo from './components/Logo/Logo';
import NavigationItems from './components/Navigation/NavigationItems/NavigationItems';
import Genres from './containers/Genres/Genres';
import MovieList from './containers/MovieList/MovieList';
import Movie from './components/Movie/Movie';

function App() {
  //console.log(styles);
  return (
    <div className={styles.Container}>
      <div className={styles.Logo}>
        <Logo />
      </div>
      <aside className={styles.Sidebar}>
        <NavigationItems />
        <Genres />
      </aside>
      <main className={styles.Main}>
        <Switch>
          <Route path="/" exact component={MovieList} />
          <Route path="/movie/:id" component={Movie} />
        </Switch>
      </main>
    </div>
  );
}

export default App;
