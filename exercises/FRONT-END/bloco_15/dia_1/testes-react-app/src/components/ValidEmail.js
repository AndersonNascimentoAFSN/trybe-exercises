import React from 'react'

export default function ValidEmail(props) {
  const verifyEmail = (email) => {
    const emailRegex = /[^@ \t\r\n]+@[^@ \t\r\n]+\.[^@ \t\r\n]+/;
    return emailRegex.test(email);
  };

  const { email } = props;

  // if(email === '') {
  //   return <h2 data-testid="id-email-user">{`Valor: ${email}`}</h2>
  // }

  return (
    <div>
      <h2 data-testid="id-email-user">{`Valor: ${email}`}</h2>
      <h3>{(verifyEmail(email) ? 'Email válido' : 'Email inválido')}</h3>
    </div>
  )
}
