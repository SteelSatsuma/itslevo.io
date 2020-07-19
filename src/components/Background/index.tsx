import React,{ useState } from 'react';
import './style.css';

const sourceString = 'underconstruction';

const textArr: Array<string> = new Array(100).fill(sourceString);

const text: string = textArr.join('')

class Background extends React.Component{

  state = {
    sliceOffset: 0
  }

  componentDidMount() {
    window.setInterval(() => this.setState({ sliceOffset:  this.state.sliceOffset === sourceString.length ? 0 : ++this.state.sliceOffset }), 1000);
  }

  render() {
    const { sliceOffset } = this.state;

    return (
      <div className="bg">
        <div className="text">
          {text.slice(sliceOffset)}
        </div>
        <div className="overlay">
        </div>
      </div>
    );
  }
}



export default Background;
