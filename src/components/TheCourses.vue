<script setup lang="ts">
import type { Sort, Сourse } from "@/@types";
import type { Ref } from "vue";

import { SortBy } from "@/@types";
import { ref, watch, onMounted } from "vue";

import TheHeader from "./TheHeader.vue";
import TheCatalog from "./TheCatalog.vue";
import { getCity } from "../api";

/*
 *- api
 *- сохранение данных
 *- правильное разбитие данных на компоненты
 *- передача данных
 * добить верстку
 */

const currentPage = ref(parseInt(localStorage.currentPage) || 1);
const main = ref<HTMLInputElement | null>(null);
const filter = ref(localStorage.filter || "");

const sort: Ref<Sort> = ref(
  localStorage.sort
    ? JSON.parse(localStorage.sort)
    : {
        sortBy: SortBy.Title,
        isInDirectOrder: true,
      }
);
const items: Ref<Array<Сourse>> = ref(await getCity().then((result) => result));

onMounted(() => {
  watch(
    () => currentPage.value,
    (currentPage) => {
      main.value?.scrollIntoView({ behavior: "smooth" });
      localStorage.setItem("currentPage", currentPage.toString());
    }
  );
});

watch(
  () => filter.value,
  (filter) => {
    currentPage.value = 1;
    localStorage.setItem("filter", filter);
  }
);

watch(
  () => sort.value,
  (sort) => {
    currentPage.value = 1;
    localStorage.setItem("sort", JSON.stringify(sort));
  }
);
</script>

<template>
  <TheHeader v-model:filter="filter" title="Каталог курсов"></TheHeader>
  <main class="container" ref="main">
    <TheCatalog
      v-model:sort="sort"
      v-model:currentPage="currentPage"
      :filter="filter"
      :items="items"
    ></TheCatalog>
  </main>
</template>
