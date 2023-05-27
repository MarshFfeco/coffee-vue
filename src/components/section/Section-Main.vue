<script setup lang="ts">
  import SectionContent from "./widget/Section-Content.vue";
  import SectionContentTwo from "./widget/Section-Content-Two.vue";
</script>

<template>
  <div class="Section-Main">
    <SectionContent />
    <SectionContentTwo />
  </div>
</template>

<style scoped>
  .Section-Main {
    @apply px-5;
  }
</style>

