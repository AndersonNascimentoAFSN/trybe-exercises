import React from 'react'
import Father from './Father';

export default function Grandmother(props) {
  // const { money, spendMoney } = props;
  return (
    <div>
      <h1>Eu sou a vó</h1>
      {/* <Father money={money} spendMoney={spendMoney}/> */}
      <Father />
    </div>
  )
}
