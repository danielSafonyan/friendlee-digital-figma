import React from 'react'

export default function LeaseTerm(props) {
    const orangeWidth = props.leaseTerm / 5000000 * 100
    return (
        <div className="input-container">
        <label htmlFor="leaseTerm" className="input__label">
          Срок лизинга
        </label>
        <div className="input-container__inputs">
          <input type="number"
                 id="leaseTerm"
                 name="leaseTerm"
                 value={props.leaseTerm}
                 onChange={props.clickHandler}
                 className="input__number"
                 min="1"
                 max="5000000" />
          <label htmlFor="leaseTerm" className="input__label-aux">
             мес.
          </label>
          <input type="range"
                 id="leaseTerm"
                 name="leaseTerm"
                 value={props.leaseTerm}
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