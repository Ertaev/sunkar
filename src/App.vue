<template>
  <Header :navLinks="navLinks" />

  <main>
    <router-view />
  </main>

  <Contacts />

  <Footer :navLinks="navLinks" />
</template>

<script>
import Header from "@/layout/Header.vue";
import Contacts from "@/components/Contacts.vue";
import Footer from "@/layout/Footer.vue";

export default {
  name: "App",
  components: {
    Header,
    Contacts,
    Footer,
  },
  data() {
    return {
      navLinks: [
        {
          path: "/about",
          title: "О компании",
        },
        {
          path: "/",
          title: "Заемщику",
        },
        {
          path: "/",
          title: "Контакты",
          dropDownList: [
            {
              path: "/",
              title: "Кредитные товарищества",
            },
          ],
        },
      ],
    };
  },
};
</script>
