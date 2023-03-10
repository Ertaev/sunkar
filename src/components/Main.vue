<template>
  <div class="header-section">
    <div class="header-bg">
      <video autoplay="" muted="" loop="" playsinline="">
        <!-- <source src="@/assets/video/video-bg.mp4" type="video/mp4;"> -->
        <source src="@/assets/video/abg.mp4" type="video/mp4;" />
      </video>
    </div>

    <div class="container">
      <div class="header-content">
        <h1 class="title">Развиваем агробизнес вместе!</h1>
        <p class="subtitle">
          содействие устойчивому развитию агропромышленного комплекса Республики
          Казахстан путем формирования доступной и эффективной системы
          финансирования
        </p>

        <div class="options">
          <router-link v-for="(option, index) in optionButtons" 
            :key="index"
            :to="option.path" 
            class="button"
            :class="{button_green: option.isGreen}"
          >
            {{ option.title }}
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { Swiper, SwiperSlide } from "swiper/vue";
import { Autoplay } from "swiper";

export default {
  components: {
    Swiper,
    SwiperSlide,
  },
  data() {
    return {
      optionButtons: [
        {
          path: "/",
          title: "Программа кредитования",
          isGreen: false,
        },
        {
          path: "/",
          title: "Как получить кредит?",
          isGreen: true,
        },
        {
          path: "/online-credit",
          title: "Онлайн кредит",
          isGreen: false,
        },
        {
          path: "/",
          title: "Микрокредитование молодежи",
          isGreen: true,
        },
      ]
    }
  },
  setup() {
    return {
      modules: [Autoplay],
    };
  },
};
</script>

<style lang="scss">
.header-section {
  height: 100vh;
}

.swiper {
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  z-index: -1;
}

.header-content {
  padding-top: 35vh;

  @media screen and (max-width: 992px) {
    padding-top: 30vh;
  }
}

.title {
  color: #fff;
  font-size: 48px;
  font-weight: bold;
  letter-spacing: 2px;
  text-transform: uppercase;
  margin-bottom: 50px;

  @media screen and (max-width: 992px) {
    font-size: 36px;
    margin-bottom: 36px;
  }
}

.subtitle {
  font-size: 16px;
  line-height: 25px;
  color: #fff;
  max-width: 900px;
  text-transform: uppercase;
  margin-bottom: 120px;
}

.header-bg {
  width: 100%;
  overflow: hidden;
  position: absolute;
  top: -50px;
  bottom: 0;
  z-index: -1;

  video {
    transform: scale(1.3) translate(0, 5%);

    @media screen and (max-width: 992px) {
      transform: scale(1.3) translate(-15%, 5%);
    }
  }

  &::before {
    content: "";
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(
      to bottom,
      rgba(0, 0, 0, 0.4),
      rgba(0, 0, 0, 0.18)
    );
    z-index: 1;
  }
}

.options {
  display: flex;
  flex-wrap: wrap;
  gap: 20px 30px;
}

.button {
  padding: 15px 30px;
  font-size: 16px;
  line-height: 20px;
  font-weight: 500;
  border-radius: 3px;
  border: none;
  transition: 0.5s ease;
  background-color: #ed7920;
  color: #ffffff !important;

  &:hover {
    opacity: 0.8;
  }

  &_green {
    background-color: #09994a;
  }
}
</style>
