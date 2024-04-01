<script lang="ts">
  import { ChevronsRight } from "lucide-svelte";
  import type { PageData } from "../routes/$types";
  export let data: PageData;
</script>

<div id="projects">
  <h1>Top Projects</h1>
  <div
    class="flex-row-center flex-wrap gap-8 justify-content-center"
    style="max-width: 1050px;"
  >
    {#each data.projects as { src, alt, id, link } (id)}
      <a href={link}>
        <img
          src="/images/{src}"
          {alt}
          class="border-1 br-1 border-grey-600 cursor-pointer corner"
        />
      </a>
    {/each}
  </div>
  <a href="#projects" class="flex-row-center gap-2 mt-10 pb-2 fs-l link"
    >View More Projects <ChevronsRight
      color="var(--grey-200)"
      size="var(--font-size-l)"
    /></a
  >
</div>
