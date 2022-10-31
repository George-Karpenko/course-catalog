<script setup lang="ts">
import usePagination from "@/composables/usePagination";
import { watch } from "vue";

import BasePaginationItem from "./BasePaginationItem.vue";

const props = defineProps<{
  modelValue: number;
  totalRows: number;
  elementsOnThePage: number;
  perPage: number;
  prevText?: string;
  nextText?: string;
}>();

const emit = defineEmits(["update:modelValue"]);

const { countPage, pagesBeforeCurrentPage, pagesAfterCurrentPage } =
  usePagination(props);

function updatecСurrentPage(value: number) {
  emit("update:modelValue", value);
}
watch(
  () => props.elementsOnThePage,
  () => {
    emit("update:modelValue", 1);
  }
);
</script>

<template>
  <nav v-if="totalRows || countPage === 1" aria-label="Page navigation example">
    <ul class="text-bold">
      <BasePaginationItem
        :text="prevText"
        :value="modelValue - 1"
        :disabled="modelValue === 1"
        @click="updatecСurrentPage(modelValue - 1)"
        class="hidden md:flex"
      >
        <i v-if="!prevText" class="icon-nav-left"></i>
      </BasePaginationItem>
      <template v-if="perPage >= countPage" class="text-bold">
        <BasePaginationItem
          v-for="index in countPage"
          :active="index === modelValue"
          :key="index"
          :value="index"
          @click="updatecСurrentPage(index)"
        />
      </template>
      <template v-else>
        <BasePaginationItem
          :value="1"
          :active="modelValue === 1"
          @click="updatecСurrentPage(1)"
        />

        <BasePaginationItem
          v-if="modelValue - pagesBeforeCurrentPage > 2"
          text="..."
        />

        <template v-if="pagesBeforeCurrentPage">
          <BasePaginationItem
            v-for="index in pagesBeforeCurrentPage"
            :key="modelValue - (pagesBeforeCurrentPage - index + 1)"
            :class="
              modelValue - (pagesBeforeCurrentPage - index + 1) === 1 &&
              'hidden'
            "
            :value="modelValue - (pagesBeforeCurrentPage - index + 1)"
            @click="
              updatecСurrentPage(
                modelValue - (pagesBeforeCurrentPage - index + 1)
              )
            "
          />
        </template>
        <BasePaginationItem
          v-if="modelValue !== 1 && modelValue !== countPage"
          :active="true"
          :value="modelValue"
          @click="updatecСurrentPage(modelValue)"
        />
        <template v-if="pagesAfterCurrentPage">
          <BasePaginationItem
            v-for="index in pagesAfterCurrentPage"
            :key="modelValue + index"
            :class="modelValue + index === countPage && 'hidden'"
            :value="modelValue + index"
            @click="updatecСurrentPage(modelValue + index)"
          />
        </template>

        <BasePaginationItem
          v-if="modelValue + pagesAfterCurrentPage < countPage - 1"
          text="..."
        />

        <BasePaginationItem
          :value="countPage"
          :active="countPage === modelValue"
          @click="updatecСurrentPage(countPage)"
        />
      </template>

      <BasePaginationItem
        :text="nextText"
        :value="modelValue + 1"
        :disabled="countPage === modelValue"
        @click="updatecСurrentPage(modelValue + 1)"
        class="hidden md:flex"
      >
        <i v-if="!nextText" class="icon-nav-right"></i>
      </BasePaginationItem>
    </ul>
  </nav>
</template>

<style scoped>
nav {
  display: flex;
  justify-content: center;
}
nav > ul {
  display: flex;
  list-style: theme("listStyleType.none");
  gap: theme("gap.10px");
  margin-top: theme("margin.15px");
}
i {
  font-size: theme("fontSize.xs");
}
</style>
