<script lang="ts">
  import type { PageData } from "./$types";
  import HomePage from "$lib/HomePage.svelte";
  import ProjectsPage from "$lib/ProjectsPage.svelte";
  import AboutPage from "$lib/AboutPage.svelte";
  export let data: PageData;
</script>

<div class="flex-column-center">
  <HomePage />
  <ProjectsPage {data} />
  <AboutPage />
</div>
