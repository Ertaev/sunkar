<template>
  <main>
    <div class="header-section online-credit">
      <div class="container">
        <div class="main">
          <h1 class="title">
            Кулькулятор
          </h1>

          <div class="calc-wrapper">
            <form @submit.prevent="submit">
              <h4> Сумма кредита </h4>

              <input type="number" min="0">

              <p>Процентная ставка</p>
              <div>
                <input type="range" min="0" max="20" step="1">
                <label>Value: </label>
              </div>

              <p>Срок кредита (в месяцах)</p>
              <div>
                <input type="range" min="0" max="20" step="1">
                <label>Value: </label>
              </div>

              <button>Рассчитать</button>
            </form>

            <p>Ежемесячный платеж: 235113.32</p>
            <p>Общая сумма выплат: 9169419.39</p>
            <p>Сумма переплаты по процентам: 1169419.39</p>
          </div>

        </div>
      </div>
    </div>
  </main>
</template>

<script>
export default {
  methods: {
    submit() {

    }
  }
}
</script>

<style lang="scss">
.header-section {
  &.online-credit {
    background: center / contain no-repeat url(@/assets/images/bg.png), #424242 !important;
  }
}

.calc-wrapper {
  background-color: #cecece;
  border-radius: 10px;
  padding: 14px;
  width: 300px;
  
  form {
    display: flex;
    flex-direction: column;
    gap: 10px;
  }

  div {
    display: flex;
    gap: 30px;
  }
}
</style>