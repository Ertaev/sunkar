<template>
  <li
    class="menu__item"
    :class="{ dropdown: navLink.dropDownList }"
  >
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
  props: ["navLink"]
}
</script>