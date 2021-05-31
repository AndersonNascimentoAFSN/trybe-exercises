import { render, fireEvent, getByTestId } from '@testing-library/react';
import Form from '../components/Form';
import ValidEmail from '../components/ValidEmail';

describe('Testa funcionalidade component ValidEmail', () => {
  it('Testando o componente, caso o email seja válido', () => {
    const EMAIL_USER = 'email@email.com';
    const { getByText } = render(<ValidEmail email={EMAIL_USER}/>);
    const isValid = getByText('Email válido');
    expect(isValid).toBeInTheDocument();
  });
  
  it('Testando o componente, caso o email seja inválido', () => {
    const EMAIL_USER = 'email.email.com';
    const { getByText } = render(<ValidEmail email={EMAIL_USER} />);
    const isInvalid = getByText('Email inválido');
    expect(isInvalid).toBeInTheDocument();
  });

});

// it('Testando o componente, caso nenhum e-mail for enviado', () => {
//   const EMAIL_USER = '';
//   const { getByText } = render(<Form />);
//   const isNotInvalidEmail = getByText('Email inválido');
//   const isNotValidEmail = getByText('Email válido');
//   expect(isNotInvalidEmail).not.toBeInTheDocument();
//   expect(isNotValidEmail).not.toBeInTheDocument();
// });