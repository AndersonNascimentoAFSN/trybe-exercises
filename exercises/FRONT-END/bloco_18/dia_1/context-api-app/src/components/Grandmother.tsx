import React from 'react'
import Father from './Father';


// type moneyProps = {
//   money: { money: number};
// }

export default function Grandmother(props: any) {
  const { money, spendMoney } = props;
  return (
    <div>
      <h1>Eu sou a vó</h1>
      <Father money={money} spendMoney={spendMoney}/>
    </div>
  )
}
