import React, { useState } from 'react';

export default function Bank() {
  const [state, setState] = useState(100);

  function deposito() {
    setTimeout(() => {
      // setState(state + 15);
      setState((prevState) => prevState + 15);
    }, 2000);
  }

  return (
    <div>
      <button
        type="button"
        onClick={ deposito }
      >
        Deposito: 15,00
      </button>
      <button
        type="button"
        // onClick={ () => setState(state - 100) }
        onClick={ () => setState((prevState) => prevState - 100) }
      >
        Retirar: 100,00
      </button>
      {JSON.stringify(state)}
    </div>
  );
}
