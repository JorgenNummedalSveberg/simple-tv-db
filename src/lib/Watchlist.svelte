<script lang="ts">
  import { writable } from "svelte/store";
  import { getWatchlist, total_pages, watchlist } from "../util/watchlist";
  import MovieCard from "./MovieCard.svelte";
  import Pagination from "./Pagination.svelte";
  import type { Movie } from "./types/Movie";

  const page = writable(1);
  let movies: Movie[] = [];

  watchlist.subscribe((_) => (movies = getWatchlist($page)));
  page.subscribe((value) => (movies = getWatchlist(value)));
</script>

<div class="flex flex-grow flex-col items-start h-screen overflow-y-scroll">
  <h1 class="py-4">Watchlist</h1>
  <div class="flex flex-wrap w-full flex-grow items-start">
    {#each movies as movie}
      <MovieCard {movie} />
    {/each}
  </div>
  <Pagination total_pages={$total_pages} {page} />
</div>
