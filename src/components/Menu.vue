<template>
  <nav class="menu">
    <div class="menu__phone">
      <p>5353</p>
    </div>

    <ul class="menu__list" :class="{ menu__open: isActive }">
      <MenuItem
        v-for="(navLink, index) of navLinks"
        :key="index"
        :navLink="navLink"
      />
    </ul>

    <router-link to="/" class="menu__search">
      <i class="fa fa-search"></i>
    </router-link>

    <div class="menu__lang">
      <p>RU</p>
    </div>

    <div
      class="burger"
      :class="{ burger__close: isActive }"
      @click="openModal"
    ></div>
  </nav>
</template>

<script>
import MenuItem from "./MenuItem.vue";

export default {
  props: ["navLinks"],
  components: { MenuItem },
  data() {
    return {
      isActive: false,
    };
  },
  methods: {
    openModal() {
      this.isActive = !this.isActive;
      this.isActive ? document.querySelector("html").style.overflow = "hidden" : document.querySelector("html").style.overflow = ""
      this.isActive ? document.querySelector("body").style.overflow = "hidden" : document.querySelector("body").style.overflow = ""
    },
  },
};
</script>

<style lang="scss">
.menu {
  display: flex;
  align-items: center;
  gap: 20px;

  & > * {
    color: #fff;
  }

  &__phone {
    font-size: 22px;
    font-weight: bold;

    @media screen and (max-width: 992px) {
      display: none;
    }
  }

  &__list {
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    display: flex;
    align-items: center;
    gap: 20px;

    @media screen and (max-width: 768px) {
      position: absolute;
      top: -300vh;
      width: 100%;
      height: 100vh;
      gap: 40px;
      align-items: center;
      flex-direction: column;
      justify-content: center;
      background: rgba(0, 0, 0, 0.7);
      backdrop-filter: blur(25px);
      transition: all 0.5s ease;
      overflow: auto;
      z-index: 10;
    }
  }

  &__open {
    @media screen and (max-width: 768px) {
      position: fixed;
      top: 0;
    }
  }

  &__search {
    position: relative;
    z-index: 11;
    color: #fff !important;
    margin-left: auto;

    &:hover {
      color: #cecece;
    }
  }

  &__lang {
    position: relative;
    z-index: 11;
    cursor: pointer;

    &:hover {
      color: #cecece;
    }
  }
}

.burger {
  position: relative;
  display: none;
  width: 30px;
  height: 20px;
  background: transparent;
  border-top: 2px solid #fff;
  border-bottom: 2px solid #fff;
  cursor: pointer;

  &::after {
    content: "";
    position: absolute;
    width: 30px;
    height: 2px;
    background: #fff;
    right: 0;
    top: 50%;
    transform: translateY(-50%);
    transition: all 0.3s ease;
  }

  &__close {
    position: relative;
    z-index: 11;
    border: none;

    &::before,
    &::after {
      content: "";
      position: absolute;
      width: 30px;
      height: 2px;
      background: #fff;
      right: 0;
      top: 50%;
      transform: translateY(-50%);
      transition: all 0.3s ease;
    }

    &::before {
      transform: rotate(-45deg);
    }

    &::after {
      transform: rotate(45deg);
    }
  }

  @media screen and (max-width: 768px) {
    display: flex;
  }
}
</style>
