import React, { useState } from 'react';

export default function Hookstate() {
  const [state, setState] = useState({
    status: 'idle',
    loading: false,
  });
  return (
    <div>
      <button
        type="button"
        onClick={ () => setState((prevState) => ({ ...prevState, loading: true })) }
      >
        Add
      </button>
      {JSON.stringify(state)}
    </div>
  );
}
