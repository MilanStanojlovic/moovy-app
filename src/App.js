import React from 'react';
import styles from './App.modules.css';

import Logo from './components/Logo/Logo';
import NavigationItems from './components/Navigation/NavigationItems/NavigationItems';
import Genres from './containers/Genres';

function App() {
  console.log(styles);
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

      </main>
    </div>
  );
}

export default App;
