import React from 'react'
import Daugther from './Daugther'

// type moneyProps = {
//   money: { money: number};
// }

export default function Father(props: any) {
  const {money, spendMoney} = props;
  return (
    <div>
      <h3>Eu sou o Pai</h3>
      <Daugther money={money} spendMoney={spendMoney}/>
    </div>
  )
}
