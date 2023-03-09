<template>
  <footer class="footer">
    <div class="container">
      <div class="footer-nav">
        <router-link to="/" class="logo">
          <img class="logo__img" src="@/assets/images/Screenshot_2.png" alt="logo">
        </router-link>

        <Menu 
          :navLinks="navLinks"
        />
      </div>

      <div class="footer-nav">
        <router-link to="/" class="call-center">
          <span>Единая справочная служба</span>
          5353
        </router-link>

        <p class="policy">
          Политика конфиденциальности
        </p>

        <div class="social-list">
          <router-link to="/" class="social-item"><i class="fa-brands fa-facebook"></i></router-link>
          <router-link to="/" class="social-item"><i class="fa-brands fa-instagram"></i></router-link>
          <router-link to="/" class="social-item"><i class="fa-brands fa-youtube"></i></router-link>
          <router-link to="/" class="social-item"><i class="fa-brands fa-whatsapp"></i></router-link>
          <router-link to="/" class="social-item"><i class="fa-brands fa-telegram"></i></router-link>
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
import Menu from "@/components/Menu.vue"

export default {
  components: {
    Menu
  },
  props: ["navLinks"]
}
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
  }

  .logo {
    width: 200px;
    height: 60px;

    &__img {
      width: 100%;
      height: 100%;
      object-fit: contain;
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
  }

  .social-list {
    margin-left: auto;
    display: flex;
    align-items: center;
    gap: 20px;

    i:hover {
      color: #cecece;
    }
  }
}
</style>