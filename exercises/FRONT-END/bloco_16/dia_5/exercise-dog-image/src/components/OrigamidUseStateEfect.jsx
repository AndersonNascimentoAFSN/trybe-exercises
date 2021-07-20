import React, { useEffect, useState } from 'react';

function OrigamidUseStateEfect() {
  const [dados, setDados] = useState(null);
  // const [loading, setLoading] = useState(false);

  async function handleClick({ target }) {
    const { innerText } = target;
    const url = `https://ranekapi.origamid.dev/json/api/produto/${innerText}`;
    const response = await fetch(url);
    const product = await response.json();
    setDados(() => product);
  }

  useEffect(() => {
    // setLoading(() => true);
    const event = { target: { innerText: 'Notebook' } };
    handleClick(event);
  }, []);

  // console.log(dados);

  if (dados) {
    return (
      <div>
        <button type="button" onClick={ handleClick }>Notebook</button>
        <button type="button" onClick={ handleClick }>smartphone</button>
        <button type="button" onClick={ handleClick }>Tablet</button>
        <div>
          <p>{ dados.nome }</p>
          <p>{ dados.descricao }</p>
          <img src={ dados.fotos[0].src } alt={ dados.id } />
        </div>
      </div>
    );
  }
  return (
    <p>Produto carregando</p>
  );
}

export default OrigamidUseStateEfect;
