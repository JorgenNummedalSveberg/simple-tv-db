<script lang="ts">
  import { ListIcons, ListTitles, Route, route } from "../util/route";
</script>

<main
  class="w-16 relative text-white h-screen flex flex-col items-center justify-center cursor-pointer"
>
  <nav
    class="flex z-20 bg-[#2f2f2f] w-full flex-col material-symbols-outlined peer pointer-events-none"
  >
    {#each Object.values(Route) as routeTo}
      <div class="p-4 h-16 w-16 justify-center items-center flex">
        {ListIcons[routeTo]}
      </div>
    {/each}
  </nav>
  <nav
    class="flex z-10 transition-transform absolute right-[1px] flex-col hover:translate-x-[calc(100%-4rem)]"
  >
    {#each Object.values(Route) as routeTo}
      <button
        on:click={() => route.set(routeTo)}
        class="p-4 h-16 flex items-center whitespace-nowrap pl-16 hover:text-red-400 bg-[#2f2f2f] hover:bg-[#2f2f2f]"
        >{ListTitles[routeTo]}</button
      >
    {/each}
  </nav>
</main>
