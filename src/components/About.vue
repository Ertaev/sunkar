<template>
  <div class="about">
    <div class="container about__container">
      <div
        class="left"
        data-aos="fade-right"
        data-aos-delay="200"
        data-aos-duration="1000"
      >
        <h2>О компании</h2>

        <p>
          ТОО «КТ «Тобыл» было организовано 07 августа 2003 года. Основная цель
          деятельности товарищества – удовлетворение потребностей участников
          товарищества в финансовых ресурсах, укрепление и развитие товарищества
          как самостоятельного финансового института. Основным направлением
          деятельности КТ является кредитование сельхозтоваропроизводителей
          Костанайской области, выделяя кредитные средства для участников КТ как
          в рамках государственных программ поддержки сельского хозяйства, так
          из собственных свободных средств.
        </p>
      </div>

      <div
        class="right"
        data-aos="fade-left"
        data-aos-delay="200"
        data-aos-duration="1000"
      >
        <img src="@/assets/images/1.png" alt="about" />
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.about {
  padding: 60px 0;

  &__container {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 30px;
    
    @media screen and (max-width: 992px) {
      flex-direction: column;
    }
  }

  .left {
    width: 50%;

    @media screen and (max-width: 992px) {
      width: 100%;
    }
  }

  .right {
    width: 50%;

    @media screen and (max-width: 992px) {
      width: 100%;
    }
  }
}
</style>
