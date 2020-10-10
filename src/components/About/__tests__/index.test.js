import React from 'react';
import { render, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

import About from '..';

afterEach(cleanup);

describe('About component', () => {
  //renders About test
  // first base line test
  it('renders', () => {
    render(<About />);
  });
  // second match snapshot
  it('matches snapshot DOM node structure', () => {
    const { asFragment } = render(<About />);
    expect(asFragment()).toMatchSnapshot();
  });
});
