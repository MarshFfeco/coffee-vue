<script setup lang="ts">
  import { onMounted } from 'vue';

  import gsap from 'gsap';

  onMounted(() => {
    gsap.from(".watter", {
      duration: 2,
      y: "200",
      ease: "slow(0.7, 0.7, false)"
  })
  })
</script>

<template>
  <div class="watter">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 1440 320"
    >
      <path
        fill="#FF0055"
        fill-opacity="1"
        d="M0,128L40,144C80,160,160,192,240,224C320,256,400,288,480,293.3C560,
        299,640,277,720,250.7C800,224,880,192,960,202.7C1040,213,1120,267,1200,
        266.7C1280,267,1360,213,1400,186.7L1440,160L1440,320L1400,320C1360,320,
        1280,320,1200,320C1120,320,1040,320,960,320C880,320,800,320,720,320C640,
        320,560,320,480,320C400,320,320,320,240,320C160,320,80,320,40,320L0,320Z"
      >
      </path>
    </svg>
  </div>
</template>

<style scoped>
  .watter {
    @apply
      w-full
      absolute

      bottom-0;
  }
</style>
