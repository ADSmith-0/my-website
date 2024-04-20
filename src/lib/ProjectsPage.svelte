<script lang="ts">
import GratelyIcon from "$lib/icons/GratelyIcon.svelte";
import ChessIcon from "$lib/icons/ChessIcon.svelte";
import NeovimIcon from "$lib/icons/NeovimIcon.svelte";
import { ChevronsRight } from "lucide-svelte";
import type { ComponentType } from "svelte";
import type { PageData } from "../routes/$types";
import Page from "./Page.svelte";
import Card from "./projects/Card.svelte";
export let data: PageData;

const components: Record<string, ComponentType> = {
	GratelyIcon,
	ChessIcon,
	NeovimIcon,
};
</script>

<Page id="projects">
  <h2>Top Projects</h2>
  <div
    class="flex-row-center flex-wrap gap-10 justify-content-center"
    style="max-width: 1050px;"
  >
    {#each data.projects as { name, id, link, icon, iconSize } (id)}
      <Card {link} text={name}>
        <span
          class="flex-row-center justify-content-center"
          style="height: {iconSize}px; width: {iconSize}px;"
          slot="image"
        >
          <svelte:component this={components[icon]} />
        </span>
      </Card>
    {/each}
  </div>
  <a href="#projects" class="flex-row-center gap-2 mt-10 pb-2 fs-l link"
    >View More Projects <ChevronsRight color="var(--grey-200)" size="20px" /></a
  >
</Page>
