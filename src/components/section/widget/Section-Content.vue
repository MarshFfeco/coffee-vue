<script setup lang="ts">
  import { onMounted } from "vue";

  import gsap from 'gsap';

  gsap.registerPlugin(ScrollTrigger);

  onMounted(() => {
    const imgs = gsap.utils.toArray('.Section-Main-Content--Imgs');

    AppearImgs(imgs);
  })

  function AppearImgs(imgs: any): void {
    for(let i = 0; i < imgs.length; i++) {
      let img: any = imgs[i];

      gsap.from(img, {
      x: "700",
      opacity: "0",
      ease: "none",
      duration: 1.5,
      scrollTrigger: {
        trigger: imgs[i],
        start: "10% center",
        end: "10% 100px",
        scrub: true,
        markers: true
      }
    })
    }
  }
</script>

<template>
  <div class="Section-Main-Content">
    <div class="Section-Main-Content--Texte">
      <h2>Without Coffee</h2>
    </div>

    <figure class="Section-Main-Content--Imgs figu_1"><img src="/images/sad_1.png" alt=""></figure>
    <figure class="Section-Main-Content--Imgs figu_2"><img src="/images/sad_2.png" alt=""></figure>
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
        @apply h-4/5;
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
