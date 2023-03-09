<template>
  <header class="header">
    <div class="container header__container">
      <router-link to="/" class="logo">
        <img class="logo__img" src="@/assets/images/Screenshot_2.png" alt="logo">
      </router-link>

      <Menu 
        :navLinks="navLinks"
      />
    </div>
  </header>
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
.header {
  position: absolute;
  width: 100%;
  z-index: 100;
  
  &__container {
    height: 100px;
    display: grid;
    grid-template-columns: 200px auto;
    gap: 30px;
    align-items: center;
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
}
</style>