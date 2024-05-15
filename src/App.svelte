<script lang="ts">
  import SideBar from './lib/SideBar.svelte';
  import TmdbList from './lib/TMDBList.svelte';
  import Watchlist from './lib/Watchlist.svelte';
  import { route, Route } from './util/route';

  $: console.log($route)
  
</script>
<div class="w-full justify-start flex">
  <SideBar/>
  {#if $route == Route.WATCHLIST}
    <Watchlist/>
  {/if}
  {#if $route != Route.WATCHLIST}
    <TmdbList/>
  {/if}
</div>