import React from 'react'

export default function AgreementSum(props) {
    return (
        <div className="payment-container">
        <div className="input__label">
          Сумма договора лизинга
        </div>
        <div className="payment__amount">
          {props.agreementSum} ₽
        </div>
      </div>
    )
}