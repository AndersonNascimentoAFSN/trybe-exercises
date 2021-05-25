import React from 'react';
import { renderWithRouter } from '../../helpers/renderWithRouter';
import { App } from '../../App';

describe('Tests the home component', () => {

  it('Checks if the home component is accessible by /home', () => {
    const { getByText } = renderWithRouter(<App />);
    const home = getByText(/Você está na página Início/);
    expect(home).toBeInTheDocument();
  });

});
