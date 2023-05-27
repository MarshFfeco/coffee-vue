<script setup lang="ts">
  // import { onMounted } from 'vue';

  // import gsap from 'gsap';

  // onMounted(() => {
  //   gsap.from(".glitch", {
  //     delay: 2.5,
  //     duration: 2.5,
  //     ease: "bounce.out",
  //     x: -700
  // })
  // })
</script>

<template>
  <p class="glitch" data-glitch="Is Not Real, Ok?">Is Not Real, Ok?</p>
</template>

<style>
  .glitch {
    position: relative;
    font-size: 80px;
    font-weight: 700;
    line-height: 1.2;
    color: #fff;
    letter-spacing: 5px;
    z-index: 1;
    background-color: black;
    border-radius: 9999px;

    padding-inline: 5px;
    padding-block: 5px;
  }

  .glitch:before,
  .glitch:after {
    padding-inline: 5px;
    padding-block: 5px;
    display: block;
    content: attr(data-glitch);
    position: absolute;
    top: 0;
    right: 0;
    opacity: 0.8;
  }

  .glitch:before {
    animation: glitch-color 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94) both infinite;
    color: #0ff;
    z-index: -1;
  }

  .glitch:after {
    animation: glitch-color 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94) reverse both infinite;
    color: #ff00ff;
    z-index: -2;
  }

  @keyframes glitch-color {
    0% {
      transform: translate(0);
    }

    20% {
      transform: translate(-2px, 2px);
    }

    40% {
      transform: translate(-2px, -2px);
    }

    60% {
      transform: translate(2px, 2px);
    }

    80% {
      transform: translate(2px, -2px);
    }

    to {
      transform: translate(0);
    }
  }
</style>
