import { computed, onMounted, onUnmounted, ref, watch } from "vue";

import getScreenWidth from "../ts/getScreenWidth";

import type { Sort, Сourse } from "@/@types";
interface Props {
  filter: string;
  items: Array<Сourse>;
  currentPage: number;
  sort: Sort;
}

export default function useCatalog(props: Props) {
  function sliceIntoChunks(arr: Сourse[], chunkSize: number) {
    const res = [];
    for (let i = 0; i < arr.length; i += chunkSize) {
      const chunk = arr.slice(i, i + chunkSize);
      res.push(chunk);
    }
    return res;
  }

  const newItems = computed(() => {
    let newItems: Сourse[] = props.items;
    if (props.filter) {
      const filter = new RegExp(`(^|[ ])${props.filter.trim()}([ ]|$)`, 'i')
      newItems = props.items.filter(
        (item) => item.title.search(filter) !== -1
      );
    }
    if (props.sort.sortBy === "cost") {
      newItems = newItems.sort((a, b) => a.cost - b.cost);
    } else {
      newItems = newItems.sort((a, b) => {
        const nameA = a.title.toUpperCase();
        const nameB = b.title.toUpperCase();
        if (nameA < nameB) {
          return -1;
        }
        if (nameA > nameB) {
          return 1;
        }
        return 0;
      });
    }
    if (!props.sort.isInDirectOrder) {
      newItems = newItems.reverse();
    }
    return newItems;
  });

  const pageItems = computed(() => {
    return ref(sliceIntoChunks(newItems.value, elementsOnThePage.value));
  });

  const elementsOnThePage = ref(3);
  const numberOfCentralVisiblePages = ref(5);

  function changingScreenSize() {
    elementsOnThePage.value = getScreenWidth(9, 6, 3);
    numberOfCentralVisiblePages.value = getScreenWidth(5, 5, 3);
  }

  onMounted(() => {
    changingScreenSize()
    window.addEventListener("resize", changingScreenSize);
  });

  onUnmounted(() => window.removeEventListener("resize", changingScreenSize));

  return {
    pageItems,
    elementsOnThePage,
    numberOfCentralVisiblePages,
    newItems,
  };
}
