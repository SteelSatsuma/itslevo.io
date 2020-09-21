import React from 'react';
import { connect } from 'react-redux'
import { Dispatch } from 'redux';
import { animation } from '../../redux/actions';

import styles from './style.css';
import {IProps, IState} from './types';

import Background from '../../components/Background';
import ContentBlock from '../../components/ContentBlock';
import Button from '../../components/Button';
import NavBar from '../../components/NavBar';

import Contact from '../Contact';
import Experiments from '../Experiments';
import Me from '../Me';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";

export class App extends React.PureComponent<IProps, IState> {

  state = {
    mounted: false
  }

  componentDidMount() {
    window.addEventListener('load', () => {
      this.setState({ mounted: true })
      this.props.animationCompleted();
    });
  }

  render() {
    return (
      <div className={styles.app}>
        <Router>
          <NavBar />
          <Switch>
            <Route exact path="/">
              <Redirect to="/me" />
            </Route>
            <Route exact path="/me">
              <Me />
            </Route>
            <Route path="/contact">
              <Contact />
            </Route>
            <Route path="/experiments">
              <Experiments />
            </Route>
          </Switch>
        </Router>
        <ContentBlock>
          <header className={styles['app-header']}>
            <h1>HELLO</h1>
            <p>
              This is a website of Levon Barsegjan.
            </p>
            <p>
              It is currently under construction.
            </p>
            <a
              className={styles['app-link']}
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
        <Background state={this.state.mounted ? 'underconstruction' : 'loading'} />
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch: Dispatch) => ({
  animationCompleted: () => dispatch(animation.animationCompleted())
})

export default connect(null, mapDispatchToProps)(App);