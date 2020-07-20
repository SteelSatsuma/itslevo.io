import React from 'react';

import './style.css';

interface IButton {
  children?: React.ReactElement | string;
  func?: () => void;
  text?: string;
}


function Button ({ children, func, text } : IButton) {
  return (
    <button className="button" onClick={func}>
      { text &&
        <div className="text">{text}</div>
      }
      {children}
    </button>
  )
};

export default Button;