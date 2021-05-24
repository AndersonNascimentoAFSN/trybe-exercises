import { render, fireEvent, getByTestId } from '@testing-library/react';
// import App from './App';
import Form from '../components/Form';

// test('renders learn react link', () => {
//   render(<App />);
//   const linkElement = screen.getByText(/learn react/i);
//   expect(linkElement).toBeInTheDocument();
// });


describe('Tela de inserção do email', () => {
  it('Verifica que há um campo input de email na tela', () => {
    // Acessar os elementos da sua tela:
    const { getByLabelText } = render(<Form />);
    const inputEmail = getByLabelText('Email');
  
    // Interagir com eles (se houver necessidade):
    /* 'Neste caso não houve interação' */
  
    // Fazer seu teste:
    expect(inputEmail).toBeInTheDocument();
    expect(inputEmail.type).toBe('email');
  });
  
  it('Verifica que há dois botões', () => {
    const { getAllByRole } = render(<Form />);
    const button = getAllByRole('button');
    
    expect(button.length).toBe(2);
  });
  
  it('Verifica que há um botão "Enviar"', () => {
    const { getByTestId } = render(<Form />);
    const button = getByTestId('id-send');
    
    expect(button).toBeInTheDocument();
    expect(button).toHaveTextContent('Enviar');
  });
});

describe('Testa comportamento da tela de email', () => { 
  test('Verifica que, ao inserir um email e clicar em "Enviar", o email aparece na tela', () => {
    // Acessar os elementos da sua tela:
    const { getByTestId, getByLabelText } = render(<Form />);
    const emailInput = getByLabelText('Email');
    const sendButton = getByTestId('id-send');
    const userEmail = getByTestId('id-email-user');

    // Interagir com eles (se houver necessidade):
    /* 'Neste caso não houve interação' */
    fireEvent.change(emailInput, { target: { value: 'anderson.ebep@gmail.com' }});
    fireEvent.click(sendButton);
    
    // Fazer seu teste:
    expect(emailInput.value).toBe('');
    expect(userEmail.textContent).toBe('Valor: anderson.ebep@gmail.com');
  });

});
