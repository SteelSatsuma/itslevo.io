import React from 'react';
import './App.css';
import Background from './components/Background';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>
          This is a website of Levon Barsegjan
        </p>
        <a
          className="App-link"
          href="https://github.com/SteelSatsuma/itslevo.io"
          target="_blank"
          rel="noopener noreferrer"
        >
          Repository where this website is hosted
        </a>
      </header>
      <Background />
    </div>
  );
}

export default App;
