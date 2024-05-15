<script lang="ts">
  import { writable } from "svelte/store";
  import { route, type } from "../util/route";
  import { getMovieList } from "../util/tmdb";
  import MovieCard from "./MovieCard.svelte";
  import type { Movie } from "./types/Movie";

  const page = writable(1);
  let totalPages = 0;
  let movies = writable<Movie[]>([]);

  $: getMovieList($type, $route, $page).then((data) => {
    movies.set(data.results);
    totalPages = Math.min(data.total_pages, 500);
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
</script>

<div class="flex flex-grow flex-col items-start h-screen overflow-y-scroll">
  <h1 class="py-4">Watchlist</h1>
  <div class="flex flex-wrap w-full flex-grow">
    {#each $movies as movie}
      <MovieCard {movie} />
    {/each}
  </div>
  <div class="w-full flex justify-center gap-4 p-8">
    <button
      on:click={() => page.set(1)}
      disabled={$page == 1}
      class="disabled:opacity-60 disabled:pointer-events-none text-white px-4 py-2 rounded-md"
      >First</button
    >
    {#if $page > 1}
      <button class="text-white px-4 py-2 rounded-md">{$page - 1}</button>
    {/if}
    <button
      disabled
      class="text-white disabled:opacity-60 disabled:pointer-events-none px-4 py-2 rounded-md"
      >{$page}</button
    >
    {#if $page < totalPages}
      <button
        on:click={() => page.update((value) => value + 1)}
        class="text-white px-4 py-2 rounded-md">{$page + 1}</button
      >
    {/if}
    {#if $page < totalPages && $page == 1}
      <button
        on:click={() => page.update((value) => value + 2)}
        class="text-white px-4 py-2 rounded-md">{$page + 2}</button
      >
    {/if}
    <button
      disabled={$page === totalPages}
      on:click={() => page.set(totalPages)}
      class="text-white disabled:opacity-60 disabled:pointer-events-none px-4 py-2 rounded-md"
      >Last</button
    >
  </div>
</div>
