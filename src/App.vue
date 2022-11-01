<script setup lang="ts">
import TheCourses from "./components/TheCourses.vue";
</script>

<template>
  <Suspense>
    <TheCourses />
    <template #fallback>
      <div class="flex justify-center items-center h-screen">
        <p>{{ $t("loading") }}...</p>
      </div>
    </template>
  </Suspense>
</template>
