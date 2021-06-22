import React from 'react';
import MyContext from './MyContext';

export default function Daugther(props) {
  // const { money: { money }, spendMoney } = props;
  
  return (
    <div>
      <h4>Eu sou a filha! </h4>
      {/* <span>{`Eu tenho para gastar: ${money}`}</span>
      <button type="button" onClick={spendMoney}>Gastar</button> */}
      <MyContext.Consumer>
        {
          (value) => (
            <>
              <span>{`Eu tenho para gastar: ${value.money.money}`}</span>
              <button type="button" onClick={value.handleMoney}>Gastar</button>
            </>
          )
        }
      </MyContext.Consumer>
      
    </div>
  )
}
