import React from 'react'

export default function Daugther(props: any) {
  const { money: { money }, spendMoney } = props;
  
  return (
    <div>
      <h4>Eu sou a filha! </h4>
      <span>{`Eu tenho para gastar: ${money}`}</span>
      <button type="button" onClick={spendMoney}>Gastar</button>
    </div>
  )
}
