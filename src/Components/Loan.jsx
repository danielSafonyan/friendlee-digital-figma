import React from 'react'
import defaultValues from '../defaultValues'
import getSpacedNum from '../getSpacedNum'
import cleanInput from '../cleanInput'


export default function Loan(props) {
  const [input, setInput] = React.useState(props.loan)
  function handleChange(e) {
    const newVal = cleanInput(e.target.value)
    setInput(newVal || Number(0))
  }
  function handleSubmit(e) {
    e.preventDefault()
    let value
    if (input < 1000) {
      console.log("small")
      value = 1000
    } else if(input > 5000000) {
      value = 1000
      console.log("big")
    } else {
      console.log('ok')
      value = input
    }
    props.clickHandler({
      target:
      {name: e.target.name,
      value: input}
    })
  }
    const orangeWidth = (input - defaultValues.loanMin) / (defaultValues.loanMax - defaultValues.loanMin) * 100
    return (
        <div className="input-container">
        <label htmlFor="loan" className="input__label">
          Стоимость автомобиля
        </label>
        <div className="input-container__inputs">
          <form name="loan" onSubmit={handleSubmit}>
          <input type="text"
                 id="loan"
                 name="loan"
                 value={getSpacedNum(input)}
                 onChange={handleChange}
                 className="input__number"
                 min={defaultValues.loanMin}
                 max={defaultValues.loanMax + 1000} 
                 />
          </form>
          <label htmlFor="loan" className="input__label-aux">
            ₽
          </label>
          <input type="range"
                 id="loan"
                 name="loan"
                 value={input}
                 onChange={handleChange}
                 className="input__range"
                 min='1000'
                 max={defaultValues.loanMax + 100} 
                 step="1000"/>
          <div className="range-tracks-container">
            <div className="orange track" style={{width: `${orangeWidth}%`}}></div>
          </div>
        </div>
      </div>
    )
}