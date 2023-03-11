<template>
  <div class="contacts">
    <div class="container additional-info">
      <div
        class="map"
        data-aos="fade-right"
        data-aos-delay="200"
        data-aos-duration="1000"
      >
        <yandex-map :coords="coords" :zoom="10" @click="onClick">
          <ymap-marker
            :coords="coords"
            marker-id="123"
            hint-content="some hint"
          />
        </yandex-map>
      </div>

      <div
        class="info"
        data-aos="fade-left"
        data-aos-delay="200"
        data-aos-duration="1000"
      >
        <h2>Контакты</h2>

        <h3>Свяжитесь с нами любым удобным способом</h3>
        <ul>
          <li v-for="contact in contacts" :key="contact.id">
            <router-link :to="contact.path">
              {{ contact.title }}
            </router-link>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      contacts: [
        {
          id: 1,
          title: "+7 (7142) 93-22-11",
          path: "/",
          icon: "fa-solid fa-phone",
        },
        {
          id: 2,
          title: "kt-sunkar@mail.ru",
          path: "/",
          icon: "fa-solid fa-envelope",
        },
        {
          id: 3,
          title: "г. Костанай, ул. А.П.Чехова, 103",
          path: "/",
          icon: "fa-solid fa-location-dot",
        },
      ],
      coords: [53.214486, 63.632082],
    };
  },
  methods: {
    onClick(e) {
      this.coords = e.get("coords");
    },
  },
};
</script>

<style lang="scss">
.contacts {
  position: relative;

  .additional-info {
    display: flex;
    gap: 60px;

    @media screen and (max-width: 992px) {
      padding-top: 60px;
      flex-direction: column;
    }
  }

  .map {
    position: absolute;
    left: 0;
    width: 50%;
    height: 450px;
    z-index: 1;

    @media screen and (max-width: 992px) {
      position: relative;
      width: 100%;
      order: 1;
    }
  }

  .ymap-container {
    height: 100%;
  }

  .info {
    position: relative;
    width: 100%;
    height: 450px;
    display: flex;
    text-align: right;
    flex-direction: column;
    justify-content: center;

    @media screen and (max-width: 992px) {
      height: auto;
      text-align: left;
    }

    h2 {
      position: absolute;
      right: 0;
      top: 60px;

      @media screen and (max-width: 992px) {
        position: relative;
        top: auto;
      }
    }
  }

  h3 {
    font-size: 20px;
    margin-bottom: 16px;

    @media screen and (max-width: 560px) {
      font-size: 18px;
    }
  }

  ul {
    display: flex;
    flex-direction: column;
    gap: 20px;
  }

  li {
    font-size: 18px;

    &:first-child {
      color: #846e1a;
      font-size: 40px;

      @media screen and (max-width: 560px) {
        font-size: 32px;
      }
    }
  }
}
</style>
