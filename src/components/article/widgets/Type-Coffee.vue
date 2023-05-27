<script setup lang="ts">
  const props = defineProps({
    image: { type: String, rquired: true },
  })
</script>

<template>
  <section class="Type-Coffee">
    <div class="Type-Coffee--text">
      <h2><slot name="title"></slot></h2>
      <p><slot name="paragraph"></slot></p>
    </div>
    <div class="Type-Coffee--img">
      <img :src="props.image" alt="">
    </div>
  </section>
</template>

<style scoped lang="scss">
  .Type-Coffee {
    @apply
      w-screen
      h-screen

      grid
      grid-cols-2

      px-14
      py-12;

    &--text {
      @apply justify-center self-center text-gray-50;

      h2 { @apply font-bold text-4xl leading-8; }

      p { @apply pt-6 font-semibold text-2xl leading-7; }
    }
    &--img {
      @apply justify-center self-center;
    }
  }
</style>
