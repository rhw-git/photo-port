import React from 'react';
import { render, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Nav from '..';

afterEach(cleanup);
// mock functions and hard coded array to declare prop
const categories = [
  { name: 'portraits', description: 'Portraits of people in my life' },
];
const mockCurrentCategory = jest.fn();
const mockSetCurrentCategory = jest.fn();

describe('Nav component', () => {
  // render Nav test
  // base line test
  it('renders', () => {
    render(
      <Nav
        categories={categories}
        setCurrentCategory={mockSetCurrentCategory}
        currentCategory={mockCurrentCategory}
      />,
    );
  });
  // second match snapshot
  it('matches snapshot', () => {
    const { asFragment } = render(
      <Nav
        categories={categories}
        setCurrentCategory={mockSetCurrentCategory}
        currentCategory={mockCurrentCategory}
      />,
    );
    // assert value comparision
    expect(asFragment()).toMatchSnapshot();
  });
});

describe('emoji is visible', () => {
  it('inserts emoji into the h2', () => {
    // Arrange
    const { getByLabelText } = render(
      <Nav
        categories={categories}
        setCurrentCategory={mockSetCurrentCategory}
        currentCategory={mockCurrentCategory}
      />,
    );
    // Assert
    expect(getByLabelText('camera')).toHaveTextContent('📷');
  });
});

describe('link visibility', () => {
  it('inserts text into links', () => {});
  // arrange
  const { getByTestId } = render(
    <Nav
      categories={categories}
      setCurrentCategory={mockSetCurrentCategory}
      currentCategory={mockCurrentCategory}
    />,
  );
  // assert
  expect(getByTestId('link')).toHaveTextContent('Oh Snap!');
  expect(getByTestId('about')).toHaveTextContent('About me');
});
