import React from 'react';
import './style.css';
import Background from '../Background';
import GlobalLoading from '../GlobalLoading';
import ContentBlock from '../ContentBlock';
import Button from '../Button';

class App extends React.PureComponent {

  state = {
    mounted: false
  }

  componentDidMount() {
    window.addEventListener('load', () => this.setState({ mounted: true }));
  }

  render() {
    if (this.state.mounted === false) {
      return <GlobalLoading />;
    }

    return (
      <div className="App">
        <ContentBlock>
          <header className="App-header">
            <h1>HELLO</h1>
            <p>
              This is a website of Levon Barsegjan.
            </p>
            <p>
              It is currently under construction.
            </p>
            <a
              className="App-link"
              href="https://github.com/SteelSatsuma/itslevo.io"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button>
              Github
              </Button>
            </a>
          </header>
        </ContentBlock>
        <Background />
      </div>
    );
  }
}

export default App;
