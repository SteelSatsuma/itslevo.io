import React from 'react';
import { render } from '@testing-library/react';
import { App } from '.';
import { IProps } from './types';
import { animationCompleted } from '../../redux/actions/animation';

const props: IProps = {
  animationCompleted
};

describe('App', () => {

  test('it renders', () => {
    const app = render(<App {...props} />)

    expect(app).toBeTruthy();
  })
});

// test will definitely go here