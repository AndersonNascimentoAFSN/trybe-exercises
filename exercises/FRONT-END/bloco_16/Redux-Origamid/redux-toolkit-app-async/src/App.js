import React, { useState } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { fetchLogin } from './service/fetchLogin';
// import { fetchToken } from "./service/fetchToken";

function App() {
  const [login, setLogin] = useState({username: '', password: ''});

  const { data } = useSelector((state) => state.user);
  // console.log(data);
  const dispatch = useDispatch();

  function handleChange({target: { name, value }}) {
    setLogin((prevState) => ({...prevState, [name]: value }));
    setLogin((prevState) => ({...prevState, [name]: value }));
  }

  function handleSubmit(event) {
    event.preventDefault();
    const { password, username } = login;
    // dispatch(fetchToken({ username, password}));
    dispatch(fetchLogin({username, password}));
  }

  const { password, username } = login;

  return (
    <div>
      <form onSubmit={handleSubmit}>

        <label htmlFor="username">
          Usuário:
          <input 
            type="text"
            id="username"
            name="username"
            onChange={handleChange}
            value={username}
            />  
        </label>

        <label htmlFor="password">
          Usuário:
          <input 
            type="text"
            id="password"
            name="password"
            onChange={handleChange}
            value={password}
            />  
        </label>

        <button type="submit">
          Enviar
        </button>
      <p>{data?.email}</p>
      </form>
    </div>
  );
}

export default App;
