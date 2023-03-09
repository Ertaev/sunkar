<template>
  <main>
    <div class="header-section">
      <div class="header-bg">
        <video autoplay="" muted="" loop="" playsinline="">
          <!-- <source src="@/assets/video/video-bg.mp4" type="video/mp4;"> -->
          <source src="@/assets/video/abg.mp4" type="video/mp4;" />
        </video>
      </div>
  
      <div class="container">
        <div class="main">
          <h1 class="title">Развиваем агробизнес вместе!</h1>
          <p class="subtitle">
            содействие устойчивому развитию агропромышленного комплекса Республики
            Казахстан путем формирования доступной и эффективной системы
            финансирования
          </p>
  
          <div class="options">
            <router-link to="#" class="button">Программа кредитования</router-link>
            <router-link to="#" class="button button-green">Как получить кредит?</router-link>
            <router-link to="/online-credit" class="button">Онлайн кредит</router-link>
            <router-link to="#" class="button button-green">Микрокредитование молодежи</router-link>
          </div>
        </div>
      </div>
    </div>
    
    <Programs />

    <About />

    <Steps />
  </main>
</template>

<script>
import Programs from "@/components/Programs.vue"
import About from "@/components/About.vue"
import Steps from "@/components/Steps.vue"
import { Swiper, SwiperSlide } from "swiper/vue";
import { Autoplay } from 'swiper';

export default {
  components: {
    Swiper,
    SwiperSlide,
    Programs,
    Steps,
    About
  },
  setup() {
    return {
      modules: [Autoplay]
    };
  },
};
</script>

<style lang="scss">
main {
  .header-section {
    height: 100vh;
    background: linear-gradient(
      to bottom,
      rgba(0, 0, 0, 0.4),
      rgba(0, 0, 0, 0.18)
    );
  }

  .swiper {
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    z-index: -1;
  }

  .main {
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
      opacity: .8;
    }

    &-green {
      background-color: #09994a;
    }
  }
}
</style>


<!-- <swiper
  :slides-per-view="1"
  :autoplay="true"
  :loop="true"
  :modules="modules"
>
  <swiper-slide>
    <img src="@/assets/images/7.jpg" alt="bg">
  </swiper-slide>
  <swiper-slide>
    <img src="@/assets/images/8.jpg" alt="bg">
  </swiper-slide>
  <swiper-slide>
    <img src="@/assets/images/9.jpg" alt="bg">
  </swiper-slide>
</swiper> -->
