<script setup lang="ts">
import { ref, computed, Ref, onMounted } from 'vue';
import gsap from 'gsap';

import ListBar from './widget/Navbar-List.vue'

const isAni: Ref<string> = ref('');
const IsAni: Ref<string> = computed({
  get() { return isAni.value },
  set(val) { isAni.value = val }
})

function Over(): void {
  IsAni.value = 'wrench';
}

function Out(): void {
  IsAni.value = '';
}

onMounted((): void => {
  gsap.from('.navbar--icon', {
    duration: 2,
    ease: "elastic.out(1, 0.3)",
    x: -200
  })
  gsap.from(".navbar", {
    ease: "circ",
    duration: 2.5,
    width: "0"
  })
})
</script>

<template>
  <nav class="navbar">
    <div class="navbar--icon">
      <a href="#home">
        <v-icon
          name="co-coffeescript"
          fill="#FF0055"
          @mouseover="Over"
          @mouseout="Out"
          :animation="isAni"
          scale="1.5"
        />
      </a>
    </div>
    <ListBar />
  </nav>
</template>

<style scoped lang="scss">
  .navbar {
    @apply
      flex
      justify-between
      items-center

      mt-4
      mx-5
      px-5
      py-2

      border-2
      border-cof-pink

      rounded-full

      text-gray-950

      bg-white;
  }
</style>
