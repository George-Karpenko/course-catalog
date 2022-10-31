<script setup lang="ts">
import { SortBy } from "@/@types";
import type { Sort } from "@/@types";
import { computed, onMounted, ref } from "vue";

const props = defineProps<{
  numberOfResults: number;
  sort: Sort;
}>();

const emit = defineEmits(["update:sort"]);

const sort = ref({ ...props.sort });
const pressed = ref("");
const isOpenSortingList = ref(false);
const sortMobile = ref<HTMLInputElement | null>(null);

const sortClass = computed(() => {
  let sortClass: any = {};
  Object.values(SortBy).forEach((sortName: SortBy) => {
    if (sort.value.sortBy === sortName && sort.value.isInDirectOrder) {
      sortClass[sortName] = "icon-arrow-down ";
    }
    if (sort.value.sortBy === sortName && !sort.value.isInDirectOrder) {
      sortClass[sortName] = "icon-arrow-up ";
    }
    if (pressed.value === sortName) {
      sortClass[sortName] += "pressed";
      return;
    }
    if (sort.value.sortBy === sortName) {
      sortClass[sortName] += "active";
    }
  });
  return sortClass;
});

function sortPressed(sortName: SortBy) {
  pressed.value = sortName;
  if (sort.value.sortBy === sortName) {
    sort.value.isInDirectOrder = !sort.value.isInDirectOrder;
  } else {
    sort.value.sortBy = sortName;
    sort.value.isInDirectOrder = true;
  }
}

function sortNoPressed() {
  pressed.value = "";
  sort.value = { ...props.sort };
}

function sortActive() {
  pressed.value = "";
  emit("update:sort", sort.value);
}

function newSort(newSort: Sort) {
  sort.value = newSort;
  isOpenSortingList.value = false;
  emit("update:sort", newSort);
}

onMounted(() => {
  document.addEventListener("click", triggerSortingList);
  function triggerSortingList(e: Event) {
    let el = sortMobile.value;
    let target = e.target;
    if (el !== target && !el?.contains(target as HTMLElement)) {
      isOpenSortingList.value = false;
      return
    }
    isOpenSortingList.value = !isOpenSortingList.value
  }
});
</script>

<template>
  <div class="catalog-header caption">
    <p>{{ $t("numberOfResults", numberOfResults) }}</p>
    <div>
      <span>Сортировать по:</span>
      <span
        v-for="sortName in SortBy"
        :class="sortClass[sortName]"
        @mousedown="sortPressed(sortName)"
        @mouseup="sortActive()"
        @mouseleave="sortNoPressed()"
        class="sort cursor-pointer hidden md:block"
      >
        {{ $t(`sortBy.${sortName}`) }}
      </span>
      <div class="sortMobile md:hidden" ref="sortMobile">
        <span class="cursor-pointer">
          {{ $t(`sortBy.${sort.sortBy}`) }}
        </span>
        <i :class="sortClass[sort.sortBy]"></i>
        <ul v-if="isOpenSortingList">
          <template v-for="sortName in SortBy">
            <li
              @click="newSort({ sortBy: sortName, isInDirectOrder: true })"
              class="flex cursor-pointer"
            >
              <span>
                {{ $t(`sortBy.${sortName}`) }}
              </span>
              <i class="icon-arrow-down"></i>
            </li>
            <li
              @click="newSort({ sortBy: sortName, isInDirectOrder: false })"
              class="flex cursor-pointer"
            >
              <span>
                {{ $t(`sortBy.${sortName}`) }}
              </span>
              <i class="icon-arrow-up"></i>
            </li>
          </template>
        </ul>
      </div>
    </div>
  </div>
</template>

<style scoped>
.catalog-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: theme("gap.15px");
}

.catalog-header > div {
  gap: theme("gap.15px");
  display: flex;
  margin-right: 8px;
}

.sortMobile {
  color: theme("colors.dark");
  position: relative;
  margin-right: -8px;
}
.sortMobile ul {
  position: absolute;
  top: calc(100% + 5px);
  right: 0;
  background-color: theme("colors.white");
  box-shadow: theme("boxShadow.sort-list-mobile");
  border-radius: theme("borderRadius.DEFAULT");
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  padding: theme("padding.12px");
  gap: theme("gap.10px");
}
.sort {
  color: theme("colors.blue");
  text-decoration: dashed underline theme("colors.blue");
  text-underline-offset: theme("textUnderlineOffset.5");
  text-decoration-thickness: theme("textDecorationThickness.1");
  transition-property: theme("transitionProperty.all");
  transition-timing-function: theme("transitionTimingFunction.[in-out]");
  transition-duration: theme("transitionDuration.300");
  margin-right: 0;
  position: relative;
}
.sort:hover,
.sort.active:hover {
  color: theme("colors.red");
  text-decoration-color: theme("colors.red");
  margin-right: 0;
}
.sort:hover::before,
.sort.active:hover::before {
  display: none;
}

.sort.pressed:hover {
  color: theme("colors.[red-dark]");
  text-decoration-color: theme("colors.transparent");
  margin-right: 8px;
}
.sort.active::before {
  color: theme("colors.[red]");
}
.sort.active {
  color: theme("colors.dark");
  text-decoration-color: theme("colors.transparent");
  margin-right: 8px;
}
.sort.active::before,
.sort.pressed:hover::before {
  display: inline-block;
}

.sort::before,
i {
  font-size: 7px;
}
.sort::before {
  position: absolute;
  right: -8px;
  bottom: 2px;
  margin: auto;
  display: inline-block;
  margin-left: theme("margin.[-1px]");
  transition-property: theme("transitionProperty.transform");
  transition-timing-function: theme("transitionTimingFunction.[in-out]");
  transition-duration: theme("transitionDuration.1000");
}
i {
  color: theme("colors.red");
  margin-top: 3px;
  margin-left: 2px;
}
@screen md {
  .sort::before {
    right: -8px;
    bottom: 4px;
  }
}
</style>
