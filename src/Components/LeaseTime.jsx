import React from 'react'

export default function LeaseTime(props) {
    const orangeWidth = props.leaseTime / 5000000 * 100
    return (
        <div className="input-container">
        <label htmlFor="leaseTime" className="input__label">
          Срок лизинга
        </label>
        <div className="input-container__inputs">
          <input type="number"
                 id="leaseTime"
                 name="leaseTime"
                 value={props.leaseTime}
                 onChange={props.clickHandler}
                 className="input__number"
                 min="1"
                 max="5000000" />
          <label htmlFor="leaseTime" className="input__label-aux">
             мес.
          </label>
          <input type="range"
                 id="leaseTime"
                 name="leaseTime"
                 value={props.leaseTime}
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