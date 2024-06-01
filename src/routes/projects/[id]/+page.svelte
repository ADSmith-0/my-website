<script lang="ts">
import type { Project } from "$lib/types";
import type { PageData } from "./$types";

export let data: PageData;

$: project = data.projects?.find(
	(project: Project) => project.link === data.path,
);
</script>

<h1>{project?.name}</h1>
