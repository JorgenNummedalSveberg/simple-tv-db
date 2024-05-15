<script lang="ts">
  import { watchlist } from "../util/watchlist";
  import type { Movie } from "./types/Movie";

  export let movie: Movie;

  $: isWatching = $watchlist[movie.id] !== undefined;

  const toggleWatching = () => {
    if (isWatching) {
      delete $watchlist[movie.id];
      watchlist.set($watchlist);
    } else {
      $watchlist[movie.id] = movie;
    }
    localStorage.setItem("watchlist", JSON.stringify($watchlist));
  };
</script>

<main class="relative hover:z-10 group w-1/5 p-4">
  <div
    class="absolute peer flex gap-2 inset-[1rem] h-[calc(100%-2rem)] w-[calc(100%-2rem)] bg-black p-4 flex-col"
  >
    <h2 class="text-2xl font-bold">{movie.title}</h2>
    <p class="text-sm">{movie.release_date}</p>
    <p class="text-sm overflow-y-auto">{movie.overview}</p>
    <div class="mt-auto w-full flex justify-center gap-4">
      <button class="text-white px-4 py-2 rounded-md">Watch</button>
      <button class="text-white px-4 py-2 rounded-md" on:click={toggleWatching}
        >{isWatching ? "Remove from" : "Add to"} Watchlist</button
      >
    </div>
  </div>
  <img
    class="absolute group-[&:nth-child(5n-4)]:block hidden inset-[1rem] transition-transform pointer-events-none w-[calc(100%-2rem)] peer-hover:translate-x-full"
    src={`https://image.tmdb.org/t/p/w342${movie.poster_path}`}
    alt={movie.title}
  />
  <img
    class="relative group-[&:nth-child(5n-4)]:opacity-0 transition-transform pointer-events-none w-full peer-hover:-translate-x-full"
    src={`https://image.tmdb.org/t/p/w342${movie.poster_path}`}
    alt={movie.title}
  />
</main>
