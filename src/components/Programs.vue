<template>
  <div class="programs">
    <div class="container">
      <h2 data-aos="fade-right" data-aos-delay="200" data-aos-duration="1000">
        ПРОГРАММЫ КРЕДИТОВАНИЯ
      </h2>

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
    </div>
  </div>
</template>

<script>
export default {
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
.programs {
  position: relative;
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
    padding: 25px;
    display: flex;
    align-items: center;
    background-color: #ffffff;
    transition: 0.5s ease;
    border-radius: 5px;
    width: 100%;
    color: #141414;
    gap: 24px;

    &:hover {
      background-color: #09994a;
      box-shadow: 0 0 70px 2px rgb(9 153 74 / 50%);
      color: #fff;

      img {
        filter: invert(1);
      }
    }
  }

  &-img {
    width: 40px;
    height: 40px;

    img {
      height: 100%;
      object-fit: contain;
      transition: 0.5s ease;
    }
  }

  &-title {
    font-size: 16px;
    font-weight: 500;
    line-height: 1.2em;
    text-transform: uppercase;
  }
}
</style>
