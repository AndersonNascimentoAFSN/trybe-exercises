import React from 'react';
import userEvent from '@testing-library/user-event';
import { App } from '../../App';
import { renderWithRouter } from '../../helpers/renderWithRouter'

describe('Tests the about component', () => {

  it('Checks if the about component is accessible by /about', () => {
    const { getByRole, history } = renderWithRouter(<App />);
    
    userEvent.click(getByRole('link', {
      name: /about/i
    }));

    const pathName = history.location.pathname;
    expect(pathName).toBe('/about');

    expect(getByRole('heading', {
      name: /você está na página sobre/i
    })).toBeInTheDocument();

  });
});