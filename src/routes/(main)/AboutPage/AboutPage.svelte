<script lang="ts">
import Page from "$lib/Page.svelte";
import BashIcon from "$lib/icons/BashIcon.svelte";
import NeovimIcon from "$lib/icons/NeovimIcon.svelte";
import SvelteIcon from "$lib/icons/SvelteIcon.svelte";
import TypeScriptIcon from "$lib/icons/TypeScriptIcon.svelte";
import type { ComponentType } from "svelte";
import List from "./List.svelte";

// FIX: Fix bug where navbar cuts off the top of the new page
const favouriteTechnologies: [name: string, icon: ComponentType][] = [
	["Svelte", SvelteIcon],
	["TypeScript", TypeScriptIcon],
	["Neovim", NeovimIcon],
	["Bash", BashIcon],
];

const favouriteLearningResources: [name: string, link: string][] = [
	["Refactoring UI", "https://www.refactoringui.com/"],
	["The Primeagen", "https://www.youtube.com/@ThePrimeTimeagen/videos"],
	["MDN", "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference"],
	["web.dev", "https://web.dev/learn/"],
];
</script>

<Page id="about" className="mt-10">
  <h2>About me</h2>
  <p class="mt-4 mb-10 fs-l">
    I&apos;m a fullstack developer that enjoys learning new things and trying
    new technologies. I&apos;ve worked with lots of different projects, below is
    a non&hyphen;exhaustive list of things that I&apos;ve enjoyed and what
    I&apos;m currently working on&colon;
  </p>
  <div
    class="grid-cols place-items-stretch gap-8 mt-10 w-75 margin-h-auto"
    style:--column-width="380px"
  >
    <List
      title="Favourite technologies"
      backgroundColourStart="crimson"
      backgroundColourEnd="darkorange"
    >
      {#each favouriteTechnologies as [name, icon]}
        <li class="flex-row-center gap-3 fs-xl">
          <div style="display: inline-block; width: 30px; height: 30px;">
            <svelte:component this={icon} />
          </div>
          {name}
        </li>
      {/each}
    </List>
    <List
      title="Favourite learning resources"
      backgroundColourStart="springgreen"
      backgroundColourEnd="turquoise"
    >
      {#each favouriteLearningResources as [name, link]}
        <li class="fs-xl">
          <a href={link} class="link" target="_blank" rel="noopener noreferrer"
            >{name}</a
          >
        </li>
      {/each}
    </List>
    <List
      title="Currently learning"
      backgroundColourStart="darkviolet"
      backgroundColourEnd="hotpink"
    >
      <li class="fs-xl">Go lang</li>
      <li class="fs-xl">
        <a
          href="https://en.wikipedia.org/wiki/The_C_Programming_Language"
          class="link"
          target="_blank"
          rel="noopener noreferrer"
          >The <strong>C</strong> programming language</a
        >
      </li>
    </List>
  </div>
</Page>
