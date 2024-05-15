<script lang="ts">
  import { type Writable } from "svelte/store";

  export let page: Writable<number>;
  export let total_pages: number;

  $: start = Math.max(1, $page);
  $: end = Math.min(total_pages, start + 2);
  $: pageNumArray = [
    "First",
    ...Array.from({ length: end - start + 1 }, (_, i) => start + i),
    "Last",
  ];

  $: if ($page > total_pages) page.set(total_pages);

  const numFromStr = (inp: any) =>
    inp === "First" ? 1 : inp === "Last" ? total_pages : inp;
</script>

<div class="w-full flex justify-center gap-4 p-8">
  {#each pageNumArray as pageNum}
    <button
      disabled={$page === numFromStr(pageNum)}
      on:click={() => page.set(numFromStr(pageNum))}
      class="text-white disabled:opacity-60 disabled:pointer-events-none px-4 py-2 rounded-md"
      >{pageNum}</button
    >
  {/each}
</div>
