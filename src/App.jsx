import React from 'react'
import Loan from './Components/Loan'
import Deposit from './Components/Deposit'
import LeaseTerm from './Components/LeaseTerm'
import MonthlyPayment from './Components/MonthlyPayment'
import AgreementSum from './Components/AgreementSum'

function App() {
  const [state, setState] = React.useState({
    loan: 3000000,
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
      <Loan loan={state.loan} clickHandler={updateState}/>
      <Deposit 
        deposit={state.deposit} 
        loan={state.loan}
        clickHandler={updateState}
      />
      <LeaseTerm leaseTime={state.leaseTime} clickHandler={updateState}/>
      <AgreementSum agreementSum={Math.round(state.loan / state.deposit)}/>
      <MonthlyPayment monthlyPayment={Math.round(state.loan / state.leaseTime)}
      />
      <button className='sumbitBtn'>Оставить заявку</button>
    </>
  )
}

export default App
