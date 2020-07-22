import React from 'react';
import styles from './style.css';

function ContentBlock ({ children } : { children: React.ReactElement }) {
  return (
    <div className={styles.contentBlock}>
      {children}
    </div>
  )
};

export default ContentBlock;