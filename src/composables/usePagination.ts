import { computed } from "vue";

interface Props {
  modelValue: number;
  totalRows: number;
  perPage: number;
  elementsOnThePage: number
}

export default function useCatalog(props: Props) {
  const countPage = computed(() => Math.ceil(props.totalRows / props.elementsOnThePage));
  const pagesBeforeCurrentPage = computed(() => {
    if (props.modelValue - Math.floor(props.perPage / 2) <= 0) {
        return (
          Math.floor(props.perPage / 2) +
          props.modelValue -
          Math.floor(props.perPage / 2) -
          1
        );
    }
    if (
      props.modelValue - Math.floor(props.perPage / 2) > 0 &&
      countPage.value - props.modelValue - Math.floor(props.perPage / 2) < 0
    ) {
      return (
        Math.floor(props.perPage / 2) -
        (countPage.value - props.modelValue - Math.floor(props.perPage / 2))
      );
    }
    return Math.floor(props.perPage / 2);
  });
  const pagesAfterCurrentPage = computed(() => {
    if (props.modelValue - Math.floor(props.perPage / 2) <= 0) {
        return (
          Math.floor(props.perPage / 2) +
          Math.abs(props.modelValue - Math.floor(props.perPage / 2) - 1)
        );
    }
    if (
      props.modelValue - Math.floor(props.perPage / 2) > 0 &&
      countPage.value - props.modelValue - Math.floor(props.perPage / 2) < 0
    ) {
      return (
        Math.floor(props.perPage / 2) +
        (countPage.value - props.modelValue - Math.floor(props.perPage / 2))
      );
    }

    return Math.floor(props.perPage / 2);
  });
  

  return {
    countPage,
    pagesBeforeCurrentPage,
    pagesAfterCurrentPage,
  };
}
