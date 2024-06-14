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
import { ArrowRight } from "lucide-svelte";
import type { ComponentType } from "svelte";
import Card from "./Card.svelte";
import { fly } from "svelte/transition";

const components: Record<string, ComponentType> = {
	GratelyIcon,
	ChessIcon,
	NeovimIcon,
	ArtistNetworkIcon,
	JavaScriptIcon,
	PokedexIcon,
	SvelteIcon,
};

let hovering = false;

const setHovering = (newHovering: boolean): void => {
	hovering = newHovering;
};
</script>

<Page id="projects">
  <h2
    class="mt-5 mb-10 link"
    on:mouseover={() => setHovering(true)}
    on:focus={() => setHovering(true)}
    on:mouseleave={() => setHovering(false)}
    on:blur={() => setHovering(false)}
  >
    <a href="/projects/grately" class="fs-3xl place-self-center"
      ><span>Projects</span>
      {#if hovering}
        <span
          style="display: inline-block;"
          transition:fly={{ x: -20, duration: 400 }}
        >
          <ArrowRight />
        </span>
      {/if}
    </a>
  </h2>
  <div
    class="grid-cols w-75 gap-10 justify-content-center"
    style:--column-width="300px"
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
  </div>
</Page>
