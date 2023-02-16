import React from 'react'
import defaultValues from '../defaultValues'
import getSpacedNum from '../getSpacedNum'
import cleanInput from '../cleanInput'

export default function Deposit(props) {
  const minDeposit = Math.round(props.loan * defaultValues.depositMin / 100)
  const maxDeposit = Math.round(props.loan * defaultValues.depositMax / 100)
  const [input, setInput] = React.useState(props.deposit)
  console.log('rendered')
  function handleChange(e) {
    const newVal = cleanInput(e.target.value)
    setInput(newVal || Number(0))
    props.clickHandler({
      target:
      {name: e.target.name,
      value: e.target.value}
    })
  }
  function handleSubmit(e) {
    e.preventDefault()
    let value
    if (input < minDeposit) {
      console.log("small")
      value = minDeposit
    } else if(input > maxDeposit) {
      value = maxDeposit
      console.log("big")
    } else {
      console.log('ok')
      value = input
    }
    setInput(value)
    props.clickHandler({
      target:
      {name: e.target.name,
      value}
    })
  }

    const calculatedPercentage = Math.round(props.deposit / props.loan * 100)
    function whitenParent(e) {
      const container = (e.target.closest('.input-container__inputs'))
      container.style.background ='none'
    }
    function greyParent(e) {
      const container = (e.target.closest('.input-container__inputs'))
      container.style.background ='#F3F3F4'
    }
    // const orangeWidth = props.deposit / maxDeposit * 100
    const orangeWidth = (input - minDeposit) / (maxDeposit - minDeposit) * 100
    return (
        <div className="input-container">
        <label htmlFor="deposit" className="input__label">
          Первоначальный взнос
        </label>
        <div className="input-container__inputs" 
        onFocus={whitenParent}
        onBlur={greyParent}
        >
          <form name="deposit" onSubmit={handleSubmit}>
          <input type="text"
                 id="deposit"
                 name="deposit"
                 value={getSpacedNum(input)}
                 onChange={handleChange}
                 className="input__number"
                 min={minDeposit}
                 max={maxDeposit}
                 />
          </form>
          <label htmlFor="deposit" className="input__label-aux">
            <div className="depositPercent">{calculatedPercentage}%</div>
          </label>
          <input type="range"
                 id="deposit"
                 name="deposit"
                 value={input}
                 onChange={handleChange}
                 className="input__range"
                 min={minDeposit}
                 max={maxDeposit}
                 step="1"/>
          <div className="range-tracks-container">
            <div className="orange track" style={{width: `${orangeWidth}%`}}></div>
          </div>
        </div>
      </div>
    )
}