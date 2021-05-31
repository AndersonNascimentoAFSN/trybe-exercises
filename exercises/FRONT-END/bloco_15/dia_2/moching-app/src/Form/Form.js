import React, { useState } from 'react'

export function Form() {
  const [userInfo, setUserInfo] = useState({name: '', email: ''});

  const handleInput = ({ target }) => {
    const { name, value } = target;
    setUserInfo((prevState) => ({ ...prevState, [name]: value }))
  }

  return (
    <div>
      <h1>Teste de inputs</h1>
      <label htmlFor="name">
        Nome:
        <input
          id="name"
          onChange={handleInput}
          name='name'
          value={userInfo.name}
          data-testid='input-nome'
        />
      </label>
      <label htmlFor="email">
        E-mail
        <input 
          id="email"
          onChange={handleInput}
          name='email'
          value={userInfo.email}
          data-testid='input-email'
        />
      </label>
      
    </div>
  )
}
