import userEvent from '@testing-library/user-event';
import React from 'react';
import { App } from '../../App';
import { renderWithRouter } from '../../helpers/renderWithRouter'

describe('Checks if the about component is accessible by /about', () => {

  it('Checks if the about component is accessible by /about', () => {
    const { getByText, history } = renderWithRouter(<App />);
    userEvent.click(getByText(/about/i));
    const pathName = history.location.pathname;
    expect(pathName).toBe('/about');
    const aboutAll = getByText('/você está na página sobre/i');
    expect(aboutAll).toBeInTheDocument();
  });
});