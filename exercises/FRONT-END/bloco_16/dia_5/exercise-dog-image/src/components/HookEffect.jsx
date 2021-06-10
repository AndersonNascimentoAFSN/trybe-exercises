import React, { useState, useEffect } from 'react';

export default function HookEffect() {
  const [count, setCount] = useState(0);

  // Similar ao componentDidMount e componentDidUpdate:
  useEffect(() => {
    document.title = `Você clicou ${count} vezes`;
  });

  // componentDidMount() {
  //   document.title = `Você clicou ${this.state.count} vezes`;
  // }
  // componentDidUpdate() {
  //   document.title = `Você clicou ${this.state.count} vezes`;
  // }

  // console.log(count);
  return (
    <div>
      <p>{`Você clicou ${count} vezes`}</p>
      <button
        type="button"
        onClick={ () => setCount((prevState) => prevState + 1) }
      >
        Clique aqui!
      </button>
    </div>
  );
}
