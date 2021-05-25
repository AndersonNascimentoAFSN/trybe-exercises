import React from 'react';
import { App } from '../../App';
import { renderWithRouter } from './../../helpers/renderWithRouter';

describe('Tests component NoMatch', () => {
  it('Checks if the NoMatch component is rendered when there is no route', () => {
    const { getByRole, history } = renderWithRouter(<App />);

    history.push('/page/not-exist/');

    const noMatch = getByRole('heading', {
      name: /página não encontrada/i
    });

    expect(noMatch).toBeInTheDocument();

  });
});