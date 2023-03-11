<template>
  <MainSlot>
    <template #header-bg>
      <img src="@/assets/images/bg.png" alt="bg" />
    </template>

    <template #title> Программа кредитования «Іскер» </template>

    <template #default>
      <div class="steps-list">
        <div
          v-for="item in list"
          :key="item.index"
          class="steps-item"
          data-aos="fade-up"
          :data-aos-delay="item.delay"
          data-aos-duration="1000"
        >
          <img :src=item.image :alt=item.title />

          <h4 class="title">{{ item.title }}</h4>

          <p class="desc">{{ item.desc }}</p>
        </div>
      </div>
    </template>
  </MainSlot>
</template>

<script>
import MainSlot from "@/components/MainSlot.vue"

export default {
  components: { MainSlot },
  data() {
    return {
      list: [
        {
          index: 1,
          title: "Сумма",
          desc: `
            Прямое кредитование – до 8000 МРП;
            Кредитные товарищества и микрофинансовые организации – от 500 000 тенге до 25% от собственного капитала Общества
          `,
          delay: 200,
          image: require("@/assets/images/money.png"),
        },
        {
          index: 2,
          title: "Ставка",
          desc: `
            Продуктивная занятость:
            Прямое кредитование – 6% годовых (ГЭСВ – от 6% годовых), для членов малообеспеченных и/или многодетных семей (ИП, КХ/ФХ) - не более 4% годовых (ГЭСВ – от 4% годовых),
            Кредитные товарищества и микрофинансовые организации – 2% годовых (ГЭСВ – от 2% годовых) (номинальная ставка для конечных заемщиков – не более 6% годовых, ГЭСВ – от 6% годовых), для членов малообеспеченных и/или многодетных семей (ИП, КХ/ФХ) - не более 4% годовых (ГЭСВ – от 4% годовых).

            Дорожная карта занятости:
            Микрофинансовые организации с участием государства – 2% годовых (ГЭСВ – от 2% годовых) (номинальная ставка для конечных заемщиков – не более 6% годовых, ГЭСВ – от 6% годовых).
          `,
          delay: 400,
          image: require("@/assets/images/target.png"),
        },
        {
          index: 3,
          title: "Обеспечение",
          desc: `
            Прямое кредитование, кредитные товарищества – согласно Залоговой политике Общества.

            Микрофинансовые организации:
            согласно Залоговой политике Общества;
            под гарантию РИЦ;
            без обеспечения при соответствии установленным требованиям Общества.
          `,
          delay: 600,
          image: require("@/assets/images/bank.png"),
        },
      ],
    };
  },
}
</script>

<style lang="scss">
.header-section {
  &.isker {
    position: relative;
    height: auto;
    padding-bottom: 100px;
    background: -2000px / cover no-repeat url(@/assets/images/3.png) !important;

    @media screen and (max-width: 992px) {
      height: auto;
      padding-bottom: 60px;
    }

    .header-bg {
      z-index: 0;
    }
  }

  .desc {
    display: flex;
    flex-direction: column;
    gap: 20px;
    text-align: justify;

    p {
      font-size: 18px;
      line-height: 22px;
      color: #fff;
    }
  }
}
</style>
