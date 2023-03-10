<template>
  <main>
    <div class="header-section online-credit">
      <div class="container">
        <div class="header-content">
          <h1 class="title">
            Кулькулятор
          </h1>

          <div class="calc-wrapper">
            <form @submit.prevent="submit">
              <h4> Сумма кредита </h4>

              <input type="number" min="0" placeholder="80000" v-model="form.sum">

              <p>Процентная ставка</p>
              <div>
                <input type="range" min="0" max="30" step="0.1" v-model="form.percent">
                <label> {{ form.percent }} </label>
              </div>

              <p>Срок кредита (в месяцах)</p>
              <div>
                <input type="range" min="1" max="96" step="1" v-model="form.month">
                <label> {{ form.month }} </label>
              </div>

              <button class="button">Рассчитать</button>
            </form>

            <p>Ежемесячный платеж: {{ monthly_payment }} </p>
            <p>Общая сумма выплат: {{ total }}  </p>
            <p>Сумма переплаты по процентам: {{ overpayment }} </p>
          </div>

        </div>
      </div>
    </div>
  </main>
</template>

<script>
import { useCalculator } from "@/use/calculator"

export default {
  setup() {
    return {
      ...useCalculator()
    }
  }
}
</script>

<style lang="scss">
.header-section {
  &.online-credit {
    background: center / contain no-repeat url(@/assets/images/bg.png), #424242 !important;

    .header-content {
      padding-top: 25vh;
    }
  }
}

.calc-wrapper {
  display: flex;
  flex-direction: column;
  background-color: #cecece;
  border-radius: 10px;
  padding: 14px;
  width: 300px;
  
  form {
    display: flex;
    flex-direction: column;
    gap: 10px;
    margin-bottom: 30px;
  }

  div {
    display: flex;
    gap: 30px;
  }

  input[type="number"] {
    padding: 5px 10px;
  }
}
</style>