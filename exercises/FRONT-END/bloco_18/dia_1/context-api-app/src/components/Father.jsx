import React from 'react'
import Daugther from './Daugther'

export default function Father(props) {
  // const {money, spendMoney} = props;
  return (
    <div>
      <h3>Eu sou o Pai</h3>
      {/* <Daugther money={money} spendMoney={spendMoney}/> */}
      <Daugther />
    </div>
  )
}
