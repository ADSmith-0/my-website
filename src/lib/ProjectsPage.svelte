<script lang="ts">
import ArtistNetworkIcon from "$lib/icons/ArtistNetworkIcon.svelte";
import ChessIcon from "$lib/icons/ChessIcon.svelte";
import GratelyIcon from "$lib/icons/GratelyIcon.svelte";
import JavaScriptIcon from "$lib/icons/JavaScriptIcon.svelte";
import NeovimIcon from "$lib/icons/NeovimIcon.svelte";
import PokedexIcon from "$lib/icons/PokedexIcon.svelte";
import SvelteIcon from "$lib/icons/SvelteIcon.svelte";
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
  <div class="grid-col-3fr gap-10 justify-content" style="max-width: 996px;">
    {#each data.projects as { name, link, icon, iconSize, borderColour } (name)}
      <Card {link} text={name} {borderColour} {iconSize}>
        <svelte:component this={components[icon]} slot="image" />
      </Card>
    {/each}
  </div>
</Page>
