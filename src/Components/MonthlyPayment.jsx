import React from 'react'

export default function MonthlyPayment(props) {
    return (
        <div className="payment-container">
        <div className="input__label">
          Ежемесячный платеж от
        </div>
        <div className="payment__amount">
          {props.monthlyPayment} ₽
        </div>
      </div>
    )
}