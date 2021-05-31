import React, { useState } from 'react'
import ValidEmail from './ValidEmail';

export default function Form() {
  const [email, setEmail] = useState('');
  const [saveEmail, setSaveEmail] = useState('');

  function changeEmail({ target }) {
    const { value } = target;
    setEmail(() => value);
  }

  function changeSaveEmail() {
    setSaveEmail(() => email);
    setEmail(() => '');
  }

  return (
    <div>
      <label htmlFor="email">
        Email
        <input 
          id="email" 
          type="email"
          onChange={changeEmail}
          value={email}
        />
      </label>
     
      <button
        data-testid="id-send"
        onClick={changeSaveEmail}>
        Enviar
      </button>
      <button id="btn">Voltar</button>
      {/* <h2 data-testid="id-email-user">{`Valor: ${saveEmail}`}</h2> */}
      <ValidEmail email={saveEmail}/>
    </div>
  )
}
