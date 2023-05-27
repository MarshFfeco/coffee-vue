<script setup lang="ts">
  import { onMounted } from 'vue';

  import FGlitch from './widget/F-glitch.vue'
  import TWater from '../transition/T-Water.vue';

  import gsap from 'gsap';

  onMounted(() => {
    let chars = gsap.utils.toArray('.char');

    let tl = gsap.timeline();

    tl.from(chars, {
      duration: 1.5,
      ease: "back.out(1.7)",
      y: 500,
      stagger: .2
    })
    tl.from(".FGlitch", {
      duration: 2.5,
      ease: "bounce.out",
      x: -700
    })
  })

  document.addEventListener("mousemove", function(event) {
    let width: number = window.innerWidth,
    height: number = window.innerHeight,
    positionX: number = (event.clientX/width) - 0.55,
    positionY: number = (event.clientY/height) - 0.55;

    gsap.to(".magic", {
      rotateY: positionX * 50,
      rotateX: -positionY * 50,
      ease: "slow(0.7, 0.7, false)"
  })
})
</script>

<template>
  <div class="relative">
    <section class="First">
      <div class="First--title">
        <FGlitch class="FGlitch" />
        <h2>
          <div class="char">M</div>
          <div class="char">y</div>
          <div class="char">_</div>
          <div class="char">S</div>
          <div class="char">p</div>
          <div class="char">e</div>
          <div class="char">c</div>
          <div class="char">i</div>
          <div class="char">a</div>
          <div class="char">l</div>
          <div class="char">_</div>
          <div class="char">C</div>
          <div class="char">o</div>
          <div class="char">f</div>
          <div class="char">f</div>
          <div class="char">e</div>
          <div class="char">e</div>
        </h2>
      </div>

      <figure class="First--image">
        <img class="magic" src="/images/coffee-beans-levitate-white_2.jpg" alt="">
      </figure>

    </section>
    <TWater />
  </div>
</template>

<style scoped lang="scss">
  .relative {
    @apply w-full h-full;
  }
  .First {
    @apply
      w-full
      h-full

      grid
      grid-cols-2;

      @media (max-width: 900px) {
        @apply grid-cols-1 grid-rows-2;
      }

      &--title {
        @apply justify-self-center self-center;
        h2 {
          @apply
            text-4xl
            font-semibold;
        }
        p { @apply text-xs text-right; }
      }

      &--image {
        @apply px-4 py-4 justify-self-center self-center;

        @media (max-width: 900px) {
          display: flex;
          justify-content: center;
          align-items: center;

          img {
            width: 90%;
          }
        }
      }
  }

  .char {
    display: inline-block;
  }
</style>
