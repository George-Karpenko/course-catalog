<script setup lang="ts">
import TheCourses from "./components/TheCourses.vue";

</script>

<template>
  <Suspense>
    <TheCourses/>
    <template #fallback> Loading... </template>
  </Suspense>
</template>

