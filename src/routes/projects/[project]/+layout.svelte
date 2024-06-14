<script lang="ts">
import Page from "$lib/Page.svelte";
import { ArrowLeft } from "lucide-svelte";
import type { PageData } from "./$types";
export let data: PageData;
</script>

<Page id="projects-info">
  <aside class="ph-8 pt-5 bri-1 border-grey-600 flex-column gap-5 bg-grey-950">
    <a href="/" class="flex-row-center gap-3 fs-xl mt-3 mb-5 align-self-start"
      ><ArrowLeft /> Back</a
    >
    {#each data.projects as { name, link } (name)}
      <a
        href={`/projects/${link}`}
        class="fs-l pl-5"
        class:highlighted={link === data.project.link}>{name}</a
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
    grid-template-columns: minmax(200px, max-content) 1fr;
    align-items: stretch;
    justify-items: start;
  }
  .highlighted {
    font-weight: bold;
    color: var(--orange);
  }
</style>
