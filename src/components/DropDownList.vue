<template>
  <div class="dropdown-wrapper">
    <ul class="accorion">
      <DropDownItem 
        v-for="(dropDownItem, index) of dropDownList"
        :key="index"
        :dropDownItem="dropDownItem"
      />
    </ul>
  </div>
</template>

<script>
import DropDownItem from './DropDownItem.vue';

export default {
    props: ["dropDownList"],
    components: { DropDownItem }
};
</script>

<style lang="scss">
.dropdown-wrapper {
  position: absolute;
  opacity: 0;
  visibility: hidden;
  right: 0;
  top: 10px;
  transform: translateY(5px);
  transition: all 0.3s ease;

  ul {
    background: #fff;
    border-radius: 8px;
    padding: 14px 0;
    width: max-content;
    box-shadow: 3px 10px 30px rgb(35 79 191 / 15%);
    transform: translateY(10px);
    transition: all 0.3s ease;
    margin-top: 25px;
  }

  li a {
    color: #333;
    display: block;
    padding: 12px 24px;

    &:hover {
      color: #000;
    }
  }
}
</style>
