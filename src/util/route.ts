import { writable } from "svelte/store";

export enum Route {
  WATCHLIST = "watchlist",
  TOP_RATED = "top_rated",
  RECENT = "now_playing",
}

export const ListTitles: Record<Route, string> = {
  watchlist: "Watchlist",
  top_rated: "Top rated",
  now_playing: "Currently showing",
};

export const ListIcons: Record<Route, string> = {
  watchlist: "Visibility",
  top_rated: "Star",
  now_playing: "Live_Tv",
};

export const route = writable<Route>(Route.RECENT);
export const type = writable<"tv" | "movie">("movie");
