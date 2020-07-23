import React from 'react';
import styles from './style.css';

interface IProps {
  state: 'underconstruction' | 'loading' | 'ready'
}

class Background extends React.Component<IProps>{

  readonly state: any = {
    sourceString: 'loading',
    sliceOffset: 0
  }

  static getDerivedStateFromProps(props: IProps) {
    const sourceString = props.state === 'loading' ? 'loading' : 'underconstruction';
    return {
      sourceString,
      text: new Array(100).fill(sourceString).join('')
    };
  }

  componentDidMount(): void {
    window.setInterval(
      () => this.setState({
        sliceOffset:  this.state.sliceOffset > this.state.sourceString.length ? 0 : this.state.sliceOffset + 1
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
