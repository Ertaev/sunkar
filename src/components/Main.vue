<template>
  <MainSlot>
    <template #header-bg>
      <video
        autoplay=""
        muted=""
        loop=""
        playsinline=""
        poster="@/assets/images/7.jpg"
      >
        <source src="@/assets/video/abg.mp4" type="video/mp4;" />
      </video>
    </template>

    <template #title>
      Развиваем агробизнес вместе!
    </template>

    <template #subtitle>
      <p class="subtitle">
        содействие устойчивому развитию агропромышленного комплекса Республики
        Казахстан путем формирования доступной и эффективной системы
        финансирования
      </p>
    </template>

    <template #default>
      <div class="options">
        <router-link
          v-for="(option, index) in optionButtons"
          :key="index"
          :to="option.path"
          class="button"
          :class="{ button_green: option.isGreen }"
          data-aos="fade-up"
          :data-aos-delay="option.delay"
          data-aos-duration="1000"
        >
          {{ option.title }}
        </router-link>
      </div>
    </template>

 	</MainSlot>
</template>

<script>
import { Swiper, SwiperSlide } from "swiper/vue";
import { Autoplay } from "swiper";
import MainSlot from '@/components/MainSlot.vue'

export default {
  components: {
    Swiper,
    SwiperSlide,
    MainSlot
  },
  data() {
    return {
      optionButtons: [
        {
          path: "/programs",
          title: "Программа кредитования",
          isGreen: false,
          delay: 200,
        },
        {
          path: "/",
          title: "Как получить кредит?",
          isGreen: true,
          delay: 400,
        },
        {
          path: "/online-credit",
          title: "Онлайн кредит",
          isGreen: false,
          delay: 600,
        },
        {
          path: "/",
          title: "Микрокредитование молодежи",
          isGreen: true,
          delay: 800,
        },
      ],
    };
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

  @media screen and (max-width: 560px) {
    font-size: 32px;
    margin-bottom: 32px;
  }
}

.subtitle {
  font-size: 16px;
  line-height: 25px;
  color: #fff;
  max-width: 900px;
  text-transform: uppercase;
  margin-bottom: 120px;

  @media screen and (max-width: 560px) {
    font-size: 14px;
    line-height: 20px;
    margin-bottom: 80px;
  }

  @media screen and (max-width: 560px) {
    margin-bottom: 50px;
  }
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

  @media screen and (max-width: 768px) {
    width: calc(100% + 10px);
    padding-right: 10px;
    flex-wrap: nowrap;
    overflow-x: auto;
  }

  @media screen and (max-width: 560px) {
    gap: 20px;
  }
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

  @media screen and (max-width: 768px) {
    white-space: nowrap;
  }

  @media screen and (max-width: 560px) {
    font-size: 14px;
    padding: 12px 20px;
  }

  &:hover {
    background-color: #9a490a;
  }

  &_green {
    background-color: #09994a;

    &:hover {
      background-color: #036330;
    }
  }
}
</style>
