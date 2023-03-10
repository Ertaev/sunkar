<template>
  <li>
    <router-link :to="dropDownItem.path">
      {{ dropDownItem.title }}
    </router-link>
  </li>
</template>

<script>
export default {
  props: ["dropDownItem"]
}
</script>