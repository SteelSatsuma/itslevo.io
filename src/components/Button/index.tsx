import React from 'react';

import styles from './style.css';

interface IButton {
  children?: React.ReactElement | string;
  func?: () => void;
  text?: string;
}


function Button ({ children, func, text } : IButton) {
  return (
    <button className={styles.button} onClick={func}>
      { text &&
        <div className={styles.text}>{text}</div>
      }
      {children}
    </button>
  )
};

export default Button;