<script lang="ts">
import type { PageData } from "./$types";
import HomePage from "$lib/HomePage.svelte";
import ProjectsPage from "$lib/ProjectsPage.svelte";
import AboutPage from "$lib/AboutPage/AboutPage.svelte";
import Navbar from "$lib/MainPage/Navbar.svelte";
export let data: PageData;
</script>

<Navbar />
<HomePage />
<ProjectsPage {data} />
<AboutPage />
