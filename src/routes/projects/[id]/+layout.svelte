<script lang="ts">
import Page from "$lib/Page.svelte";
import { projects } from "$lib/projects";
import type { PageData } from "./$types";

export let data: PageData;
</script>

<Page id="projects-info">
  <aside class="ph-8 bri-1 border-grey-600 flex-column gap-5">
    <a href="/" class="link fs-xl mt-3 mb-5 align-self-start">&lt; Back</a>
    {#each projects as { name, link } (name)}
      <a
        href={`/projects/${link}`}
        class="fs-l"
        class:highlighted={link === data.path}>{name}</a
      >
    {/each}
  </aside>
  <main class="p-5 pl-10">
    <slot />
  </main>
</Page>

<style>
  :global(#projects-info) {
    display: grid;
    grid-template-columns: minmax(200px, auto) 1fr;
    align-items: stretch;
    justify-items: start;
  }
  .highlighted {
    font-weight: bold;
    color: var(--orange);
  }
</style>
