<script lang="ts">
import type { PageData } from "./$types";
import { height } from "$lib/stores";
import HomePage from "$lib/HomePage.svelte";
import ProjectsPage from "$lib/ProjectsPage.svelte";
import AboutPage from "$lib/AboutPage.svelte";
export let data: PageData;
</script>

<svelte:window bind:innerHeight={$height} />

<HomePage />
<ProjectsPage {data} />
<AboutPage />
