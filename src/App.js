import React from 'react';
import styles from './App.modules.css';

import Logo from './components/Logo/Logo';
import NavigationItems from './components/Navigation/NavigationItems/NavigationItems';
import Genres from './containers/Genres';

function App() {
  return (
    <div className="Container">
      <div className="Logo">
        <Logo />
      </div>
      <aside className="Sidebar">
        <NavigationItems />
        <Genres />
      </aside>
      <main className="Main">

      </main>
    </div>
  );
}

export default App;
