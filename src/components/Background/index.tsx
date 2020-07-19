import React from 'react';
import './style.css';

const textArr: Array<string> = new Array(100).fill('underconstruction');

const text: string = textArr.join('')

function Background() {
  return (
    <div className="bg">
      <div className="text">
        {text}
      </div>
      <div className="overlay">
      </div>
    </div>
  );
}

export default Background;
