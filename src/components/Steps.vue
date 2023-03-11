<template>
  <div class="steps">
    <div class="container">
      <h2 data-aos="fade-right" data-aos-delay="200" data-aos-duration="1000">
        КАК МЫ РАБОТАЕМ?
      </h2>

      <div class="steps-list">
        <div
          v-for="step in steps"
          :key="step.index"
          class="steps-item"
          data-aos="fade-up"
          :data-aos-delay="step.delay"
          data-aos-duration="1000"
        >
          <img :src=step.image :alt=step.title />
          <p class="subtitle">шаг {{ step.index }}</p>
          <h4 class="title">{{ step.title }}</h4>

          <p class="desc">{{ step.desc }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      steps: [
        {
          index: 1,
          title: "ЗАЯВКА",
          desc: "Вы оставляете заявку на кредитование с суммой открываемой КЛ",
          delay: 200,
          image: require("@/assets/images/step-1.svg"),
        },
        {
          index: 2,
          title: "СБОР ДОКУМЕНТОВ",
          desc: "Собираете весь перечень необходимой документации.",
          delay: 400,
          image: require("@/assets/images/step-2.svg"),
        },
        {
          index: 3,
          title: "РЕГИСТРАЦИИ ДОГОВОРОВ В УПОЛНОМОЧЕННОМ ОРГАНЕ",
          desc: "Регистрируйте договора залога.",
          delay: 600,
          image: require("@/assets/images/step-3.svg"),
        },
      ],
    };
  },
};
</script>

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

    img {
      position: absolute;
      top: 50px;
      left: 20px;
      width: 40px;
      height: 40px;

      @media screen and (max-width: 992px) {
        top: 40px;
      }
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

      @media screen and (max-width: 560px) {
        font-size: 18px;
      }

      @media screen and (max-width: 480px) {
        font-size: 16px;
      }
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
