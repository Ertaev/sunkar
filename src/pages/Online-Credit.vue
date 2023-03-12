<template>
  <main>
    <div class="header-section online-credit">
      <div class="container">
        <div class="header-content">
          <h1
            class="title"
            data-aos="fade-right"
            data-aos-delay="200"
            data-aos-duration="1000"
          >
            Калькулятор
          </h1>

          <div class="calc-wrapper">
            <form
              @submit.prevent="submit"
              data-aos="fade-right"
              data-aos-delay="200"
              data-aos-duration="1000"
            >
              <h3>Сумма кредита</h3>

              <input
                type="number"
                min="0"
                placeholder="8 000 000"
                v-model="form.sum"
              />

              <div>
                <p>Процентная ставка</p>

                <input
                  type="range"
                  min="0"
                  max="30"
                  step="0.1"
                  v-model="form.percent"
                />
                <label> {{ form.percent }} </label>
              </div>

              <div>
                <p>Срок кредита (в месяцах)</p>

                <input
                  type="range"
                  min="1"
                  max="96"
                  step="1"
                  v-model="form.month"
                />
                <label> {{ form.month }} </label>
              </div>

              <button class="button">Рассчитать</button>
            </form>

            <div
              class="right"
              data-aos="fade-left"
              data-aos-delay="200"
              data-aos-duration="1000"
            >
              <p>Ежемесячный платеж: {{ monthly_payment }}</p>
              <p>Общая сумма выплат: {{ total }}</p>
              <p>Сумма переплаты по процентам: {{ overpayment }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>

<script>
import { useCalculator } from "@/use/calculator";

export default {
  setup() {
    return {
      ...useCalculator(),
    };
  },
};
</script>

<style lang="scss">
.header-section {
  &.online-credit {
    background: center / contain no-repeat url(@/assets/images/bg.png), #424242 !important;

    @media screen and (max-width: 992px) {
      height: auto;
      padding-bottom: 60px;
    }

    .header-content {
      padding-top: 25vh;
    }
  }
}

.calc-wrapper {
  display: flex;
  align-items: center;
  justify-content: space-between;

  @media screen and (max-width: 992px) {
    flex-direction: column;
  }

  form {
    width: 50%;
    display: flex;
    flex-direction: column;
    background-color: rgba(255, 255, 255, 0.3);
    border-radius: 10px;
    padding: 14px;
    gap: 30px;
    margin-bottom: 30px;

    @media screen and (max-width: 992px) {
      width: 100%;
    }

    div {
      gap: 30px;
    }

    p {
      font-size: 15px;
      line-height: 22px;
      margin-bottom: 4px;
    }

    label {
      margin-left: 30px;
    }
  }

  h3 {
    font-size: 20px;
  }

  input[type="number"] {
    -moz-appearance: textfield;
    padding: 5px 10px;
    height: 44px;
    font-size: 15px;
    border: 1px solid #acb6c3;
    border-radius: 3px;

    &::-webkit-outer-spin-button,
    &::-webkit-inner-spin-button {
      -webkit-appearance: none;
      margin: 0;
    }
  }

  input[type="range"] {
    width: 300px;

    @media screen and (max-width: 992px) {
      width: 90%;
    }

    @media screen and (max-width: 560px) {
      width: 80%;
    }
  }

  .right {
    width: 40%;
    background: #09994a;
    border-radius: 0;
    padding: 48px 28px;
    color: #fff;

    @media screen and (max-width: 992px) {
      width: 100%;
    }

    @media screen and (max-width: 560px) {
      padding: 48px 20px;
    }

    p:not(:last-child) {
      margin-bottom: 12px;
    }
  }
}
</style>
