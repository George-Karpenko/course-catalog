export enum SortBy {
  Cost = "cost",
  Title = "title",
}

export type Sort = {
  sortBy: SortBy,
  isInDirectOrder: boolean,
};

