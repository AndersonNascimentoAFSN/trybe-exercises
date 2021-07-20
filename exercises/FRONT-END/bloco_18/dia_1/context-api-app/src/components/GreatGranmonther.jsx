import React, { useState } from 'react';
import MyContext from './MyContext';
import Grandmother from './Grandmother';

export default function GreatGranmonther() {
  const [money, setMoney] = useState({money: 1000000});

  function handleMoney() {
    setMoney((prevState) => ({ money: prevState.money - 100}))
  }

  return (
    <MyContext.Provider value={{money, handleMoney}}>
      <div>
        <h1>Eu sou a bisavó</h1>
        {/* <Grandmother money={money} spendMoney={handleMoney}/> */}
        <Grandmother />
      </div>
    </MyContext.Provider>
  )
}
