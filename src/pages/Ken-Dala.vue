<template>
  <MainSlot>
    <template #header-bg>
      <img src="@/assets/images/bg.png" alt="bg" />
    </template>

    <template #title> Программа кредитования весенне-полевых и уборочных работ «Кең дала» </template>

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
            Для КТ - от 1 млн. тенге до 10 млрд тенге; 
            Для РИЦ/МФО/БВУ - от 1 млн тенге до 25% от собственного капитала Общества.
          `,
          delay: 200,
          image: require("@/assets/images/money.png"),
        },
        {
          index: 2,
          title: "Ставка",
          desc: `
            1,5% годовых (ГЭСВ – от 1,5% годовых)
            (при кредитовании заемщиков КТ/РИЦ/МФО/БВУ – маржа не более 3,5%)
          `,
          delay: 400,
          image: require("@/assets/images/target.png"),
        },
        {
          index: 3,
          title: "Обеспечение",
          desc: `
            Кредитные товарищества – согласно Залоговой политике Общества;
            РИЦ – без обеспечения;
            Микрофинансовая организация – гарантия РИЦ/БВУ;
            Банки второго уровня– без обеспечения.
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
  &.ken-dala {
    position: relative;
    height: auto;
    padding-bottom: 100px;
    background: center / cover no-repeat url(@/assets/images/2.png) !important;

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
