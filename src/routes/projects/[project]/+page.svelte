<script lang="ts">
  import type { PageData } from "./$types";
  export let data: PageData;
</script>

<h1>{data.project.name}</h1>
<div class="flex-row-center">{data.project.tags}</div>
<p>{data.project.description}</p>
