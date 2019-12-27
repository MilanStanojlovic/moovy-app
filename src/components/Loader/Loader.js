import React from 'react';
import styles from './Loader.modules.css';

const Loader = () => {
  return (
    <div className={styles.LoaderWrapper}>
      <div className={styles.Loader}><div></div><div></div></div>
    </div>
  )
}

export default Loader;