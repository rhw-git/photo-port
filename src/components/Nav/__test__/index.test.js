import React from 'react';
import { render, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

import Nav from '..';

describe('Nav component', () => {
  // render Nav test
  // base line test
  it('renders', () => {
    render(<Nav />);
  });
  // second match snapshot
  it('matches snapshot', () => {
    const { asFragment } = render(<Nav />);
    // assert value comparision
    expect(asFragment()).toMatchSnapshot();
  });
});

describe('emoji is visible', () => {
  it('inserts emoji into the h2', () => {
    // Arrange
    const { getByLabelText } = render(<Nav />);
    // Assert
    expect(getByLabelText('camera')).toHaveTextContent('📷');
  });
});

describe('link visibility', () => {
  it('inserts text into links', () => {});
  // arrange
  const { getByTestId } = render(<Nav />);
  // assert
  expect(getByTestId('link')).toHaveTextContent('Oh Snap!');
  expect(getByTestId('about')).toHaveTextContent('About me');
});

afterEach(cleanup);
