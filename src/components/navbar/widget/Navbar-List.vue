<script setup lang="ts">
import { onMounted } from 'vue'
import gsap from 'gsap';

function MOver(cls: string) {
  gsap.to(cls, {
    duration: .5,
    opacity: "1",
    width: "100%",
    backgroundColor: "#FF0055",
    ease: "Elastic.easeOut(0.25)",
  })
}

function MOut(cls: string) {
  gsap.to(cls, {
    duration: 2,
    opacity: "0",
    left: "0",
    width: '5%',
    ease: "Elastic.easeOut(0.25)"
  })
}

onMounted(() => {
  gsap.from('.navbar--menu--content', {
    duration: 2,
    ease: "back.out(1.7)",
    y: -200,
    stagger: .1
  })
})
</script>

<template>
    <ul class="navbar--menu">
    <li class="navbar--menu--content" @mouseover="MOver('.one')" @mouseleave="MOut('.one')">
      <a href="#about" class="link" data-nav="About">About</a>
      <div class="pink one"></div>
    </li>
    <li class="navbar--menu--content" @mouseover="MOver('.two')" @mouseleave="MOut('.two')">
      <a href="#coffee" class="link" data-nav="Coffee" >Coffee</a>
      <div class="pink two"></div>
    </li>
  </ul>
</template>

<style scoped lang="scss">
  .navbar--menu {
    @apply
      w-1/4

      flex
      justify-end

      text-gray-950
      text-lg
      font-semibold;

    &--content {
      @apply
        inline-block
        relative

        px-5

        text-gray-950

        cursor-pointer;

      &:hover .link::before { width: 100%; }
    .pink {
      opacity: 0;
      width: 5%;
      height: 100%;

      position: absolute;

      top: 50%;
      left: 0;

      z-index: -1;

      transform: translatey(-50%);

      @apply bg-cof-pink rounded-full;
    }
  }
  }

  .link  {
    &::before {
      content: attr(data-nav);
      position: absolute;
      color: white;
      width: 0%;
      overflow: hidden;
      transition: .5s;
    }
  }
</style>
