<script lang="ts">
import Page from "$lib/Page.svelte";
import BashIcon from "$lib/icons/BashIcon.svelte";
import NeovimIcon from "$lib/icons/NeovimIcon.svelte";
import SvelteIcon from "$lib/icons/SvelteIcon.svelte";
import TypeScriptIcon from "$lib/icons/TypeScriptIcon.svelte";
import type { ComponentType } from "svelte";
import List from "./List.svelte";

const favouriteTechnologies: [string, ComponentType][] = [
	["Svelte", SvelteIcon],
	["TypeScript", TypeScriptIcon],
	["Neovim", NeovimIcon],
	["Bash", BashIcon],
];
</script>

<Page id="about">
  <h2>About me</h2>
  <p class="mt-4 mb-10">
    I&apos;m a fullstack developer that enjoys learning new things and trying
    new technologies. I&apos;ve worked with lots of different projects, below is
    non&hyphen;exhaustive list of things that I&apos;ve enjoyed and what
    I&apos;m currently working on
  </p>
  <div class="grid-col-2fr gap-5 mt-10 w-75 margin-h-auto">
    <List title="Favourite technologies">
      {#each favouriteTechnologies as [name, icon]}
        <li class="flex-row-center gap-3 fs-xl">
          <div style="display: inline-block; width: 30px; height: 30px;">
            <svelte:component this={icon} />
          </div>
          {name}
        </li>
      {/each}
    </List>
    <List title="Currently learning">
      <li class="fs-xl">
        <a href="https://www.refactoringui.com/" class="link">Refactoring UI</a>
      </li>
      <li class="fs-xl">Go lang</li>
      <li class="fs-xl">The <strong>C</strong> programming language</li>
    </List>
  </div>
</Page>

<style>
</style>
