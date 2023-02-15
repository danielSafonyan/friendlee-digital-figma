import React from 'react'

export default function Loan(props) {
    const orangeWidth = props.loan / 5000000 * 100
    return (
        <div className="input-container">
        <label htmlFor="loan" className="input__label">
          Стоимость автомобиля
        </label>
        <div className="input-container__inputs">
          <input type="number"
                 id="loan"
                 name="loan"
                 value={props.loan}
                 onChange={props.clickHandler}
                 className="input__number"
                 min="1"
                 max="5000000" />
          <label htmlFor="loan" className="input__label-aux">
            ₽
          </label>
          <input type="range"
                 id="loan"
                 name="loan"
                 value={props.loan}
                 onChange={props.clickHandler}
                 className="input__range"
                 min="1"
                 max="5000000"
                 step="1"/>
          <div className="range-tracks-container">
            <div className="orange track" style={{width: `${orangeWidth}%`}}></div>
          </div>
        </div>
      </div>
    )
}