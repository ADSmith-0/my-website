<script lang="ts">
import Page from "$lib/Page.svelte";
import ArtistNetworkIcon from "$lib/icons/ArtistNetworkIcon.svelte";
import ChessIcon from "$lib/icons/ChessIcon.svelte";
import GratelyIcon from "$lib/icons/GratelyIcon.svelte";
import JavaScriptIcon from "$lib/icons/JavaScriptIcon.svelte";
import NeovimIcon from "$lib/icons/NeovimIcon.svelte";
import PokedexIcon from "$lib/icons/PokedexIcon.svelte";
import SvelteIcon from "$lib/icons/SvelteIcon.svelte";
import { projects } from "$lib/projects";
import type { ComponentType } from "svelte";
import Card from "./Card.svelte";

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
    class="grid-col-3fr gap-10 justify-content-center"
    style="max-width: 996px;"
  >
    {#each projects as { name, link, projectLink, icon, iconSize, colour } (name)}
      <Card
        link={projectLink ?? link}
        text={name}
        borderColour={colour}
        {iconSize}
      >
        <svelte:component this={components[icon]} slot="image" />
      </Card>
    {/each}
    <a href="/projects/grately" class="link fs-2xl place-self-center">More ></a>
  </div>
</Page>
