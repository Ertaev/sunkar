<template>
  <MainSlot>
    <template #header-bg>
      <img src="@/assets/images/bg.png" alt="bg" />
    </template>

    <template #title> Программа кредитования «АгроБизнес» </template>

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
            от 1 млн тенге (из средств Национального фонда РК – от 50 млн тенге) до 5 млрд тенге на заемщика, до 10 млрд тенге на группу заемщиков/кредитное товарищество
          `,
          delay: 200,
          image: require("@/assets/images/money.png"),
        },
        {
          index: 2,
          title: "Ставка",
          desc: `
            Из собственных и/или привлеченных средств:

            прямое кредитование – 22% годовых (ГЭСВ – от 22% годовых)
            КТ/МФО/ЛК/БВУ/ЕАБР/РИЦ – 18% годовых (ГЭСВ – от 18% годовых) (при кредитовании заемщиков КТ/ЛК/БВУ/ЕАБР/РИЦ – маржа не более 4%; при кредитовании заемщиков МФО – маржа не более 10%)
            Из средств Национального фонда РК - 6% годовых (ГЭСВ – от 6% годовых) (только для прямого кредитования на инвестиции)
          `,
          delay: 400,
          image: require("@/assets/images/target.png"),
        },
        {
          index: 3,
          title: "Обеспечение",
          desc: `
            Прямое кредитование, кредитные товарищества, микрофинансовые организации – согласно Залоговой политике Общества.

            Банки второго уровня/Евразийский банк развития, РИЦ – без обеспечения, в рамках лимита, установленного решением уполномоченного органа Общества.

            Лизинговые компании:

            без обеспечения – при наличии рейтинга от международных рейтинговых агентств;
            под гарантию банков второго уровня/Евразийского банка развития.
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
  &.agro-business {
    position: relative;
    height: auto;
    padding-bottom: 100px;
    background: center / cover no-repeat url(@/assets/images/4.png) !important;

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
