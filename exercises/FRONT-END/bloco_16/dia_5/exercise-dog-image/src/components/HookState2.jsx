import React, { useState } from 'react';

function HookState2() {
  const [value, setValue] = useState('');
  const [items, setItems] = useState(['Goiaba', 'Mamão',
    'Acerola', 'Frango', 'Carne de Boi']);

  function handleClick() {
    setItems((prevState) => [...prevState, value]);
  }

  function handleChange({ target }) {
    setValue(() => target.value);
  }

  return (
    <div>
      <h1>Lista de Compras</h1>
      <label htmlFor="items">
        Adicione um item:
        <input type="text" id="items" onChange={ handleChange } value={ value } />
      </label>
      <button type="button" onClick={ handleClick }>Add</button>
      <ul>
        { items.map((item, index) => (
          <li key={ index }>{item}</li>
        )) }
      </ul>
    </div>
  );
}

export default HookState2;
