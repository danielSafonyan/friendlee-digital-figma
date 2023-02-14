import React from 'react'

export default function Deposit(props) {
    const orangeWidth = props.deposit / 5000000 * 100
    const calculatedPercentage = Math.round(props.deposit / props.wantedSum * 100)
    return (
        <div className="input-container">
        <label htmlFor="deposit" className="input__label">
          Первоначальный взнос
        </label>
        <div className="input-container__inputs">
          <input type="number"
                 id="deposit"
                 name="deposit"
                 value={props.deposit}
                 onChange={props.clickHandler}
                 className="input__number"
                 min="1"
                 max="5000000" />
          <label htmlFor="deposit" className="input__label-aux">
            <div className="depositPercent">{calculatedPercentage}%</div>
          </label>
          <input type="range"
                 id="deposit"
                 name="deposit"
                 value={props.deposit}
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