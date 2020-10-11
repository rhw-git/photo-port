import React from 'react';
import { render, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import ContactForm from '..';

afterEach(cleanup);

describe('Contact component', () => {
  // render base line test
  it('renders', () => {
    render(<ContactForm></ContactForm>);
  });
});
// match snapshot
describe('matches snapshot', () => {
  // arrange
  const { asFragment } = render(<ContactForm></ContactForm>);
  // assert
  expect(asFragment()).toMatchSnapshot();
});
// link visibility
describe('link visibility', () => {
  it('inserts text into contact link', () => {
    //arrange
    const { getByTestId } = render(<ContactForm></ContactForm>);
    //assert
    expect(getByTestId('contact')).toHaveTextContent('Contact Me');
  });
});
// button text visibility
describe('button text visibility', () => {
  it('inserts text into button', () => {
    //arrange
    const { getByTestId } = render(<ContactForm></ContactForm>);
    //assert
    expect(getByTestId('button')).toHaveTextContent('Submit');
  });
});
