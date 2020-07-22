import React from 'react';

import styles from './style.css';

function GlobalLoading () {
  return (
    <div className={styles.container}>
      <div className={styles['loading-element']}>Loading...</div>
    </div>
  )
};

export default GlobalLoading;