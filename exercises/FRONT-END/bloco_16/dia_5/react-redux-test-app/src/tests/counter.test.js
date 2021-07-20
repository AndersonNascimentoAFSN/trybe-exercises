import React from 'react';
import { cleanup, queryByTestId } from '@testing-library/react';
import renderWithRedux from '../helpers/renderWithRedux';
import App from '../App';
import userEvent from '@testing-library/user-event';
import clickReducer from '../reducers/clickReducer';

describe('testing clicks', () => {
  beforeEach(cleanup);
  test('the page should has a button and a text 0', () => {
    const { queryByText } = renderWithRedux(<App />);
    const buttonAdd = queryByText('Clique aqui');

    expect(buttonAdd).toBeInTheDocument();
    expect(queryByText('0')).toBeInTheDocument();
  });
  test('a click in a button should increment the value of clicks' , () => {
    const { queryByText } = renderWithRedux(<App />, { initialState: { clickReducer: { counter: 5 }}});
    
    expect(queryByText('5')).toBeInTheDocument();
  });
  test('a click in button should increment the value of click', () => {
    const { getByRole, getByText } = renderWithRedux(<App />);

    const button = getByRole('button', {
      name: /clique aqui/i
    });

    userEvent.click(button);
    userEvent.click(button);

    expect(getByText(/2/i)).toBeInTheDocument();
  });

  test('a click in a button should increment the value default 10 of clicks', () => {
    const { getByRole, getByText } = renderWithRedux(<App />, {initialState: { clickReducer: { counter: 10 }}});

    let value = getByText(/10/i);
    expect(value).toBeInTheDocument();
    
    const button = getByRole('button', {name: /clique aqui/i });
    userEvent.click(button);
    
    value = getByText(/11/i);
    expect(value).toBeInTheDocument();
  })
});
