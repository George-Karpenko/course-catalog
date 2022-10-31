<script setup lang="ts">
import type { Sort, Сourse } from "@/@types";

import CatalogHeader from "./CatalogHeader.vue";
import BasePagination from "./BasePagination.vue";
import CatalogItem from "./CatalogItem.vue";
import useCatalog from "@/composables/useCatalog";

interface Props {
  filter: string;
  items: Array<Сourse>;
  currentPage: number;
  sort: Sort;
}
const props = defineProps<Props>();
const emit = defineEmits(["update:sort", "update:currentPage"]);

const { pageItems, elementsOnThePage, numberOfCentralVisiblePages, newItems } =
  useCatalog(props);

function updateSort(value: Sort) {
  emit("update:sort", value);
}
function updateCurrentPage(value: Sort) {
  emit("update:currentPage", value);
}
</script>

<template>
    <CatalogHeader
      :sort="sort"
      :numberOfResults="newItems.length"
      @update:sort="updateSort($event)"
    ></CatalogHeader>
    <div class="cards">
      <CatalogItem
        v-for="item in pageItems.value[currentPage - 1]"
        :key="item.id"
        :item="item"
      ></CatalogItem>
    </div>
    <BasePagination
      :modelValue="currentPage"
      :totalRows="newItems.length"
      :perPage="numberOfCentralVisiblePages"
      :elementsOnThePage="elementsOnThePage"
      @update:modelValue="updateCurrentPage($event)"
    ></BasePagination>
</template>

<style scoped>
.container {
  margin: theme("margin.15px") theme("margin.auto") theme("margin.60px");
}
.cards {
  display: grid;
  grid-template-columns: theme("gridTemplateColumns.1");
  gap: theme("gap.30px");
  margin-top: theme("margin.15px");
  margin-bottom: theme("margin.30px");
}
@screen md {
  .cards {
    grid-template-columns: theme("gridTemplateColumns.2");
  }
}
@screen xl {
  .cards {
    grid-template-columns: theme("gridTemplateColumns.3");
  }
}
</style>
