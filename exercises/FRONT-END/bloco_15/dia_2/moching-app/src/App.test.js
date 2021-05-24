import React from 'react';
import { fireEvent, render, screen, waitFor } from '@testing-library/react';
import { App } from './App';
import { Form } from './Form/Form';
import userEvent from '@testing-library/user-event';



// describe('Testa app de piadas', () => {

//   it('Verifica que, quando recebe uma piada, mostra ela na tela', async () => {
    
//     const joke = {
//       "id": "mbpbapbhiyd",
//       "joke": "Whiteboards... are remarkable",
//       "status": 200
//     };

//     global.fetch = jest.fn().mockResolvedValue({
//       json: jest.fn().mockResolvedValue(joke),
//     })

//     render(<App />);

//     // await screen.findByText("Whiteboards... are remarkable");
//     await waitFor(() => screen.getByText("Whiteboards... are remarkable"));
//   });

// });


afterEach(() => jest.clearAllMocks());

describe('Teste da aplicação',() => {

  it('fetch joke', async () => {
      const joke = {
      "id": "mbpbapbhiyd",
      "joke": "Whiteboards... are remarkable",
      "status": 200
    };

    jest.spyOn(global, 'fetch');
    global.fetch.mockResolvedValue({
      json: jest.fn().mockResolvedValue(joke),
    });

    // global.fetch = jest.fn().mockResolvedValue({
    //   json: jest.fn().mockResolvedValue(joke),
    // });

    render(<App />);

    await screen.findByText("Whiteboards... are remarkable");
    expect(global.fetch).toBeCalledTimes(1);
    expect(global.fetch).toBeCalledWith( 'https://icanhazdadjoke.com/',
    {"headers": {"Accept": "application/json"}});
    
  });
})

describe('Testa formulário', () => {
  it('Alterando o valor dos campos e testando o valor guardado', () => {
    render(<Form />);
    
    const inputName = screen.getByRole('textbox', {name: /nome/i});
    expect(inputName).toHaveValue('');
    userEvent.type(inputName, 'Estudante da Trybe');
    expect(inputName).toHaveValue('Estudante da Trybe');
    
    
    const inputEmail = screen
      .getByRole('textbox', {name: /e-mail/i});
    // screen.debug(inputEmail);
    expect(inputEmail).toHaveValue('');
    fireEvent.change(inputEmail, { target: { value: 'estudante@trybe.com'}});
    expect(inputEmail).toHaveValue('estudante@trybe.com');
  })
});
