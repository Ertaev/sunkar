<template>
  <MainSlot>
    <template #header-bg>
      <img src="@/assets/images/bg.png" alt="bg" />
    </template>

    <template #title> ПРОГРАММЫ КРЕДИТОВАНИЯ </template>

    <template #default>
      <div class="programs-list">
        <router-link
          v-for="program in programs"
          :key="program.id"
          :to="program.path"
          class="programs-item"
          data-aos="fade-up"
          :data-aos-delay="program.delay"
          data-aos-duration="1000"
        >
          <div class="programs-img">
            <img :src="program.img" :alt="program.title" />
          </div>

          <p class="programs-title">
            {{ program.title }}
          </p>
        </router-link>
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
      programs: [
        {
          id: 1,
          path: "/ken-dala",
          title: "КЕҢ ДАЛА",
          img: require("@/assets/images/dala.png"),
          delay: 200,
        },
        {
          id: 2,
          path: "/agro-business",
          title: "агробизнес",
          img: require("@/assets/images/agro.png"),
          delay: 400,
        },
        {
          id: 3,
          path: "/isker",
          title: "Іскер",
          img: require("@/assets/images/isker.png"),
          delay: 600,
        },
      ],
    };
  },
};
</script>

<style lang="scss">
.header-section {
  &.programs {
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
