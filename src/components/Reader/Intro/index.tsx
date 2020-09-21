import React from 'react';

import Button from '../../Button';

import styles from './style.css';
import { IIntroProps } from './types';

function Intro({ text, buttonText, children }: IIntroProps) {
  return (
    <div>
      {text}
      {children}
      <Button>{buttonText || 'View'}</Button>
    </div>
  )
};

export default Intro;