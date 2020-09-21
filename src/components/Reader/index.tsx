import React from 'react';

import Intro from './Intro';
import Content from './Content';
import { IIntroProps } from './Intro/types';
import { IContentProps } from './Content/types';

import styles from './style.css';


interface IReaderProps {
  elements: (IIntroProps & IContentProps)[]
}
// separate components for left and right-hand contents
// must be generated from props being passed down by respective pages
// enforce schema via ts interface


function Reader (props: IReaderProps) {
  return (
    <div className={styles["container"]}>
      <div className={styles["left-column"]}>
        Column
      </div>
      <div className={styles["content"]}>
        Content
      </div>
    </div>
  )
};

export default Reader;