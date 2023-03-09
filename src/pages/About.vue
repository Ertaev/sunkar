<template>
  <main>
    <div class="header-section about">
      <!-- <div class="header-bg">
        <img src="@/assets/images/9.jpg" alt="bg">
      </div> -->

      <div class="container">
        <div class="main">
          <h1 class="title">
            О компании
          </h1>

          <div class="desc">
            <p>
              ТОО «КТ «Тобыл» было организовано 07 августа 2003 года. Основная цель деятельности товарищества – удовлетворение потребностей участников товарищества в финансовых ресурсах, укрепление и развитие товарищества как самостоятельного финансового института. Основным направлением деятельности КТ является кредитование сельхозтоваропроизводителей Костанайской области, выделяя кредитные средства для участников КТ как в рамках государственных программ поддержки сельского хозяйства, так из собственных свободных средств.
            </p>
  
            <p>
              При создании товарищества было принято 15 участников КТ, а уставной капитал составлял 10 000 000 тенге.  К 2020 году уставной капитал увеличился до 339 510 000 тенге, а число участников составляет 128.
            </p>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>

<style lang="scss">
.header-section {
  &.about {
    background: center / contain no-repeat url(@/assets/images/bg.png), #424242 !important;
  }

  .desc {
    display: flex;
    flex-direction: column;
    gap: 20px;
    text-align: justify;

    p {
      font-size: 18px;
      line-height: 22px;
      color: #fff;
    }
  }
}
</style>