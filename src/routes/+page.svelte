<script lang="ts">
  import { ChevronsRight } from "lucide-svelte";
  import type { PageData } from "./$types";
  export let data: PageData;
</script>

<div class="flex-column-center margin-auto mt-10">
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
  <a href="/projects" class="flex-row-center gap-2 mt-10 pt-10 pb-2 link"
    >View More Projects <ChevronsRight
      color="var(--grey-200)"
      size="var(--font-size-m)"
    /></a
  >
</div>

<style>
  .link {
    text-decoration: none;
    position: relative;
  }
  .link:visited {
    color: var(--grey-200);
  }
  .link::after {
    content: "";
    display: block;
    bottom: 0;
    left: 0;
    height: var(--spacing-1);
    position: absolute;
    width: 0;
    background-color: var(--grey-200);
    transition: width 0.2s ease-out;
  }
  .link:hover::after {
    width: 100%;
  }
</style>
