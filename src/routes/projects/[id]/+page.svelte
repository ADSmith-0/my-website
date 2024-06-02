<script lang="ts">
import { projects } from "$lib/projects";
import type { PageData } from "./$types";

export let data: PageData;

$: project = projects.find((project) => project.link === data.path);
</script>

<h1>{project?.name}</h1>
<div class="flex-row-center">{project?.tags}</div>
<p>{project?.description}</p>
