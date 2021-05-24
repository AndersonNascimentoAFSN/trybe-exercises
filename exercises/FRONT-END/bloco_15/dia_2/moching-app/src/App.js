import './App.css';

import React, { useEffect, useState } from 'react'
import { Form } from './Form/Form';

export function App() {
  const [joke, setJoke]= useState({joke: ''});


  const fetchApi = () => {
    const API_URL = 'https://icanhazdadjoke.com/';
    fetch(API_URL, { headers: { Accept: 'application/json' } })
      .then((response) => response.json())
      .then((data) => setJoke({ joke: data.joke }));
  }

  useEffect(() => {
    fetchApi();
  }, []);

  return (
    <>
      <div data-testid="joke-element">
        {joke.joke}
      </div>
      <Form />
    </>
  )
}

