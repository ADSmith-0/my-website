<script lang="ts">
import GratelyIcon from "$lib/icons/GratelyIcon.svelte";
import ChessIcon from "$lib/icons/ChessIcon.svelte";
import NeovimIcon from "$lib/icons/NeovimIcon.svelte";
import JavaScriptIcon from "$lib/icons/JavaScriptIcon.svelte";
import ArtistNetworkIcon from "$lib/icons/ArtistNetworkIcon.svelte";
import PokedexIcon from "$lib/icons/PokedexIcon.svelte";
import SvelteIcon from "$lib/icons/SvelteIcon.svelte";
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
	ArtistNetworkIcon,
	JavaScriptIcon,
	PokedexIcon,
	SvelteIcon,
};
</script>

<Page id="projects">
  <h2 class="mv-10">Top Projects</h2>
  <div
    class="flex-row-center flex-wrap gap-10 justify-content"
    style="max-width: 996px;"
  >
    {#each data.projects as { name, link, icon, iconSize } (name)}
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
</Page>

<style>
  .justify-content {
    justify-content: flex-start;
  }

  @media (max-width: 996px) {
    .justify-content {
      justify-content: center;
    }
  }
</style>
