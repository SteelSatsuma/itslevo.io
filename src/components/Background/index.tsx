import React from 'react';
import styles from './style.css';

class Background extends React.Component{

  sourceString: string = 'underconstruction'

  readonly state = {
    sliceOffset: 0,
    text: new Array(100).fill(this.sourceString).join('')
  }

  componentDidMount(): void {
    window.setInterval(
      () => this.setState({
        sliceOffset:  this.state.sliceOffset > this.sourceString.length ? 0 : this.state.sliceOffset + 1
      }),
      1000
    );
  }

  render(): React.ReactElement {
    const { sliceOffset, text } = this.state;

    return (
      <div className={styles.bg}>
        <div className={styles.text}>
          {text.slice(sliceOffset)}
        </div>
        <div className={styles.overlay}>
        </div>
      </div>
    );
  }
}



export default Background;
