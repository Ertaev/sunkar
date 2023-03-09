<template>
  <div class="steps">
    <div class="container">
      <h2> КАК МЫ РАБОТАЕМ? </h2>
      <!-- <p>Все просто! 3 шага для того чтобы получить кредит</p> -->

      <div class="steps-list">
        <div class="steps-item">
          <p class="subtitle">шаг 1</p>
          <h4 class="title">ЗАЯВКА</h4>

          <p class="desc">Вы оставляете заявку на кредитование с суммой открываемой КЛ</p>
        </div>

        <div class="steps-item">
          <p class="subtitle">шаг 2</p>
          <h4 class="title">СБОР ДОКУМЕНТОВ</h4>

          <p class="desc">Собираете весь перечень необходимой документации.</p>
        </div>

        <div class="steps-item">
          <p class="subtitle">шаг 3</p>
          <h4 class="title">РЕГИСТРАЦИИ ДОГОВОРОВ В УПОЛНОМОЧЕННОМ ОРГАНЕ</h4>

          <p class="desc">Регистрируйте договора залога.</p>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
.steps {
  padding: 60px 0;
  background: #f8f7f5;

  &-list {
    display: flex;
    gap: 30px;

    @media screen and (max-width: 992px) {
      flex-direction: column;
    }

    @media screen and (max-width: 768px) {
      gap: 20px;
    }
  }

  &-item {
    position: relative;
    width: 100%;
    background-color: #fff;
    display: flex;
    flex-direction: column;
    padding: 20px 16px 20px 90px;
    cursor: default;
    
    &:hover {
      box-shadow: 0px 0px 6px 1px rgba(0, 0, 0, 0.1);
    }

    &::before {
      content: "";
      position: absolute;
      top: 30px;
      left: 0;
      width: 80px;
      height: 80px;
      background: center no-repeat url(@/assets/images/step-1.svg);

      @media screen and (max-width: 992px) {
        top: 20px;
      }
    }

    &:nth-child(2)::before {
      background: center no-repeat url(@/assets/images/step-2.svg);
    }

    &:nth-child(3)::before {
      background: center no-repeat url(@/assets/images/step-3.svg);
    }

    .subtitle {
      font-size: 12px;
      line-height: normal;
      margin-bottom: 10px;
      color: rgb(102, 177, 39);
      font-weight: 600;
    }

    .title {
      font-size: 20px;
      margin-bottom: 10px;
      display: flex;
      position: relative;
      font-weight: 700;
      text-transform: uppercase;
      color: #000;
    }

    .desc {
      display: block;
      color: rgba(0, 0, 0, 0.5);
      line-height: 21px;
      font-size: 14px;
    }
  }
}
</style>