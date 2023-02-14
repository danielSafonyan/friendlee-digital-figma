import React from 'react'
import WantedSum from './Components/WantedSum'
import Deposit from './Components/Deposit'
import LeaseTime from './Components/LeaseTime'
import MonthlyPayment from './Components/MonthlyPayment'
import AgreementSum from './Components/AgreementSum'

function App() {
  const [state, setState] = React.useState({
    wantedSum: 3000000,
    deposit: 1000000,
    leaseTime: 10,
  })

  function updateState(e) {
    setState(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }))
  }

  return (
    <>
      <div className='title'>Рассчитайте стоимость автомобиля в лизинг</div>
      <WantedSum wantedSum={state.wantedSum} clickHandler={updateState}/>
      <Deposit 
        deposit={state.deposit} 
        wantedSum={state.wantedSum}
        clickHandler={updateState}
      />
      <LeaseTime leaseTime={state.leaseTime} clickHandler={updateState}/>
      <AgreementSum agreementSum={Math.round(state.wantedSum / state.deposit)}/>
      <MonthlyPayment monthlyPayment={Math.round(state.wantedSum / state.leaseTime)} />
    </>
  )
}

export default App
