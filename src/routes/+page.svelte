<script lang="ts">
  import type { PageData } from "./$types";
  export let data: PageData;
</script>

<div class="flex-column-center align-items-start w-50 margin-auto">
  <h1>Top Projects</h1>
  {#each data.projects as project (project.id)}
    <div>{project.name}</div>
    <div>{project.tags[0]}</div>
  {/each}
</div>
