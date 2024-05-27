<script lang="ts">
import { page } from "$app/stores";
import type { Project } from "$lib/types";
export let data: { projects: Project[] };
$: project = data.projects.find(
	(project) => project.link === $page.url.pathname.split("/")[2],
);
</script>

<h1>{project?.name}</h1>
