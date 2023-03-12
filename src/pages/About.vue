<template>
  <MainSlot>
    <template #header-bg>
      <img src="@/assets/images/bg.png" alt="bg" />
    </template>

    <template #title> О компании </template>

    <template #subtitle>
      <div class="desc">
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

        <p>
          При создании товарищества было принято 15 участников КТ, а уставной
          капитал составлял 10 000 000 тенге. К 2020 году уставной капитал
          увеличился до 339 510 000 тенге, а число участников составляет 128.
        </p>
      </div>
    </template>
  </MainSlot>
</template>

<script>
import MainSlot from "@/components/MainSlot.vue";

export default {
  components: { MainSlot },
};
</script>

<style lang="scss">
.about {
  .header-bg {
    &::before {
      background: #424242;
    }
  }

  img {
    position: relative;
    z-index: 1;
  }

  @media screen and (max-width: 992px) {
    height: auto;
    position: relative;
    height: 100%;
    padding-bottom: 60px;
  }
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
</style>
