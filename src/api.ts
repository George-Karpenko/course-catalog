import type { Сourse } from "./@types";

export async function getCity(): Promise<Array<Сourse>> {
  let items: Array<Сourse> = [];
  await fetch("/couses/")
    .then((response) => {
      if (!response.ok) throw Error(response.statusText);
      return response.json();
    })
    .then((json) => {
      items = json;
    });
  return items;
};
