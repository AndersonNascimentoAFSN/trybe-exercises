import React, { useEffect, useState } from 'react';

const Produto = () => {
  const [produto, setProduto] = useState('');
  const [data, setData] = useState({});
  function handleClick({ target }) {
    setProduto(() => target.innerText);
  }

  useEffect(() => {
    if (produto !== null) {
      fetch(`https://ranekapi.origamid.dev/json/api/produto/${produto}`)
        .then((response) => response.json())
        .then((json) => setData(json));
    }
  }, [produto]);

  useEffect(() => {
    const produtoLocal = window.localStorage.getItem('produto');
    if (produtoLocal !== '') setProduto(produtoLocal);
  }, []);

  useEffect(() => {
    if (produto !== '') window.localStorage.setItem('produto', produto);
  }, [produto]);

  return (
    <div>
      <h1>
        Preferência:
        {' '}
        { produto }
      </h1>
      <button
        style={ { marginRight: '1rem' } }
        type="button"
        onClick={ handleClick }
      >
        Notebook
      </button>
      <button
        type="button"
        onClick={ handleClick }
      >
        Smartphone
      </button>
      { produto === '' ? '' : (
        <div>
          <h1>{ data.nome }</h1>
          <p>{ data.preco }</p>
        </div>
      )}
    </div>
  );
};

export default Produto;
