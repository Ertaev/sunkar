<template>
  <footer class="footer">
    <div class="container">
      <div class="footer-nav">
        <router-link to="/" class="logo">
          <img
            class="logo__img"
            src="@/assets/images/Screenshot_2.png"
            alt="logo"
          />
        </router-link>

        <Menu :navLinks="navLinks" />
      </div>

      <div class="footer-nav">
        <router-link to="/" class="call-center">
          <span>Единая справочная служба</span>
          5353
        </router-link>

        <p class="policy">Политика конфиденциальности</p>

        <div class="social-list">
          <router-link
            :to="media.path"
            class="social-item"
            v-for="media in medias"
            :key="media.id"
          >
            <i class="fa-brands" :class="media.class"></i>
          </router-link>
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
import Menu from "@/components/Menu.vue";

export default {
  components: { Menu },
  props: ["navLinks"],
  data() {
    return {
      medias: [
        {
          id: 1,
          class: "fa-facebook",
          path: "/",
        },
        {
          id: 2,
          class: "fa-instagram",
          path: "/",
        },
        {
          id: 3,
          class: "fa-youtube",
          path: "/",
        },
        {
          id: 4,
          class: "fa-whatsapp",
          path: "/",
        },
        {
          id: 5,
          class: "fa-telegram",
          path: "/",
        },
      ],
    };
  },
};
</script>

<style lang="scss">
.footer {
  padding: 40px 0;
  background-color: #424242;

  &-nav {
    display: grid;
    grid-template-columns: 200px auto;
    gap: 30px;
    align-items: center;
    color: #fff;

    &:first-child {
      margin-bottom: 20px;
    }

    .burger {
      display: none;
    }

    @media screen and (max-width: 767px) {
      &:last-child {
        display: flex;
        flex-wrap: wrap;
        justify-content: space-around;
      }
    }

    @media screen and (max-width: 560px) {
      &:last-child {
        flex-direction: column;
      }
    }
  }

  .dropdown-wrapper {
    display: none;
  }

  .menu__phone {
    display: none;
  }

  .call-center {
    display: flex;
    flex-direction: column;
    font-size: 22px;
    font-weight: bold;

    @media screen and (max-width: 767px) {
      width: 47%;
    }

    @media screen and (max-width: 560px) {
      align-items: center;
      width: 100%;
    }

    &:hover {
      color: #cecece;
    }

    span {
      font-weight: normal;
      font-size: 12px;
    }
  }

  .policy {
    position: absolute;
    left: 50%;
    transform: translateX(-50%);

    @media screen and (max-width: 767px) {
      order: 1;
      position: relative;
      left: inherit;
      transform: inherit;
    }
  }

  .social-list {
    margin-left: auto;
    display: flex;
    align-items: center;
    gap: 20px;

    i:hover {
      color: #cecece;
    }

    @media screen and (max-width: 767px) {
      width: 47%;
      justify-content: end;
      margin-left: inherit;
    }

    @media screen and (max-width: 560px) {
      width: 100%;
      justify-content: center;
    }
  }
}
</style>
