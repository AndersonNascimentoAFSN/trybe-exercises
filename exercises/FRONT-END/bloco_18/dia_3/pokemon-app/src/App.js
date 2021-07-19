import { useEffect, useState } from "react";

function App() {
  const [pokemons, setPokemons] = useState([]);
  const [limit, setLimit] = useState(10);

  const increaseNumberOfPokemons = () => {
    setLimit((prevState) => prevState + 10);
  }

  const getPokemons = async () => {
    const endpoint = `https://pokeapi.co/api/v2/pokemon?offset=151&limit=${limit}`;
    
    const result = await fetch(endpoint);
    if(!result.ok) {
      throw new Error(result.statusText);
    }
    const { results } = await result.json();
    return results;
  }
  
  //didMount
  useEffect(() => { 
    getPokemons()
      .then(
        (data) => setPokemons(data),
        (error) => setPokemons(error)
      );

      return () => alert('unmount');

  }, [limit]);


  return (
  <div>

    <h1>Trybe Go!</h1>

    <button onClick={increaseNumberOfPokemons}>Buscar + 10</button>
    
    <ul>
      { 
        pokemons.map(({ name }) => <li key={ name }>{ name }</li>)
      }
    </ul>
  </div>
  );
}

export default App;
