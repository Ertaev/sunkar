import { ref, reactive } from "vue"

/**
 * 
 * Ежемесячный платеж
 * monthly_interest_rate = percent / 100 / 12
 * monthly_payment = (sum * monthly_interest_rate * (1 + monthly_interest_rate) ** month) / ((1 + monthly_interest_rate) ** month - 1)
 * 
 * Общая сумма выплат
 * total = monthly_payment * month
 * 
 * Сумма переплаты по процентам
 * overpayment = monthly_payment * month - sum
 * 
 */

export function useCalculator() {
  const monthly_interest_rate = ref(0)
  const monthly_payment = ref(0)
  const total = ref(0)
  const overpayment = ref(0)
  const form = reactive({
    sum: 0,
    percent: 0,
    month: 0
  })

  const submit = () => {
    monthly_interest_rate.value = form.percent / 100 / 12
    monthly_payment.value = ((form.sum * monthly_interest_rate.value * (1 + monthly_interest_rate.value)**form.month) / ((1 + monthly_interest_rate.value)**form.month - 1))
    total.value = (monthly_payment.value * form.month)
    overpayment.value = (monthly_payment.value * form.month - form.sum)

    monthly_payment.value = monthly_payment.value.toFixed(2)
    total.value = total.value.toFixed(2)
    overpayment.value = overpayment.value.toFixed(2)
  }

  return {
    form, submit, monthly_interest_rate, monthly_payment, total, overpayment
  }
}