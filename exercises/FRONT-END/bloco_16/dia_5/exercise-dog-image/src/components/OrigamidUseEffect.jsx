import React, { useEffect, useState } from 'react';

function OrigamidUseEffect() {
  const [contar, setContar] = useState(0);
  const [data, setData] = useState(null);
  // const [load, setLoad] = useState(true);

  function handleClick() {
    setContar((prevContar) => prevContar + 1);
  }

  useEffect(() => {
    console.log('Executou');
  });

  useEffect(() => {
    fetch('https://ranekapi.origamid.dev/json/api/produto/notebook')
      .then((response) => response.json())
      .then((json) => setData(json));
    console.log('Acessou API');
  }, []);

  useEffect(() => {
    document.title = `Contou: ${contar}`;
  }, [contar]);

  console.log('Redenrizou');
  return (
    <div>
      <p>{contar}</p>
      <button type="button" onClick={ handleClick }>Contar</button>
      {data && (
        <div>
          <span>{data.name}</span>
          <img src={ data.fotos[0].src } alt={ data.nome } />
        </div>
      )}
    </div>
  );
}

export default OrigamidUseEffect;
