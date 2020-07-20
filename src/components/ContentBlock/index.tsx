import React from 'react';
import './style.css';

function ContentBlock ({ children } : { children: React.ReactElement }) {
  return (
    <div className="contentBlock">
      {children}
    </div>
  )
};

export default ContentBlock;