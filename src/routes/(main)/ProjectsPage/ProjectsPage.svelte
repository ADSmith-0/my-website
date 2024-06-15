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
  <h2 class="mt-5 mb-10">
    <a id="title" href="/projects/grately" class="fs-3xl place-self-center link"
      >Projects
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

<style>
  #title {
    position: relative;
    color: var(--grey-200);
  }

  #title::after {
    position: absolute;
    display: inline-block;
    content: url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2Utd2lkdGg9IjIiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIgY2xhc3M9Imx1Y2lkZSBsdWNpZGUtYXJyb3ctcmlnaHQiIHN0cm9rZT0iI2UxZGJkNiI+PHBhdGggZD0iTTUgMTJoMTQiLz48cGF0aCBkPSJtMTIgNSA3IDctNyA3Ii8+PC9zdmc+);
    top: calc(-1 * var(--spacing-2));
    right: 0;
    opacity: 0;
    transition: all linear 0.3s;
  }

  #title:hover::after {
    transform: translateX(var(--spacing-8));
    opacity: 1;
  }
</style>
