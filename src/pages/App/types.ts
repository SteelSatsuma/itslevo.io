import { Action } from 'redux';

export interface IProps {
  animationCompleted: () => Action;
}

export interface IState {
  mounted: boolean;
}