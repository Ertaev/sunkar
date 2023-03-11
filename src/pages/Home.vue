<template>
  <div>
    <Main />

    <Programs />

    <About />

    <Steps />

    <Contacts />
  </div>
</template>

<script>
import Main from "@/components/Main.vue";
import Programs from "@/components/Programs.vue";
import About from "@/components/About.vue";
import Steps from "@/components/Steps.vue";
import Contacts from "@/components/Contacts.vue";

export default {
  components: {
    Main,
    Programs,
    Steps,
    About,
    Contacts,
  },
};
</script>

<!-- <swiper
  :slides-per-view="1"
  :autoplay="true"
  :loop="true"
  :modules="modules"
>
  <swiper-slide>
    <img src="@/assets/images/7.jpg" alt="bg">
  </swiper-slide>
  <swiper-slide>
    <img src="@/assets/images/8.jpg" alt="bg">
  </swiper-slide>
  <swiper-slide>
    <img src="@/assets/images/9.jpg" alt="bg">
  </swiper-slide>
</swiper> -->
