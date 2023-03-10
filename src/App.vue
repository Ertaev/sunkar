<template>
  <Header :navLinks="navLinks" />

  <main>
    <router-view />
  </main>

  <Footer :navLinks="navLinks" />
</template>

<script>
import Header from "@/layout/Header.vue"
import Footer from "@/layout/Footer.vue"

export default {
  name: 'App',
  components: {
    Header, Footer
  },
  data() {
    return {
      navLinks: [
        {
          path: "/about",
          title: "О компании"
        },
        {
          path: "/",
          title: "Заемщику"
        },
        {
          path: "/",
          title: "Контакты",
          dropDownList: [
            {
              path: "/",
              title: "Кредитные товарищества"
            }
          ]
        },
      ]
    }
  }
}
</script>

<style lang="scss">
</style>
