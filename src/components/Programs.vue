<template>
  <div class="programs">
    <div class="container">
      <h2>
        ПРОГРАММЫ КРЕДИТОВАНИЯ
      </h2>

      <div class="programs-list">
        <router-link to="#" class="programs-item">
          <div class="programs-img">
            <img src="@/assets/images/dala.png" alt="КЕҢ ДАЛА">
          </div>

          <p class="programs-title">
            КЕҢ ДАЛА
          </p>
        </router-link>

        <router-link to="#" class="programs-item">
          <div class="programs-img">
            <img src="@/assets/images/agro.png" alt="агробизнес">
          </div>

          <p class="programs-title">
            агробизнес
          </p>
        </router-link>

        <router-link to="#" class="programs-item">
          <div class="programs-img">
            <img src="@/assets/images/isker.png" alt="Іскер">
          </div>

          <p class="programs-title">
            Іскер
          </p>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="scss">
.programs {
  padding: 60px 0;
  background: #f8f7f5;

  &-list {
    display: flex;
    gap: 30px;

    @media screen and (max-width: 992px) {
      flex-direction: column;
    }

    @media screen and (max-width: 768px) {
      gap: 20px;
    }
  }

  &-item {
    padding: 25px;
    display: flex;
    align-items: center;
    background-color: #ffffff;
    transition: 0.5s ease;
    border-radius: 5px;
    width: 100%;
    color: #141414;
    gap: 24px;

    &:hover {
      background-color: #09994a;
      box-shadow: 0 0 70px 2px rgb(9 153 74 / 50%);
      color: #fff;

      img {
        filter: invert(1);
      }
    }
  }

  &-img {
    width: 40px;
    height: 40px;

    img {
      height: 100%;
      object-fit: contain;
      transition: .5s ease;
    }
  }

  &-title {
    font-size: 16px;
    font-weight: 500;
    line-height: 1.2em;
    text-transform: uppercase;
  }
}
</style>