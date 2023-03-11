<template>
  <li class="menu__item" :class="{ dropdown: navLink.dropDownList }">
    <router-link :to="navLink.path" class="menu__link">
      {{ navLink.title }}
    </router-link>

    <DropDownList
      v-if="navLink.dropDownList"
      :dropDownList="navLink.dropDownList"
    />
  </li>
</template>

<script>
import DropDownList from "./DropDownList.vue";

export default {
  components: { DropDownList },
  props: ["navLink"],
};
</script>

<style lang="scss">
.menu {
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

    @media screen and (max-width: 768px) {
      text-align: center;
    }
  }

  &__link {
    font-size: 18px;
  }
}

.dropdown {
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 40px;
}
</style>
