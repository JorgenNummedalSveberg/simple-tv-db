import { writable } from "svelte/store";
import type { Movie } from "../lib/types/Movie";

let _watchList: Movie[] = [];
export const watchlist = writable<Record<number, Movie | undefined>>(
  JSON.parse(localStorage.getItem("watchlist") ?? "{}")
);

export const total_pages = writable(1);
watchlist.subscribe((value) => {
  _watchList = Object.values(value) as Movie[];
  total_pages.set(Math.ceil(_watchList.length / 20));
});

export const getWatchlist = (page: number): Movie[] => {
  const list = _watchList.slice(20 * (page - 1), 20 * page);
  console.log(list);
  return list;
};
