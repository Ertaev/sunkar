<template>
  <nav class="menu">
    <div class="menu__phone">
      <p>5353</p>
    </div>

    <ul class="menu__list">
      <MenuItem
        v-for="(navLink, index) of navLinks"
        :key="index"
        :navLink="navLink"
      />
    </ul>

    <div class="menu__search">
      <i class="fa fa-search"></i>
    </div>

    <div class="menu__lang">
      <p>RU</p>
    </div>
  </nav>
</template>

<script>
import MenuItem from "./MenuItem.vue";

export default {
  props: ["navLinks"],
  components: { MenuItem },
};
</script>

<style lang="scss">
.menu {
  display: flex;
  align-items: center;
  gap: 20px;

  // & > *:not(:nth-child(2)) {
  & > * {
    color: #fff;
    cursor: pointer;
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
  }

  &__item {
    &:hover {
      color: #cecece;
    }
    &:hover .dropdown-wrapper {
      visibility: visible;
      opacity: 1;
      z-index: 1;
      transform: translateY(0);
    }
  }

  &__link {
    font-size: 18px;
  }

  .dropdown {
    position: relative;
  }

  &__search {
    margin-left: auto;

    &:hover {
      color: #cecece;
    }
  }
  &__lang {
    &:hover {
      color: #cecece;
    }
  }
}
</style>
