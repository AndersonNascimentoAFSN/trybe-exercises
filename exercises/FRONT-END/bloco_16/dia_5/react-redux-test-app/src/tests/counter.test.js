import React from 'react';
import { cleanup } from '@testing-library/react';
import renderWithRedux from '../helpers/renderWithRedux';
import App from '../App';

describe('testing clicks', () => {
  beforeEach(cleanup);
  test('the page should has a button and a text 0', () => {
    const { queryByText } = renderWithRedux(<App />);
    const buttonAdd = queryByText('Clique aqui');

    expect(buttonAdd).toBeInTheDocument();
    expect(queryByText('0')).toBeInTheDocument();
  });
});
