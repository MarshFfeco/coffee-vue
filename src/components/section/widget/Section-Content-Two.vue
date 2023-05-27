<script setup lang="ts">
</script>

<template>
  <div class="Section-Main-Content">
    <div class="Section-Main-Content--Texte">
      <h2>With Coffee</h2>
    </div>

    <figure class="Section-Main-Content--Imgs figu_1"><img src="/images/happy.png" alt=""></figure>
  </div>
</template>

<style scoped lang="scss">
  .Section-Main-Content {
    width: 100%;

    display: grid;
    grid-template-areas: "texte fig1"
                         "texte fig2";

    row-gap: 50px;

    &--Texte {
      grid-area: texte;
      justify-self: center;
      color: #FF0055;

      h2 {
        position: sticky;
        top: 50%;
        font-size: 2.25rem/* 36px */;
        line-height: 60px;
        font-weight: 700;
      }
    }

    &--Imgs {
      @apply h-screen flex justify-center items-center;

      img {
        max-width: 413px;
      }
    }
  }

  .figu_1 {
    grid-area: fig1;
  }

  .figu_2 {
    grid-area: fig2;
  }
</style>
