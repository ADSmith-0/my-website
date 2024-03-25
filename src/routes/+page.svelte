<script lang="ts">
  import type { PageData } from "./$types";
  export let data: PageData;

  import Card from "$lib/components/Card.svelte";
</script>

<div class="flex-column-center margin-auto mt-10">
  <h1>Top Projects</h1>
  <div
    class="flex-row-center flex-wrap gap-8 justify-content-center"
    style="max-width: 1050px;"
  >
    {#each data.projects as project (project.id)}
      <Card src={project.src} alt={project.alt} />
    {/each}
  </div>
</div>
