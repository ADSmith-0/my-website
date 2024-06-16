<script lang="ts">
import Pill from "$lib/Pill.svelte";
import type { PageData } from "./$types";
export let data: PageData;
</script>

<div class="flex-column gap-3">
  <h1>{data.project.name}</h1>
  <div class="flex-row-center gap-3 flex-wrap mb-5">
    {#each data.project.tags as tag (tag)}
      <Pill>{tag}</Pill>
    {/each}
  </div>
  <p>{data.project.description}</p>
</div>
