import React from 'react'
import defaultValues from '../defaultValues'
import cleanInput from '../cleanInput'

export default function LeaseTerm(props) {
  const [input, setInput] = React.useState(defaultValues.leaseTermInit)
  function handleChange(e) {
    const newVal = cleanInput(e.target.value) || Number(0)
    console.log(typeof newVal, 'newVal', newVal, Boolean(newVal))
    setInput(newVal)
    props.clickHandler({
      target:
      {name: e.target.name,
      value: newVal}
    })
  }
  function handleSubmit(e) {
    e.preventDefault()
    let value
    if (input < defaultValues.leaseTermMin) {
      value = defaultValues.leaseTermMin
    } else if(input > defaultValues.leaseTermMax) {
      value = defaultValues.leaseTermMax
    } else {
      value = input
    }
    setInput(value)
    props.clickHandler({
      target:
      {name: e.target.name,
      value}
    })
  }
    const orangeWidth = (input - defaultValues.leaseTermMin) / (defaultValues.leaseTermMax - defaultValues.leaseTermMin) * 100 
    console.log(input, defaultValues.leaseTermMin, defaultValues.leaseTermMax, orangeWidth)
    console.log('input, defaultValues.leaseTermMin, defaultValues.leaseTermMax, orangeWidth')
    return (
        <div className="input-container">
        <label htmlFor="leaseTerm" className="input__label">
          Срок лизинга
        </label>
        <div className="input-container__inputs">
          <form name="leaseTerm" onSubmit={handleSubmit}>
          <input type="text"
                 id="leaseTerm"
                 name="leaseTerm"
                 value={props.leaseTerm}
                 onChange={handleChange}
                 className="input__number"
                 min={defaultValues.leaseTermMin}
                 max={defaultValues.leaseTermMax}
                 />
          </form>
          <label htmlFor="leaseTerm" className="input__label-aux">
             мес.
          </label>
          <input type="range"
                 id="leaseTerm"
                 name="leaseTerm"
                 value={props.leaseTerm.toString()}
                 onChange={handleChange}
                 className="input__range"
                 min={defaultValues.leaseTermMin}
                 max={defaultValues.leaseTermMax}
                 step="1"/>
          <div className="range-tracks-container">
            <div className="orange track" style={{width: `${orangeWidth}%`}}></div>
          </div>
        </div>
      </div>
    )
}