<script setup lang="ts">
import NavBar from "./components/navbar/Navbar-Main.vue"
import First from "./components/first/First-Main.vue"
import ArticleMain from "./components/article/Article-main.vue";
import SectionMain from "./components/section/Section-Main.vue";
import FooTerMain from "./components/footer/Footer-Main.vue";
</script>

<template>
  <header>
    <NavBar />
  </header>

  <main id="home">
    <First />
  </main>

  <article id="about">
    <ArticleMain />
  </article>

  <div id="coffee" class="sections">
    <SectionMain />
  </div>

  <footer>
    <FooTerMain />
  </footer>
</template>

<style scoped lang="scss">
  header {
    width: 100%;

    position: fixed;

    z-index: 1000;
  }

  main {
    width: 100%;
    height: 100vh;
  }

  .sections {
    width: 100%;
    height: 200%;
  }
  footer {
    width: 100%;
    height: 100vh;
  }
</style>
