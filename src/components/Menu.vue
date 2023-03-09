<template>
  <nav class="menu">
    <div class="menu__phone">
      <p>5353</p>
    </div>

    <ul class="menu__list">
      <li
        class="menu__item"
        v-for="navLink of navLinks"
        :class="{ dropdown: navLink.dropDownList }"
      >
        <router-link :to="navLink.path" class="menu__link">
          {{ navLink.title }}
        </router-link>

        <div v-if="navLink.dropDownList" class="dropdown-wrapper">
          <ul>
            <li v-for="dropDownItem of navLink.dropDownList">
              <router-link :to="dropDownItem.path">
                {{ dropDownItem.title }}
              </router-link>
            </li>
          </ul>
        </div>
      </li>
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
export default {
  props: ["navLinks"],
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

    &-wrapper {
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
