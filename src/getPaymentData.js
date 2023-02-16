export default function getPaymentData(loan, deposit, leaseTerm) {
   const p = loan - deposit
   const i = 0.05
   const n = leaseTerm

   let ann_monthly_payment = p * (i * Math.pow((1 + i), n)) / (Math.pow((1 + i), n) - 1)
   ann_monthly_payment = Math.round(ann_monthly_payment)
   const total_paid = ann_monthly_payment * leaseTerm + deposit
   return { monthlyPayment: ann_monthly_payment, totalPayment : total_paid}
}