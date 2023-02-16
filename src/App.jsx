import React from 'react'
import Loan from './Components/Loan'
import Deposit from './Components/Deposit'
import LeaseTerm from './Components/LeaseTerm'
import MonthlyPayment from './Components/MonthlyPayment'
import AgreementSum from './Components/AgreementSum'
import defaultValues from './defaultValues'
import cleanInput from './cleanInput'
import getPaymentData from './getPaymentData'
import getSpacedNum from './getSpacedNum'
import { useRef } from 'react';


function App() {
  const [state, setState] = React.useState({
    loan: defaultValues.loanInit,
    deposit: defaultValues.depositInit,
    leaseTerm: defaultValues.leaseTermInit,
  })

  const { totalPayment, monthlyPayment } = getPaymentData(state.loan, state.deposit, state.leaseTerm)
  console.log('totalPayment, monthlyPayment')
  console.log(totalPayment, monthlyPayment)
  function updateState(e) {
    let value = cleanInput(e.target.value)
    setState(prev => ({
      ...prev,
      [e.target.name]: value
    }))
  }
  const btnRef = useRef(null)
  function btnClickHandler() {
    btnRef.current.disabled = true
    alert(JSON.stringify({...state, totalPayment, monthlyPayment}))
  }
  return (
    <>
      <div className='title'>Рассчитайте стоимость <br/> автомобиля в лизинг</div>
      <div className="main-input-container">
        <Loan loan={state.loan} clickHandler={updateState}/>
        <Deposit 
          deposit={state.deposit} 
          loan={state.loan}
          clickHandler={updateState}
        />
        <LeaseTerm leaseTerm={state.leaseTerm} clickHandler={updateState}/>
      </div>
      <div className="main-output-container">
      <AgreementSum agreementSum={getSpacedNum(totalPayment)}/>
      <MonthlyPayment monthlyPayment={getSpacedNum(monthlyPayment)}
      />
      <button 
      className='sumbitBtn'
       ref={btnRef}
       onClick={btnClickHandler}
       >Оставить заявку</button>
       </div>
    </>
  )
}

export default App
